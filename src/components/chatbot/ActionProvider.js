import React,{ useState, useEffect } from "react";

class ActionProvider {

    constructor(createChatbotMessage, setStateFunc, createClientMessage)
     {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    //output by chatbot
    chat = () => {
      const message= this.createChatbotMessage();
      this.addChatbotMessageToState(message);
    }

    greet = () => {
      const message = this.createChatbotMessage("Hello, I am artive Chatbot");
      this.addChatbotMessageToState(message);   
    }

    offerHelp = () => {
      const message = this.createChatbotMessage("How can I help you?");
      this.addChatbotMessageToState(message);
    }

    addChatbotMessageToState = (message) => {
      this.setState(prevState => ({
        ...prevState,
        messages: [...prevState.messages, message],

      }));
    }
  }
  
  export default ActionProvider;