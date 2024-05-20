const LEVEL = 888;
const GAMES_PLAYED = 888;
const TIME_PLAYED = "8 Days";

interface Props {
    display: string;
}

const UserStats = ({ display }: Props) => {
    return (
        <section className="stats" style={{ display: display }}>
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
        </section>
    )
}

export default UserStats