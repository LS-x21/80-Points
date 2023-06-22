import { useState, useEffect } from "react";
import "../scss/homescreen.scss";
import Logo from "../images/Logo";
import Footer from "./Footer";
import ShortArrow from "../images/ShortArrow";
import Settings from "./Settings";

function Homescreen() {
    const [indicatorHeight, setIndicatorHeight] = useState(0);
    const scrollHeight = 8;
    const scrollHeightLimit = 7;
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            setIndicatorHeight((Math.ceil(currentScroll / totalScrollHeight * 1000) / 100 - .01) * (scrollHeight / 10));
        })
    });
    return (
        <>
            <Settings />
            <div className="main">
                <div className="container">
                    <div className="title">
                        <Logo className="logo" />
                        <h1>八十分</h1>
                    </div>
                    <div className="content">
                        <h3>
                            80 POINTS
                        </h3>
                        <h4>
                            A Traditional Chinese Card Game
                        </h4>
                        <div>
                            <button className="enter" tabIndex={1}>
                                <ShortArrow className="short-arrow-rev" />
                                <p>
                                    Enter
                                </p>
                                <ShortArrow className="short-arrow" />
                            </button>
                            <button className="create" tabIndex={2}>
                                <ShortArrow className="short-arrow-rev" />
                                <p>
                                    Create
                                </p>
                                <ShortArrow className="short-arrow" />
                            </button>
                        </div>
                    </div>
                    <div className="spacer" />
                </div>
                <div className="scroll-indicator-container">
                    <div className="scroll-indicator-wrapper">
                        <div
                            className="scroll-indicator"
                            style={{ height: indicatorHeight + "rem" }}
                        >
                            <p
                                id={indicatorHeight > scrollHeightLimit ? "scroll-indicator-credit" : "null"}
                            >{indicatorHeight < scrollHeightLimit ? "home" : "credits"}</p>
                            <div
                                id={indicatorHeight > scrollHeightLimit ? "scroll-indicator-credit" : "null"}
                                style={{ height: indicatorHeight + "rem" }}
                            />
                        </div>
                        <div className="scroll-indicator-background" />
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Homescreen