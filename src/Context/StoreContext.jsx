import { createContext, useState } from "react";
import { icons,bgColor } from "./data.js"; 

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const Icons = icons;
    const BgColor = bgColor;

    const [botIcon, setBotIcon] = useState(Icons[0]);
    const [BGColor,setBGColor] = useState(BgColor[0]);
    const [BORDERColor,setBorderColor] = useState("#a48ed2");
    const [borderRadius,setBorderRadius] = useState("10px");

    const RandomPicker = (items) => {
        const index = Math.floor(Math.random() * items.length);

        return index;
    }
    const IconChange = () => {
        setBotIcon(Icons[RandomPicker(Icons)])
        console.log(Icons);       
    }
    const ChangeIconBackground = () =>{
        setBGColor(BgColor[RandomPicker(BgColor)])
        console.log(BGColor);
        
    }
    const ChangeBGcolor = () => {
        setBorderColor(BgColor[RandomPicker(BgColor)])
    }
    const ChangeBorderRadius = () => {
        const index = Math.floor(Math.random()*20);
        setBorderRadius(index);
    }
    
    const contextValue = {
        botIcon,
        IconChange,
        ChangeIconBackground,
        BGColor,
        BORDERColor,
        ChangeBGcolor,
        ChangeBorderRadius,
        borderRadius
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
