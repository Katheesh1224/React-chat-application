import "./login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { doc, setDoc } from "firebase/firestore"; 

const Login = () => {

    const [avatar, setAvatar] = useState({
        file:null,
        url:""
    })

    const [loading, setLoading] = useState(false);
        
    const handleAvatar = (e) =>{
        if(e.target.files[0]){
            setAvatar({
                file:e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const {email, password} = Object.fromEntries(formData);
        try{
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Signed In Successfully");
        }
        catch(error){
            console.log(error);
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const {username, email, password} = Object.fromEntries(formData);

        try{
            const res = await createUserWithEmailAndPassword(auth, email, password);

            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                id: res.user.uid,
                blocked: [],
                avatar: avatar.url || "./avatar.png",
            });

            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: [],
            });

            toast.success("Signed Up Successfully");

        }
        catch(error){
            console.log(error);
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }

    return (
        <div className="login">
            <div className="left">
                <h2>Welcome Back</h2>
                <form onSubmit={handleSignIn}>
                    <div className="input-bar">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input type="text" placeholder="Email" name="email"/>
                    </div>
                    <div className="input-bar">
                        <FontAwesomeIcon icon={faKey} />
                        <input type="password" placeholder="Password" name="password"/>
                    </div>
                    <button disabled={loading} >{loading ? "Loading" : "Sign In"}</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="right">
                <h2>Create An Account</h2>
                <form onSubmit={handleSignUp}>
                    <label htmlFor="file">
                        <input type="file" id="file" style={{display: 'none'}} onChange={handleAvatar}/>
                        <img src={avatar.url || "./avatar.png"} alt=""/> Upload a profile Picture
                    </label>
                    <div className="input-bar">
                        <FontAwesomeIcon icon={faUser} />
                        <input type="text" placeholder="Username" name="username"/>
                    </div>
                    <div className="input-bar">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input type="text" placeholder="Email" name="email"/>
                    </div>
                    <div className="input-bar">
                        <FontAwesomeIcon icon={faKey} />
                        <input type="password" placeholder="Password" name="password"/>
                    </div>
                    <button disabled={loading} >{loading ? "Loading" : "Sign Up"}</button>
                </form>
            </div>
        </div>
    )
}

export default Login;