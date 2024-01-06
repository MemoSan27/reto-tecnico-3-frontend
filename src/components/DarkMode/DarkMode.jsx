import React from "react";
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";
import "./DarkMode.css";
import { useDarkMode } from "../../hooks/useDarkMode";

const DarkMode = () => {
    
    const {toggleTheme} = useDarkMode();

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <img className="svg sun" src={Sun} alt="Sun" />
                <img className="svg moon" src={Moon} alt="Moon" />
            </label>
        </div>
    );
};

export default DarkMode;
