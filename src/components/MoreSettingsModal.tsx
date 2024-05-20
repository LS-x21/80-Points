import { useEffect, useState } from "react";
import X from "../images/X"

const USERNAME = "Guest 123";
const PROFILE_IMAGE = "../images/logo.png"
const LEVEL = 888;
const GAMES_PLAYED = 888;
const TIME_PLAYED = "8 Days";
const DATE_JOINED = "June 6 2023";
const USER_TAG = "dsafdsaf";
const EMAIL = "123@gmail.com"

const FRIENDS_LIST = [
	["your mom", "0000", false],
	["unknown person", "1111", true],
	["your friend", "2222", false],
	["your cat", "3333", true],
	["your dog", "4444", false],
	["your brother", "5555", false],
	["your sister", "6666", false],
	["your dad", "7777", true],
]

const BLOCKED_USERS = [
	["your mom", "0000", "1/1/23"],
	["egg", "1111", "1/2/23"],
	["annoying person", "2222", "1/3/23"],
	["bugs", "3333", "1/5/23"],
	["snakes", "4444", "1/6/23"],
];

const MoreSettingsModal = () => {
	const [xDisplay, setXDisplay] = useState("block");
	const [xOpacity, setXOpacity] = useState(1);

	let leaderboardNotifications = true;
	let updates = true;

	let animations = true;
	let anonymize = false;
	let explicitLanguageFilter = false;

	const [size, setSize] = useState("1");
	const [saturation, setSaturation] = useState("1");
	const [contrast, setContrast] = useState("1");
	const [grayscale, setGrayscale] = useState("0");

	const contentElement = document.getElementById("content");

	const closeMoreSettingsModal = () => {

	}

	const saveSettings = () => {

	}

	const scrollHandler = () => {

	}


	useEffect(() => {
		setTimeout(() => {
			document.documentElement.style.setProperty('--size', Math.ceil(Number(size) * 100) + "%");
			document.documentElement.style.setProperty('--saturation', saturation);
			document.documentElement.style.setProperty('--contrast', contrast);
			document.documentElement.style.setProperty('--grayscale', grayscale);
		}, 300);

		contentElement?.addEventListener("scroll", scrollHandler);
		return (() => contentElement?.removeEventListener("scroll", scrollHandler))
	})

	return (
		// TODO: Actually make these buttons do something
		<div className="more-settings-modal">
			{/* TODO: Consider changing from a list view to a block view, more visual apealing */}
			<div className="container">
				<div className="sections">
					<input type="text" placeholder="search" />
					<a href="#account">Account</a>
					<a href="#stats">Statistics</a>
					<a href="#notifications">Notifications</a>
					<a href="#appearance">Apperance</a>
					<a href="#friends">Friends</a>
					<a href="#add-friends">Add Friends</a>
					<a href="#blocked">Blocked Users</a>
					<a href="#block">Block a User</a>
					<a href="#termination">Account Termination</a>
				</div>
				<div id="content" className="content">
					<div>
						<h4 id="account">Account</h4>
						{/* <div>
							<p>Username:</p>
						</div>
						<div>
							<p>Password:</p>
						</div>
						<div>
							<p>Email:</p>
						</div> */}
					</div>
					<hr />
					<div>
						<h4 id="stats">Statistics</h4>
						<div>
							<p>Your account was created on <b>{DATE_JOINED}</b></p>
						</div>
						<div></div>
					</div>
					<hr />
					<div className="notifications">
						<h4 id="notifications">Notifications</h4>
						<div>
							<div>
								<p>Leaderboard Notifications</p>
								<small>get notified about your ranking positions</small>
							</div>
							<label className="switch">
								<input
									id="leaderboard-notification"
									type="checkbox"
								// value={leaderboardNotifications}
								// onChange={() => leaderboardNotifications = document.getElementById("leaderboard-notification")}
								/>
								<span />
							</label>
						</div>
						<div>
							<div>
								<p>Update Summary</p>
								<small>get summaries of updates made to the game</small>
							</div>
							<label className="switch">
								<input
									type="checkbox"
								// onChange={() => }
								/>
								<span />
							</label>
						</div>
					</div>
					<hr />
					<div className="appearance">
						<h4 id="appearance">Apperance</h4>
						<div>
							<div>
								<p>Animations</p>
								<small>enable all animations</small>
							</div>
							<label className="switch">
								<input
									type="checkbox"
								// onChange={() => }
								/>
								<span />
							</label>
						</div>
						<div>
							<div>
								<p>Anonymize</p>
								<small >hides your ingame username and profile</small>
							</div>
							<label className="switch">
								<input
									type="checkbox"
								// onChange={() => }
								/>
								<span />
							</label>
						</div>
						<div>
							<div>
								<p>Explicit Language Filter</p>
								<small>censorship of explicit language in chat</small>
							</div>
							<label className="switch">
								<input
									type="checkbox"
								// onChange={() => }
								/>
								<span />
							</label>
						</div>
						<div>
							<p>Dark Mode</p>
							<label className="dark-mode-switch switch">
								<input
									type="checkbox"
								// onChange={() => }
								/>
								<span />
							</label>
						</div>
						<div>
							<p>Zoom - {Math.floor(Number(size) * 100)}%</p>
							<small onClick={() => setSize("1")}>default</small>
							<input
								type="range"
								id="zoom"
								min={.75}
								max={1.3}
								step={.01}
								value={size}
								onChange={(input) => setSize(input.target.value)}
							/>
						</div>
						<div>
							<p>Color Saturation - {saturation}</p>
							<small onClick={() => setSaturation("1")}>default</small>
							<input
								type="range"
								id="saturation"
								min={.5}
								max={2}
								step={.01}
								value={saturation}
								onChange={(input) => setSaturation(input.target.value)}
							/>
						</div>
						<div>
							<p>Contrast - {contrast}</p>
							<small onClick={() => setContrast("1")}>default</small>
							<input
								type="range"
								id="contrast"
								min={.5}
								max={2}
								step={.01}
								value={contrast}
								onChange={(input) => setContrast(input.target.value)}
							/>
						</div>
						<div>
							<p>Grayscale - {grayscale}</p>
							<small onClick={() => setGrayscale("0")}>default</small>
							<input
								type="range"
								id="grayscale"
								min={0}
								max={1}
								step={.01}
								value={grayscale}
								onChange={(input) => setGrayscale(input.target.value)}
							/>
						</div>
					</div>
					<hr />

					<div>
						<h4 id="friends">Your Friends</h4>
						{/* TODO: Change this to to a block grid visual */}

						<div className="list-header">
							<p>username</p>
							<p className="right-label">status</p>
						</div>
						<div className="list-content">
							{FRIENDS_LIST.map((user) => {
								return (
									<div key={user.toString()}>
										<p>{user[0]}</p>
										<p className="right-label">{(user[1] ? "Online" : "Offline")}</p>
									</div>
								)
							})}
						</div>
						<h4 id="add-friends">Add Friends</h4>
						<div>
							<input id="addFriends" type="text" placeholder="username" />
							<button> Block </button>
						</div>
					</div>
					<hr />

					<div>
						{/* Change this to to a block grid visual */}
						<h4 id="blocked">Blocked Users</h4>
						<p>All the user you have blocked.</p>
						<small>
							If a user is blocked, you would not be able to see any message they sent ingame.
						</small>
						<div className="list-header">
							<p>username</p>
							<p className="right-label">date blocked</p>
						</div>
						<div className="list-content">
							{BLOCKED_USERS.map((user) => {
								return (
									<div key={user[0]}>
										<p>{user[0]}</p>
										<p className="right-label">{user[1]}</p>
									</div>
								)
							})}
						</div>
						<div>
							<h4 id="blocked">Block a User</h4>
							<div>
								<input id="blockUser" type="text" placeholder="username" />
								<button className="bad"> Block </button>
							</div>
						</div>
						<h4 id="report">Report User</h4>
						<input id="reportUserName" type="text" placeholder="username" />
						<input id="reportUserReason" list="reportReasons" />
						<datalist id="reportReasons">
							<option value="Abusive Language" />
							<option value="Inappropriateness" />
							<option value="Cheating" />
							<option value="Other Reasons" />
						</datalist>
						<button className="bad"> Report </button>
					</div>
					<hr />

					<div id="termination">
						<h4>Account Termination</h4>
						<div>
							<p>This is an <b>irreversible</b> action. By deleting your account, you will lose all your progress. All your data would be purged.</p>
							<div>
								<button>Delete Account</button>
							</div>
						</div>
					</div>
					<button className="close-icon" onClick={closeMoreSettingsModal}>
						<X className="close-icon" opacity={xOpacity} display={xDisplay} />
					</button>
				</div>
			</div>
			<button className="background" onClick={closeMoreSettingsModal} />
		</div>
	)
}

export default MoreSettingsModal