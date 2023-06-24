import { useState } from "react"

const VisualSettings = () => {
    const [size, setSize] = useState("1");
    const [darkMode, setDarkMode] = useState(true);

    document.documentElement.style.setProperty('--size', Math.ceil(Number(size) * 100 + 15) + "%");

    return (
        <div className="element visuals" >
            <h3>Visuals</h3>
            <div className="zoom">
                <div>
                    <p>Zoom - {Math.ceil(Number(size) * 100)}%</p>
                    <button className="default" onClick={() => setSize("1")}>default</button>
                </div>
                <input
                    type="range"
                    id="zoom"
                    min={.75}
                    max={1.3}
                    step={.01}
                    value={size}
                    onChange={(input) => setSize(input.target.value)}
                    tabIndex={5}
                />
            </div>
            <div className="theme">
                <p>{darkMode ? "Dark" : "Light"} Mode</p>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => setDarkMode(!darkMode)}
                        tabIndex={6}
                    />
                    <span />
                </label>
            </div>
            <div className="language">
                <p>Language</p>
                <select tabIndex={7}>
                    <option value="english">English</option>
                    <option value="chinese-s">Chinese (Simplified)</option>
                    <option value="chinese-t">Chinese (Traditional)</option>
                </select>
            </div>
        </div>
    )
}

export default VisualSettings