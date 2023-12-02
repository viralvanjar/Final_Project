// Importing required dependency for Themes
import './Style.css';
import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';

// Createing the function for Themes
const Style = () => {

    // using usestate hook for opening and closing theme tab
    const [open, setOpen] = useState(false);
    // using usestate hook for light and dark mode
    const [mode, setMode] = useState(false);

    const alternativ = document.querySelectorAll(".alternativ");

    const setColorStyle=(color) =>{
        alternativ.forEach((style) => {
            if (color === style.getAttribute("title")) {
                style.removeAttribute("disabled");
            }
            else {
                style.setAttribute("disabled", "true");
            }
        })
    }

    const darkLight = () => {
        document.body.classList.toggle("dark");
        setMode(mode => !mode);
    }

    const themeColor = () => {
        setOpen(open => !open);
    }

    const setcolorStyle = () =>{
        setColorStyle('skinColor-1')
    }
    const setcOlorStyle = () =>{
        setColorStyle('skinColor-2')
    }
    const setcoLorStyle = () =>{
        setColorStyle('skinColor-3')
    }
    const setcolOrStyle = () =>{
        setColorStyle('skinColor-4')
    }
    const setcoloRStyle = () =>{
        setColorStyle('skinColor-5')
    }

    const removeTheme = () => {
        setOpen(false);
    }

    return (
        <div className={open ? "style-switcher open" : "style-switcher"}>
            <div className="style-switcher-toggler s-icon" onClick={themeColor}>
                <i className="fa fa-cogs"></i>
            </div>
            <div className="light-dark s-icon" onClick={darkLight}>
                <i className={mode ? "fas fa fa-sun-o" : "fas fa fa-moon-o"}></i>
            </div>
            <h4>Theme Colors</h4>
            <div className="colors" onClick={removeTheme}>
                <span className="color-1" onClick={setcolorStyle}></span>
                <span className="color-2" onClick={setcOlorStyle}></span>
                <span className="color-3" onClick={setcoLorStyle}></span>
                <span className="color-4" onClick={setcolOrStyle}></span>
                <span className="color-5" onClick={setcoloRStyle}></span>
            </div>
        </div>
    )
}
export default Style;