import React,{useState} from "react";
import "./Modal.css";
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

function Modal({ setOpenModal }) {
  return (
      <div className="moveModalBot">
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
​
        </div>
        <Chatbot 
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
        headerText="ARTIVE CHATBOT"
      />
      </div>
    </div>
   </div>
  );
}
export default Modal;