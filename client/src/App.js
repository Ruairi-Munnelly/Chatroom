// client/src/App.js

import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client';
import Home from './pages/home';
import Chat from './pages/chat';

const socket = io.connect('http://localhost:4000');

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  let homeProps = {
    username: username,
    setUsername: setUsername,
    room: room,
    setRoom: setRoom,
    socket: socket,
  }

  let chatProps = {
    username: username,
    room: room, 
    socket: socket,
  }

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={
          <Home {...homeProps}/>} />
          <Route path='/chat' element={<Chat {...chatProps} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;