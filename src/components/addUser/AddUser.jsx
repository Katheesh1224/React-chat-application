import { useState } from "react";
import "./addUser.css";
import { arrayUnion, collection, doc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";

const AddUser = () => {

    const [user, setUser] = useState(null);

    const {currentUser} = useUserStore(); 

    const handleSearch = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        try{
            const userRef = collection(db, "users");
            const q = query(userRef, where("username", "==", username));
            const querySnapshot = await getDocs(q);
            if(!querySnapshot.empty){
                setUser(querySnapshot.docs[0].data());
            }
        }
        catch(error){
            console.log(error);
        }
    }

    const handleAdd = async () => {
        const chatRef = collection(db, "chats");
        const userChatRef = collection(db, "userchats");

        try{
            const newChatRef = doc(chatRef);

            await setDoc(newChatRef, {
                createdAt: serverTimestamp(),
                messages: []
            });

            await updateDoc(doc(userChatRef, user.id), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage: "",
                    receiverId: currentUser.id,
                    updatedAt: Date.now()
                })
            });

            await updateDoc(doc(userChatRef, currentUser.id), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage: "",
                    receiverId: user.id,
                    updatedAt: Date.now()
                })
            });


            console.log(newChatRef.id);
        }
        catch(error){
            console.log(error);
        }
    }

    
    return(
        <div className="addUser">
            <form onSubmit={handleSearch}>
                <div className="type">
                    <input type="text" placeholder="Username" name="username" />
                </div>
                <button>Search</button>
            </form>
            {user && <div className="user">
                <img src={user.avatar || "./avatar.jpg"} alt="" />
                <h3>{user.username}</h3>
                <button onClick={handleAdd}>Add User</button>
            </div>
        }
        </div>
    )
}

export default AddUser;