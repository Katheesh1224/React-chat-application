import './chat.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faPhone, faCircleInfo, faFaceSmile, faPaperPlane, faImage, faCamera, faMicrophone } from '@fortawesome/free-solid-svg-icons';


const Chat = () => {
    return(
        <div className='chat'>
            <div className='partner-info'>
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
            <div className='type-bar'>
                <div className='icons'>
                    <FontAwesomeIcon icon={faImage} />
                    <FontAwesomeIcon icon={faCamera} />
                    <FontAwesomeIcon icon={faMicrophone} />
                </div>
                <div className='message'>
                    <input type='text' placeholder='Type a message'/>
                </div>
                <div className='icons'>
                    <FontAwesomeIcon icon={faFaceSmile} />
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
            </div>
            
        </div>
    )
}

export default Chat;
