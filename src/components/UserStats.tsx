const LEVEL = 888;
const GAMES_PLAYED = 888;
const TIME_PLAYED = "8 Days";

const UserStats = () => {
    return (
        <div className="element stats">
            <div>
                <h4>
                    Level
                </h4>
                <p>{LEVEL}</p>
            </div>
            <div>
                <h4>
                    Games
                    <br />
                    Played
                </h4>
                <p>{GAMES_PLAYED}</p>
            </div>
            <div>
                <h4>
                    Time
                    <br />
                    Playing
                </h4>
                <p>{TIME_PLAYED}</p>
            </div>
        </div>
    )
}

export default UserStats