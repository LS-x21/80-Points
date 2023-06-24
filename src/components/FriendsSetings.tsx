import Plus from "../images/Plus";
import ShortArrow from "../images/ShortArrow";

const FriendsSetings = () => {
    const onlineElement = document.getElementById("online");
    const onlineDropdownElement = document.getElementsByClassName("dropdown")[0];
    const offlineElement = document.getElementById("offline");
    const offlineDropdownElement = document.getElementsByClassName("dropdown")[1];

    const friendsList = [
        ["your mom", false],
        ["unknown person", true],
        ["your friend", false],
        ["your cat", true],
        ["your dog", false],
        ["your brother", false],
        ["your sister", false],
        ["your dad", true],
    ]

    const buttonHandler = () => {
        onlineElement?.classList.toggle("show");
        onlineDropdownElement?.classList.toggle("show");
        offlineElement?.classList.toggle("show");
        offlineDropdownElement?.classList.toggle("show");
    }

    const openMoreSettingsFriendsModal = () => {

    }

    const closeMoreSettingsFriendsModal = () => {

    }

    return (
        <div className="element friends">
            <div className="heading">
                <h3>Friends</h3>
                <button onClick={openMoreSettingsFriendsModal}>
                    <Plus className="plus" />
                </button>
            </div>
            <div className="dropdown show">
                <ShortArrow className="dropdown-icon" />
                <button onClick={buttonHandler}>online - {Number(onlineElement?.childElementCount)}</button>
            </div>
            <div id="online" className="friends-content show">
                {friendsList.map((user, index) => {
                    if (user[1]) {
                        return (
                            <p key={user.toString() + index.toString()}>{user[0]}</p>
                        )
                    }
                })}
            </div>
            <div className="dropdown">
                <ShortArrow className="dropdown-icon" />
                <button onClick={buttonHandler}>offline - {Number(offlineElement?.childElementCount)}</button>
            </div>
            <div id="offline" className="friends-content">
                {friendsList.map((user, index) => {
                    if (!user[1]) {
                        return (
                            <p key={user.toString() + index.toString()}>{user[0]}</p>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default FriendsSetings