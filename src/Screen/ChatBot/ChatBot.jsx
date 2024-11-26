import React from 'react'
import "./ChatBot.css"

const ChatBot = () => {
  return (
    <div className='chat-bot'>
        <div className="head">
            <div className="bot-name"></div>
            <div className="close"></div>
        </div>
        <div className="chat"></div>
        <div className="foot"></div>
      
    </div>
  )
}

export default ChatBot
