import React from 'react'
import "./ChatBot.css"
import { IoMdClose } from "react-icons/io";
import { BsChatDotsFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";

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
        <div className="chat">
            <div className='bot-q'>
                <span>Hello Jinn</span>
            </div>
            <div className='bot-reply'>
                <span className='chat-icon'><BsChatDotsFill /></span>
                <span className='bot-chat'>
                    <p>Hello Ali! How can i help you today?</p>
                </span>
            </div>
        </div>
        <div className="foot">
            <div className='text'>
                <input type="text" placeholder='Ask us anything...' />
            </div>
            <div className="icon">
                <IoMdSend />
            </div>
        </div>
      
    </div>
  )
}

export default ChatBot
