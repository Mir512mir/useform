import React, { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";

import './themeBtn.scss';

function ThemeBtn() {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <label id="switch" className="switch">
            <input type="checkbox" id="slider" />
            <span
                onClick={toggleTheme}
                className="slider round">
            </span>
        </label>
    );
}

export default ThemeBtn;