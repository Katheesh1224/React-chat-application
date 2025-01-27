import './index.css';
import List from './components/list/List.jsx';
import Chat from './components/chat/Chat.jsx';
import Detail from './components/detail/Detail.jsx';
import Login from './login/Login.jsx';
import Notification from './components/notification/Notification.jsx';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { useUserStore } from './lib/userStore';
import { useChatStore } from './lib/chatStore.js';

function App() {

  const {currentUser, isLoading, fetchUserInfo} = useUserStore();
  const {chatId} = useChatStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    }
    );
    return () => {
      unsubscribe();
    }
  }, [fetchUserInfo]);

  if(isLoading) return <div className='loading'>Loading...</div>;

  return (
    <div className="container">
      {currentUser ? (
          <> 
            <List/>
            {chatId && <Chat/>}
            {chatId && <Detail/>} 
          </>
        ) : ( <Login/> )}
      <Notification/>
    </div>
  );
}

export default App;
