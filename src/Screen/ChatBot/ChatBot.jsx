import React, { useContext } from 'react'
import "./ChatBot.css"
import { IoMdClose } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { StoreContext } from '../../Context/StoreContext';

const ChatBot = () => {
    const {botIcon,BGColor,BORDERColor,borderRadius} = useContext(StoreContext)
  return (
    <div className='chat-bot' style={{borderColor:BORDERColor,borderRadius:borderRadius}}>
        <div className="head">
            <div className="bot-name">
                <div className='icon' style={{backgroundColor:BGColor}}>
                    {botIcon}
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
                <span className='chat-icon'>{botIcon}</span>
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
