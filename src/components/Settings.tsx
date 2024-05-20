import { useEffect, useState } from "react";
import AccountSettings from "./AccountSettings";
import FriendsSetings from "./FriendsSetings";
import MoreSettingsModal from "./MoreSettingsModal";
import ShortArrow from "../images/ShortArrow";
import VisualSettings from "./VisualSettings";
import UserStats from "./UserStats";
import X from "../images/X";

// const USERNAME = "LS-x21";
const USERNAME = "Guest 123"
let moreSettingModalDisplayState = false;

const USER_PROFILE = () => {
    return (
        <img src={require("./../images/logo.png")} alt="profile" />
    )
}

export function OpenMoreSettingsModal(target: string) {
    alert(`openning more setting modal and is going to ${target}`)
}

export function getMoreSettingModalDisplayState() {
    return moreSettingModalDisplayState;
}

export const Settings = () => {

    const [moreSettingDisplay, setMoreSettingDisplay] = useState(false);

    const [visibility, setVisibility] = useState(false);

    const [xDisplay, setXDisplay] = useState("none");
    const [contentDisplay, setContentDisplay] = useState("none");
    const [statsDisplay, setStatsDisplay] = useState("none");

    const [xOpacity, setXOpacity] = useState(0);
    const [contentOpacity, setContentOpacity] = useState(0);

    const showProfile = () => {
        setVisibility(true);
        setXDisplay("flex");
        setContentDisplay("block");
        setTimeout(() => {
            setStatsDisplay("grid");
            setXOpacity(1);
            setContentOpacity(1);
        }, .1);
    }

    const closeProfile = () => {
        setVisibility(false);
        setXOpacity(0);
        setContentOpacity(0);
        setTimeout(() => {
            setStatsDisplay("none");
            setContentDisplay("none");
            setXDisplay("none");
        }, 500);
    }

    const displayMoreSettingsModal = () => {
        setMoreSettingDisplay(true);
    }

    const signout = () => {
        alert("you are signed out")
    }

    useEffect(() => {
        moreSettingModalDisplayState = moreSettingDisplay;
    }, [])

    return (
        <>
            <div id="profile" className={`profile ${visibility ? "active" : "inactive"}`} >
                <button
                    className="header"
                    tabIndex={3}
                    onClick={showProfile}
                >
                    <h3>{USERNAME}</h3>
                    <USER_PROFILE />
                </button>
                <button
                    style={{ display: xDisplay }}
                    className={`x ${visibility ? "active" : "inactive"}`}
                    tabIndex={4}
                    onClick={closeProfile}
                >
                    <X className="x" opacity={xOpacity} display={xDisplay} />
                </button>
                <article style={{ opacity: contentOpacity, display: contentDisplay }}>
                    <UserStats display={statsDisplay} />
                    <AccountSettings />
                    <VisualSettings />
                    <FriendsSetings />
                    <section className="more-settings" onClick={() => {
                        OpenMoreSettingsModal("default")
                        displayMoreSettingsModal();
                    }}>
                        <h3>More Settings</h3>
                        <ShortArrow className="more-settings-short-arrow" />
                    </section>
                    <section className="signout" onClick={signout}>
                        <h3>signout</h3>
                    </section>
                </article>
            </div >
            <MoreSettingsModal />
        </>
    );
}