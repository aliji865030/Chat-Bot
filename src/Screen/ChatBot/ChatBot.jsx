import React from 'react'
import "./ChatBot.css"
import { IoMdClose } from "react-icons/io";
import { BsChatDotsFill } from "react-icons/bs";

const ChatBot = () => {
  return (
    <div className='chat-bot'>
        <div className="head">
            <div className="bot-name">
                <div className='icon'>
                    <BsChatDotsFill style={{color:"#0f9bf0"}} />
                </div>
                <div className='bots-name'>
                    <span>Jinn Live</span>
                    <span className='demo'>Demo Bot</span>
                </div>
            </div>
            <div className="close">
                <IoMdClose />
            </div>
        </div>
        <div className="chat"></div>
        <div className="foot"></div>
      
    </div>
  )
}

export default ChatBot
