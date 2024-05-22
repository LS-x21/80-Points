import { useEffect, useState } from "react";
import "../scss/homescreen.scss";
import Logo from "../images/Logo";
import Footer from "./Footer";
import ShortArrow from "../images/ShortArrow";
import { Settings } from "./Settings";
import HamburgerMenu from "../images/HamburgerMenu";

function Homescreen() {
    const [indicatorHeight, setIndicatorHeight] = useState(0);

    const scrollHeight = 8;
    const scrollHeightLimit = 7;

    const scrollTracker = () => {
        const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        setIndicatorHeight((Math.ceil(currentScroll / totalScrollHeight * 1000) / 100 - .01) * (scrollHeight / 10));
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollTracker);

        return (() => {
            window.removeEventListener("scroll", scrollTracker);
        })
    });

    return (
        <>
            {/* home screen backgrqound of a cards animations, in a kaleidoscope pattern*/}
            {/* Setting is the Profile Icon */}
            {Settings()}
            <main id="main">
                <div className="menu">
                    {/* TODO: this menu is to get information about the game, maybe merge with the current profile logo */}
                    <HamburgerMenu className="hamburger-menu" />
                </div>
                <section>
                    <aside>
                        <Logo className="logo" />
                        <h2>八十分</h2>
                    </aside>
                    <div className="content">
                        <h1>
                            80 POINTS
                        </h1>
                        <h3>
                            A Traditional Chinese Card Game
                        </h3>
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
                </section>
                <nav className="scroll-indicator-container">
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
                </nav>
            </main>
            {/* TODO: Get this working, not updating, need to make sure that there's no scrolling when the more setting modal is up */}
            {/* {!getMoreSettingModalDisplayState() ? <Footer /> : <></>} */}
            <Footer />
        </>
    )
}

export default Homescreen