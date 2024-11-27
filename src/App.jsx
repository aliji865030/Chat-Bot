import React from 'react'
import ChatBot from './Screen/ChatBot/ChatBot'
import "./App.css"
import Changer from './Components/Changer/Changer'

const App = () => {
  return (
    <div className='app'>
      <ChatBot/>
      <Changer/>
    </div>
  )
}

export default App
