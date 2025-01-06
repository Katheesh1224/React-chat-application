import './list.css';
import UserInfo from './userinfo/userinfo.jsx'
import UserChat from './chatlist/chatlist.jsx'
import ChatList from './chatlist/chatlist.jsx';

const List = () => {
    return(
        <div className='list'>
            <UserInfo/>
            <ChatList/>
        </div>
    )
}

export default List;
