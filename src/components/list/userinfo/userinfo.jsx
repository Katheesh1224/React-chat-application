import './userInfo.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faVideo, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useUserStore } from '../../../lib/userStore';

const UserInfo = () => {

    const {currentUser} = useUserStore();

    return(
        <div className='userinfo'>
            <div className='user'>
                <img src={currentUser.avatar || './avatar.png'} alt=''/>
                <h2>{currentUser.username}</h2>
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
