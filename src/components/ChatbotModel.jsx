
import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";

import config from "./config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import { ConditionallyRender } from "react-util-kit";
import Gist from "react-gist";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as ButtonIcon } from "../assets/icons/robot.svg";

import 'react-chatbot-kit/build/main.css';
import style from "./chatbot/style.css"

const ChatbotModel = () => {
  const [showChatbot, toggleChatbot] = useState(true);
  return (
    <div className="flex flex-col items-center w-full">

      
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
        headerText="ARTIVE CHATBOT"
      />
    
    </div>
  )
};

export default ChatbotModel;
