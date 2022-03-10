import React,{useState, useEffect} from "react";
class MessageParser {
  
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
      this.handleSubmit=this.handleSubmit.bind(this);
    }

    //user input
    parse(message) 
    {
      console.log(message);
      const lowercaseMessage = message.toLowerCase();

      if(lowercaseMessage.includes("hello"))
      {
        this.actionProvider.greet();
        this.actionProvider.offerHelp();
        this.handleSubmit();
      }
    }
      handleSubmit(event) {
      event.preventDefault();
      fetch("http://127.0.0.1:8000/messages/", {
        method: "POST",
        headers: 
        {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id:null,
          input:this.lowercaseMessage,
          output:this.actionProvider.greet(),
        }),
      })
        .then((response) => response.json())
        .then(
          (result) => {
            alert(result);
          },
          (error) => {
            alert("Failed");
          }
        );
    }
  }

  export default MessageParser;
  