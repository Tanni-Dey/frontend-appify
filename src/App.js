import { Routes, Route } from 'react-router-dom';
import './App.css';
import Friends from './components/pages/Friends/Friends';
import Home from './components/pages/Home/Home';
import Message from './components/pages/Message/Message';
import Notification from './components/pages/Notification/Notification';
import Header from './components/shared/Header/Header';
import Sidebar1 from './components/shared/Sidebar1/Sidebar1';
import Sidebar2 from './components/shared/Sidebar2/Sidebar2';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='px-10 lg:px-20 grid grid-cols-5 gap-3 my-2'>
        <Sidebar1 />
        <div className='col-span-5 lg:col-span-3'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/friends' element={<Friends />} />
            <Route path='/notification' element={<Notification />} />
            <Route path='/message' element={<Message />} />
          </Routes>
        </div>
        <Sidebar2 />
      </div>
    </div>
  );
}

export default App;
