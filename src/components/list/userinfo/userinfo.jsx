import './userinfo.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faVideo, faEdit } from '@fortawesome/free-solid-svg-icons';


const UserInfo = () => {
    return(
        <div className='userinfo'>
            <div className='user'>
                <img src='./avatar.png' alt=''/>
                <h2>Gobikatheesh</h2>
            </div>
            <div className='icons'>
                <FontAwesomeIcon icon={faEllipsis} />
                <FontAwesomeIcon icon={faVideo} />
                <FontAwesomeIcon icon={faEdit} />
            </div>
        </div>
    )
}

export default UserInfo;
