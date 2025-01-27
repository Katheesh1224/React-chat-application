import './detail.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faExpand } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../../lib/firebase';


const Detail = () => {
    return(
        <div className='detail'>
            <div className="user">
                <img src='./avatar.jpg' alt=''/>
                <h2>Vootukari</h2>
                <p>Pachcha paithiyakaari</p>
            </div>
            <div className="detail-items">
                <div className="item">
                    <p>Chat Settings</p>
                    <div className="icon">
                        <FontAwesomeIcon icon={faAngleDown} size="2xs" />
                    </div>
                </div>
                <div className="item">
                    <p>Privacy & Help</p>
                    <div className="icon">
                        <FontAwesomeIcon icon={faAngleDown} size="2xs" />
                    </div>                </div>
                <div className="item">
                    <p>Shared Photots</p>
                    <div className="icon">
                        <FontAwesomeIcon icon={faAngleUp} size="2xs" />
                    </div>                
                </div>
                <div className="item photo">
                    <img src='./bmw.jpg' alt=''/>
                    <p>photo_2024_2.jpg</p>
                    <div className="icon">
                        <FontAwesomeIcon icon={faExpand} size="2xs" />
                    </div>                
                </div>
                <div className="item photo">
                    <img src='./bmw.jpg' alt=''/>
                    <p>photo_2024_2.jpg</p>
                    <div className="icon">
                        <FontAwesomeIcon icon={faExpand} size="2xs" />
                    </div>                
                </div>
                <div className="item photo">
                    <img src='./bmw.jpg' alt=''/>
                    <p>photo_2024_2.jpg</p>
                    <div className="icon">
                        <FontAwesomeIcon icon={faExpand} size="2xs" />
                    </div>                
                </div>
                <div className="item photo">
                    <img src='./bmw.jpg' alt=''/>
                    <p>photo_2024_2.jpg</p>
                    <div className="icon">
                        <FontAwesomeIcon icon={faExpand} size="2xs" />
                    </div>                
                </div>
                <div className="item photo">
                    <img src='./bmw.jpg' alt=''/>
                    <p>photo_2024_2.jpg</p>
                    <div className="icon">
                        <FontAwesomeIcon icon={faExpand} size="2xs" />
                    </div>                
                </div>
                <div className="item photo">
                    <img src='./bmw.jpg' alt=''/>
                    <p>photo_2024_2.jpg</p>
                    <div className="icon">
                        <FontAwesomeIcon icon={faExpand} size="2xs" />
                    </div>                
                </div>
                <div className="item photo">
                    <img src='./bmw.jpg' alt=''/>
                    <p>photo_2024_2.jpg</p>
                    <div className="icon">
                        <FontAwesomeIcon icon={faExpand} size="2xs" />
                    </div>                
                </div>
                <div className="item photo">
                    <img src='./bmw.jpg' alt=''/>
                    <p>photo_2024_2.jpg</p>
                    <div className="icon">
                        <FontAwesomeIcon icon={faExpand} size="2xs" />
                    </div>                
                </div>
                <div className="item photo">
                    <img src='./bmw.jpg' alt=''/>
                    <p>photo_2024_2.jpg</p>
                    <div className="icon">
                        <FontAwesomeIcon icon={faExpand} size="2xs" />
                    </div>                
                </div>
                <div className="item">
                    <p>Shared Files</p>
                    <div className="icon">
                        <FontAwesomeIcon icon={faAngleDown} size="2xs" />
                    </div>                
                </div>
                <button>Block User</button>
            </div>
            <button className='logout' onClick={() => auth.signOut()}>Logout</button>
        </div>
    )
}

export default Detail;
