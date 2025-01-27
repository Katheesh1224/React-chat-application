import './chat.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faPhone, faCircleInfo, faFaceSmile, faPaperPlane, faImage, faCamera, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import EmojiPicker from 'emoji-picker-react';
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useChatStore } from '../../lib/chatStore';
import { useUserStore } from '../../lib/userStore';


const Chat = () => {

    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const [chat, setChat] = useState('');
    const [img, setImg] = useState({
        file: null,
        url: ''
    });

    const {currentUser} = useUserStore();
    const {chatId, user} = useChatStore();

    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
            if (res.exists()) {
                setChat(res.data());
            }
        });
    
        return () => {
            unSub();
        };
    }, [chatId]);
    

    const handleEmoji = (e) => {
        setText(text + e.emoji);
        setOpen(false);
    }

    const handleImage = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "chat_unsigned"); 
    
            try {
                const response = await fetch("https://api.cloudinary.com/v1_1/dy2u9tx8m/image/upload", {
                    method: "POST",
                    body: formData,
                });
    
                const data = await response.json();
                if (data.secure_url) {
                    console.log("Cloudinary Image URL:", data.secure_url);
                    setImg({ file, url: data.secure_url }); 
                } else {
                    console.log("Error uploading image to Cloudinary", data);
                }
            } catch (error) {
                console.error("Upload failed:", error);
            }
        }
    };

    const handleSend = async () => {
        if (text === "" && !img.url) return;
    
        let imgUrl = null;
    
        try {
            if (img.url) {
                const formData = new FormData();
                formData.append("file", img.file);
                formData.append("upload_preset", "chat_unsigned"); 
                formData.append("cloud_name", "dy2u9tx8m"); 
    
                const response = await fetch("https://api.cloudinary.com/v1_1/dy2u9tx8m/image/upload", {
                    method: "POST",
                    body: formData,
                });
    
                const data = await response.json();
                if (data.secure_url) {
                    imgUrl = data.secure_url;  
                } else {
                    console.error("Error uploading image to Cloudinary:", data);
                }
            }
    
            await updateDoc(doc(db, "chats", chatId), {
                messages: arrayUnion({
                    senderId: currentUser.id,
                    text: text,
                    createAt: new Date(),
                    ...(imgUrl && { img: imgUrl }), 
                }),
            });
    
            const userIDs = [currentUser.id, user.id];
            for (let id of userIDs) {
                const userChatRef = doc(db, "userchats", id);
                const userChatSnap = await getDoc(userChatRef);
    
                if (userChatSnap.exists()) {
                    const userChatsData = userChatSnap.data();
                    const chatIndex = userChatsData.chats.findIndex((c) => c.chatId === chatId);
                    userChatsData.chats[chatIndex].lastMessage = text;
                    userChatsData.chats[chatIndex].isSeen = id === currentUser.id ? true : false;
                    userChatsData.chats[chatIndex].updatedAt = Date.now();
    
                    await updateDoc(userChatRef, {
                        chats: userChatsData.chats,
                    });
                }
            }
        } catch (error) {
            console.error("Failed to send message:", error);
        }
    
        setImg({ file: null, url: "" });
        setText("");
    };
    
    
    return(
        <div className='chat'>
            <div className='top'>
                <div className='user'>
                    <img src='./avatar.jpg' alt=''/>
                    <div className='partner'>
                        <h2>Vootukari</h2>
                        <p>Last seen 09.00 am</p>
                    </div>

                </div>
                <div className='icons'>
                    <FontAwesomeIcon icon={faPhone} />
                    <FontAwesomeIcon icon={faVideo} />
                    <FontAwesomeIcon icon={faCircleInfo} />
                </div>
            </div>

            <div className='middle'>
                {chat.messages && chat.messages.map((message) => (
                    <div className={message.senderId === currentUser?.id ? "message own" : "message"} key={message?.createAt}>
                        {message.text && <p>{message.text}</p>}
                        {message.img && (
                            <div className="img-box">
                                <img src={message.img} alt="Sent" />
                            </div>
                        )}
                        {/* <span>{message.createAt}</span> */}
                    </div>
                ))}
            </div>

            <div className='bottom'>
                <div className='icons'>
                    <label htmlFor="file">
                        <FontAwesomeIcon icon={faImage} />
                    </label>
                    <input type="file" id='file' style={{display:"none"}} on onChange={handleImage}/>
                    <FontAwesomeIcon icon={faCamera} />
                    <FontAwesomeIcon icon={faMicrophone} />
                </div>
                <div className='type'>
                    <input type='text' 
                        placeholder='Type a message' 
                        value={text} 
                        onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className='icons'>
                    <FontAwesomeIcon icon={faFaceSmile} onClick={() => setOpen((prev) => !prev)}/>
                    <div className='emoji'>
                        <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                    <FontAwesomeIcon icon={faPaperPlane} onClick={handleSend}/>
                </div>
            </div>
            
        </div>
    )
}

export default Chat;
