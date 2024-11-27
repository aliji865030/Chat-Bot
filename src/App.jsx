import React, { useContext } from 'react'
import ChatBot from './Screen/ChatBot/ChatBot'
import "./App.css"
import Changer from './Components/Changer/Changer'
import { StoreContext } from './Context/StoreContext'

const App = () => {
  const {Dfont} = useContext(StoreContext);
  return (
    <div className='app' style={{fontFamily:`${Dfont},sans-serif`}}>
      <ChatBot/>
      <Changer/>
    </div>
  )
}

export default App
