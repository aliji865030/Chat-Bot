import { createContext, useState } from "react";
import { icons,bgColor, darkColor, fonts } from "./data.js"; 

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const Icons = icons;
    const BgColor = bgColor;
    const DARKCOLOR = darkColor;
    const FONT = fonts;

    const [botIcon, setBotIcon] = useState(Icons[0]);
    const [BGColor,setBGColor] = useState(BgColor[0]);
    const [BORDERColor,setBorderColor] = useState("#a48ed2");
    const [borderRadius,setBorderRadius] = useState("10px");
    const [titleBgColor,setTitleBgColor] = useState("Black");
    const [botTextAreaBg,setBotTextAreaBg] = useState("rgb(220, 218, 218)");
    const [botTextColor,setBotTextColor] = useState("Black");
    const [userTextareaBg,setUserTextAreaBG] = useState("Black");
    const [userTextColor,setUserTextColor] = useState("White");
    const [Dfont,setDfont] = useState(FONT[0]);

    const RandomPicker = (items) => {
        const index = Math.floor(Math.random() * items.length);
        return index;
    }
    const IconChange = () => {
        setBotIcon(Icons[RandomPicker(Icons)])
    }
    const ChangeIconBackground = () =>{
        setBGColor(BgColor[RandomPicker(BgColor)]) 
    }
    const ChangeBGcolor = () => {
        setBorderColor(BgColor[RandomPicker(BgColor)])
    }
    const ChangeBorderRadius = () => {
        const index = Math.floor(Math.random()*20);
        setBorderRadius(index);
    }
    const ChangeTitleBgColor = () => {
        setTitleBgColor(DARKCOLOR[RandomPicker(DARKCOLOR)])
    }
    const ChangeBotTextAreaBgColor = () => {
        setBotTextAreaBg(BgColor[RandomPicker(BgColor)])
    }
    const ChangeBotTextColor = () => {
        setBotTextColor(DARKCOLOR[RandomPicker(DARKCOLOR)])
    }
    const ChangeUserTextAreaBgColor = () => {
        setUserTextAreaBG(DARKCOLOR[RandomPicker(DARKCOLOR)])
    }
    const ChangeUserTextColor = () => {
        setUserTextColor(BgColor[RandomPicker(BgColor)])
    }
    const ChangeFont = () => {
        setDfont(FONT[RandomPicker(FONT)])
    }

    const contextValue = {
        botIcon,
        IconChange,
        ChangeIconBackground,
        BGColor,
        BORDERColor,
        ChangeBGcolor,
        ChangeBorderRadius,
        borderRadius,
        titleBgColor,
        ChangeTitleBgColor,
        ChangeBotTextAreaBgColor,
        botTextAreaBg,
        ChangeBotTextColor,
        botTextColor,
        ChangeUserTextAreaBgColor,
        userTextareaBg,
        ChangeUserTextColor,
        userTextColor,
        ChangeFont,
        Dfont
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
