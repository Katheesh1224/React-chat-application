import './chatList.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faMinus } from '@fortawesome/free-solid-svg-icons';
import AddUser from '../../addUser/AddUser.jsx';
import { useUserStore } from '../../../lib/userStore.js';
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from '../../../lib/firebase.js';
import { useChatStore } from '../../../lib/chatStore.js';


const ChatList = () => {

    const [addMode, setAddMode] = useState(false);
    const [chats, setChats] = useState([]);

    const {currentUser} = useUserStore();
    const {chatId, changeChat} = useChatStore();


    useEffect(() => {
        const unSub = onSnapshot(doc(db, "userchats", currentUser.id), 
        async (res) => {
            const items = res.data().chats;
            const promisses = items.map(async (item) => {
                const userDocRef = doc(db, "users", item.receiverId);
                const userDocSnap = await getDoc(userDocRef);

                const user = userDocSnap.data();

                return {...item, user};
            });

            const chatData = await Promise.all(promisses);
            setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
        }
        );

        return () => {
            unSub();
        }
    }
    , [currentUser.id]);

    const handleSelect = async (chat) => {
        const userChats = chats.map(item => {
            const {user, ...rest} = item;
            return rest;
        });

        const chatIndex = userChats.findIndex((item) => item.chatId === chat.chatId);

        userChats[chatIndex].isSeen = true;

        const userChatRef = doc(db, "userchats", currentUser.id);

        try{
            await updateDoc(userChatRef, {
                chats: userChats,
            });
        }
        catch(error){
            console.log(error);
        }

        changeChat(chat.chatId, chat.user);
    }

    return(
        <div className='chatlist'>
            <div className='search'>
                <div className='search-bar'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type='text' placeholder='Search'/>
                </div>
                <div className='add'>
                    <FontAwesomeIcon icon={addMode ? faMinus : faPlus} onClick={() => setAddMode((prev) => !prev)}/>
                </div>
            </div>
            {chats.map((chat) => (
            <div className='recent-chat-list' key={chat.chatId} onClick={() => handleSelect(chat)}
                style={{backgroundColor: chat?.isSeen ? 'transparent' : 'blue'}}>
            
                <img src={chat.user.avatar || './avatar.jpg'} alt=''/>
                <div className='person'>
                    <h3>{chat.user.username}</h3>
                    <p>{chat.lastMessage}</p>
                </div>
            </div>
        ))}
            {addMode && <AddUser/>}
        </div>
    )
}

export default ChatList;
