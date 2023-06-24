const LEVEL = 888;
const GAMES_PLAYED = 888;
const TIME_PLAYED = "8 Days";

const UserStats = () => {
    return (
        <div className="element stats">
            <div>
                <p>
                    Experience
                </p>
                <h4>{LEVEL}</h4>
            </div>
            <div>
                <p>
                    Games Played
                </p>
                <h4>{GAMES_PLAYED}</h4>
            </div>
            <div>
                <p>
                    Time Playing
                </p>
                <h4>{TIME_PLAYED}</h4>
            </div>
        </div>
    )
}

export default UserStats