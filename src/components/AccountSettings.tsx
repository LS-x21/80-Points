import Edit from "../images/Edit";
import { OpenMoreSettingsModal } from "./Settings";

const DATE_JOINED = "June 6 2023";
const USER_TAG = "dsafdsaf";
const EMAIL = "123@gmail.com"

const AccountSettings = () => {

    return (
        <section className="account">
            <div className="heading">
                <h3>Account Details</h3>
                <button onClick={() => OpenMoreSettingsModal("account")}>
                    <Edit className="edit" />
                </button>
            </div>
            <p className="joined">Account created on {DATE_JOINED}</p>
            <p><b>User Tag:</b> {USER_TAG}</p>
            <p><b>Email:</b> {EMAIL}</p>
        </section>
    )
}

export default AccountSettings