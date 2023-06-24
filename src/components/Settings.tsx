import { useState } from "react";
import AccountSettings from "./AccountSettings";
import FriendsSetings from "./FriendsSetings";
import ShortArrow from "../images/ShortArrow";
import VisualSettings from "./VisualSettings";
import UserStats from "./UserStats";
import X from "../images/X";

// const USERNAME = "LS-x21";
const USERNAME = "Guest 123"

const UserProfile = () => {
    const [visibility, setVisibility] = useState(false);

    const [xDisplay, setXDisplay] = useState("none");
    const [contentDisplay, setContentDisplay] = useState("none");

    const [xOpacity, setXOpacity] = useState(0);
    const [contentOpacity, setContentOpacity] = useState(0);

    const showProfile = () => {
        setVisibility(true);
        setXDisplay("flex");
        setContentDisplay("block");
        setTimeout(() => {
            setXOpacity(1);
            setContentOpacity(1);
        }, .1);
    }

    const closeProfile = () => {
        setVisibility(false);
        setXOpacity(0);
        setContentOpacity(0);
        setTimeout(() => {
            setContentDisplay("none");
            setXDisplay("none");
        }, 500);
    }

    const openMoreSettingsModal = () => {

    }

    const closeModeSettingsModal = () => {

    }

    return (
        <>
            <div id="profile" className={`profile ${visibility ? "active" : "inactive"}`} >
                <button
                    id="header"
                    className="header"
                    tabIndex={3}
                    onClick={showProfile}
                >
                    <h3>{USERNAME}</h3>
                    <img src={require("./../images/logo.png")} alt="profile" />
                </button>
                <button
                    id="x"
                    style={{ display: xDisplay }}
                    className={`x ${visibility ? "active" : "inactive"}`}
                    tabIndex={4}
                    onClick={closeProfile}
                >
                    <X className="x" opacity={xOpacity} display={xDisplay} />
                </button>
                <div id="content" className="content" style={{ opacity: contentOpacity, display: contentDisplay }}>
                    <UserStats />
                    <AccountSettings />
                    <VisualSettings />
                    <FriendsSetings />
                    <div className="element center">
                        <h3>More Settings</h3>
                        <ShortArrow className="short-arrow" />
                    </div>
                    <div className="element signout">
                        <h3>signout</h3>
                    </div>
                </div>
            </div >
        </>
    );
}

export default UserProfile