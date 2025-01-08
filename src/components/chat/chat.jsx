import './chat.css';
import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faPhone, faCircleInfo, faFaceSmile, faPaperPlane, faImage, faCamera, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {

    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');

    const handleEmoji = (e) => {
        setText(text + e.emoji);
        setOpen(false);
    }


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
                <div className="message">
                    <p>vwijscbjscbsja cbskc bkecksjcnxmckjsbc jskcbsdkcjbscjskcbskckscas
                        ascnajskcbascascjanscjascbajcbsakjcbsacasc
                        slcbsckhbashckbascascjbaskc
                    </p>
                    <span>09.00 am</span>
                </div>
                <div className="message own">
                    <p>vwijscbjscbsjacbsk</p>
                    <span>09.00 am</span>
                </div>
                <div className="message">
                    <p>vwijscbjscbsjacbskcbkecksjcnxmckjsbc jskcbsdkcjbscjskcbskckscas
                        ascnajskcbascascjanscjascbajcbsakjcbsacasc
                        slcbsckhbashckbascascjbaskc
                    </p>
                    <span>09.00 am</span>
                    <p>vwijscbjscbsjacbskcbkecksjcnxmckjsbc jskcbsdkcjbscjskcbskckscas
                        ascnajskcbascascjanscjascbajcbsakjcbsacasc
                        slcbsckhbashckbascascjbaskc
                    </p>
                    <span>09.00 am</span>
                </div>
                <div className="message own">
                    <div className="img-box">
                        <img src='./bmw.jpg' alt=''/>
                    </div>
                    <span>09.00 am</span>
                    <p>vwijscbjscbsjacbskcbkecksjcnxmckjsbc jskcbsdkcjbscjskcbskckscas
                        ascnajskcbascascjanscjascbajcbsakjcbsacasc
                        slcbsckhbashckbascascjbaskc
                    </p>
                    <span>09.00 am</span>
                </div>
                <div className="message">
                    <p>vwijscbjscbsjacbskcbkecksjcnxmckjsbc jskcbsdkcjbscjskcbskckscas
                        ascnajskcbascascjanscjascbajcbsakjcbsacasc
                        slcbsckhbashckbascascjbaskc
                    </p>
                    <span>09.00 am</span>
                </div>
                <div className="message own">
                    <p>vwijscbjscbsjacbskcbkecksjcnxmckjsbc jskcbsdkcjbscjskcbskckscas
                        ascnajskcbascascjanscjascbajcbsakjcbsacasc
                        slcbsckhbashckbascascjbaskc
                    </p>
                    <span>09.00 am</span>
                </div>
                <div className="message">
                    <p>vwijscbjscbsjacbskcbkecksjcnxmckjsbc jskcbsdkcjbscjskcbskckscas
                        ascnajskcbascascjanscjascbajcbsakjcbsacasc
                        slcbsckhbashckbascascjbaskc
                    </p>
                    <span>09.00 am</span>
                </div>
            </div>
            <div className='bottom'>
                <div className='icons'>
                    <FontAwesomeIcon icon={faImage} />
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
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
            </div>
            
        </div>
    )
}

export default Chat;
