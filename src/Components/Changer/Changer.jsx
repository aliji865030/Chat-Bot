import React, { useContext } from 'react'
import "./Changer.css"
import { StoreContext } from '../../Context/StoreContext'

const Changer = () => {
    const {IconChange,ChangeIconBackground,ChangeBGcolor,ChangeBorderRadius,ChangeTitleBgColor,ChangeBotTextAreaBgColor,ChangeBotTextColor,ChangeUserTextAreaBgColor,ChangeUserTextColor,ChangeFont} = useContext(StoreContext)
  return (
    <div className='changer'> 
      <button onClick={()=>IconChange()}>Change Icon</button>
      <button onClick={()=>ChangeIconBackground()}>Change bot icon bg color</button>
      <button onClick={()=>ChangeBGcolor()}>Change border color</button>
      <button onClick={()=>ChangeBorderRadius()}> Change border radius</button>
      <button onClick={()=>ChangeTitleBgColor()}>Change title bg color</button>
      <button onClick={()=>ChangeBotTextAreaBgColor()}> Change bot textarea bg color</button>
      <button onClick={()=>ChangeBotTextColor()}>Change bot text color</button>
      <button onClick={()=>ChangeUserTextAreaBgColor()}>Change user textarea bg color</button>
      <button onClick={()=>ChangeUserTextColor()}>Change user text color</button>
      <button onClick={()=>ChangeFont()}>Change font</button>
    </div>
  )
}

export default Changer
