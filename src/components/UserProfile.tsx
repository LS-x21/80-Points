import { useState } from "react";
import X from "../images/X";

const UserProfile = () => {
    const [visibility, setVisibility] = useState(false);
    const username = "LS-x21";
    const display = visibility ? "flex" : "none"
    return (
        <>
            <div
                className={`profile ${visibility ? "active" : "inactive"}`}
            >
                <div
                    className="container"
                    onClick={() => { setVisibility(!visibility); console.log(visibility) }}
                >
                    <h3>{username}</h3>
                    <img src={require("./../images/logo.png")} alt="your moms" />
                </div>
                <div
                    className={`x ${visibility ? "active" : "inactive"}`}
                    onClick={() => { setVisibility(!visibility); console.log(visibility) }}
                >
                    <X className="x" />
                </div>
            </div>
        </>

    );
}

export default UserProfile