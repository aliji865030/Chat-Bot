import React, { useContext } from 'react'
import "./Changer.css"
import { StoreContext } from '../../Context/StoreContext'

const Changer = () => {
    const {IconChange,ChangeIconBackground,ChangeBGcolor,ChangeBorderRadius} = useContext(StoreContext)
  return (
    <div className='changer'> 
      <button onClick={()=>IconChange()}>Change Icon</button>
      <button onClick={()=>ChangeIconBackground()}>Change Bot BG</button>
      <button onClick={()=>ChangeBGcolor()}>Change border color</button>
      <button onClick={()=>ChangeBorderRadius()}> Change Border Radius</button>
    </div>
  )
}

export default Changer
