import ShortArrow from "../images/ShortArrow";

const FriendsSetings = () => {
    const onlineElement = document.getElementById("online");
    const onlineDropdownElement = document.getElementsByClassName("dropdown")[0];
    const offlineElement = document.getElementById("offline");
    const offlineDropdownElement = document.getElementsByClassName("dropdown")[1];

    const buttonHandler = () => {
        onlineElement?.classList.toggle("show");
        onlineDropdownElement?.classList.toggle("show");
        offlineElement?.classList.toggle("show");
        offlineDropdownElement?.classList.toggle("show");
    }

    return (
        <div className="element friends">
            <h3>Friends</h3>
            <div className="dropdown show">
                <ShortArrow className="dropdown-icon" />
                <button onClick={buttonHandler}>online - 1</button>
            </div>
            <div id="online" className="friends-content show">
                <p>your mom</p>
                <p>your mom</p>
                <p>your mom</p>
                <p>your mom</p>
                <p>your mom</p>
                <p>your mom</p>

                <button className="expand">expand</button>
            </div>
            <div className="dropdown">
                <ShortArrow className="dropdown-icon" />
                <button onClick={buttonHandler}>offline - 88</button>
            </div>
            <div id="offline" className="friends-content">
                <p className="expand">expand</p>
            </div>
        </div>
    )
}

export default FriendsSetings