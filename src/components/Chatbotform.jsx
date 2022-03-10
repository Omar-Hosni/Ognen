import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components';

import Myimg from '../images/Arthur.png';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial',
  headerBgColor: '#72a5f2',
  headerFontColor: '#fff',
  headerFontSize: '18px',
  botBubbleColor: '#72a5f2',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const config ={
  width: "400px",
  height: "500px", 
  floating: true,
  botAvatar:Myimg,
  headerTitle:'Arthur Bot',
  floatingIcon:Myimg
};


export default class Chatbotform extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <button 
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mb-3"
      >
        Fetch Data
        </button>
              </ThemeProvider>
    );
  }
}

/*
 <ChatBot 
       steps={[
         {
          id:'intro', 
          message:'Hello. What is your name?', 
          trigger:'intro-user',
         },
         {
          id:'intro-user', 
          user:true,  
          trigger:'test'
         },
         {
          id:'test', 
          message:'. What is your name?', 
         },

        ]}
        {...config}
      />
*/