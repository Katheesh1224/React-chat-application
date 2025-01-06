import './chatlist.css';
import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faMinus } from '@fortawesome/free-solid-svg-icons';


const ChatList = () => {

    const [addMode, setAddMode] = useState(false);

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
            <div className='recent-chat-list'>
                <img src='./avatar.jpg' alt=''/>
                <div className='person'>
                    <h3>Vootukari</h3>
                    <p>Hello</p>
                </div>
            </div>
            <div className='recent-chat-list'>
                <img src='./avatar.jpg' alt=''/>
                <div className='person'>
                    <h3>Amma</h3>
                    <p>Hello</p>
                </div>
            </div>
            <div className='recent-chat-list'>
                <img src='./avatar.jpg' alt=''/>
                <div className='person'>
                    <h3>Gobikatheesh</h3>
                    <p>Hello</p>
                </div>
            </div>
            <div className='recent-chat-list'>
                <img src='./avatar.jpg' alt=''/>
                <div className='person'>
                    <h3>Gobikatheesh</h3>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default ChatList;
