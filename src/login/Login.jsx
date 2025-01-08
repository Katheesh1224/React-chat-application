import "./login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {

    const [avatar, setAvatar] = useState({
        file:null,
        url:""
    })
        
    const handleAvatar = (e) =>{
        if(e.target.files[0]){
            setAvatar({
                file:e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        toast.success("Signed In Successfully");
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        toast.success("Signed Up Successfully");
    }

    return (
        <div className="login">
            <div className="left">
                <h2>Welcome Back</h2>
                <form onSubmit={handleSignIn}>
                    <div className="input-bar">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div className="input-bar">
                        <FontAwesomeIcon icon={faKey} />
                        <input type="password" placeholder="Password"/>
                    </div>
                    <button>Sign In</button>
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
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div className="input-bar">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div className="input-bar">
                        <FontAwesomeIcon icon={faKey} />
                        <input type="password" placeholder="Password"/>
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Login;