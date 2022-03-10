import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import { Chat } from './components/Chat';
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Sidebar/Header'
import { Manage } from './components/Manage';
import ChatbotModel from './components/ChatbotModel';
import { Intents } from './components/Intents';
import { Search } from './components/Search';
import Stats  from './components/Stats';
import Chatbotform from './components/Chatbotform';
import img from "./images/Arthur.png"
import Modal from './components/Modal';


const App = () => {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <BrowserRouter>
    
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="main-panel">
          <div className="content">
          <div className="absolute bottom-0 right-0 h-16 w-16 mr-12">
          
          <button
          
          className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full mb-3"
          onClick={()=>{
            setModalOpen(!modalOpen);
          }}
          > 
            Arthur
          </button>
         
        </div>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
          <div className="ml-4 mr-4 mt-2">
              <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/history" element={<Chat />} />
                <Route path="/manage" element={<Manage />} />
                <Route path="/chatbot" element={<ChatbotModel />} />
                <Route path="/intents" element={<Intents />} />
                <Route path="/search" element={<Search />} />
                <Route path="/stats" element={<Stats/>} />
              </Routes>
              </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;