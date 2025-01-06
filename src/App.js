import './index.css';
import List from './components/list/list.jsx';
import Chat from './components/chat/chat.jsx';
import Detail from './components/detail/detail.jsx';


function App() {
  return (
    <div className="container">
      <List/>
      <Chat/>
      <Detail/>
    </div>
  );
}

export default App;
