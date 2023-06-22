const DATE_JOINED = "June 6 2023";
const USER_TAG = "dsafdsaf";
const EMAIL = "123@gmail.com"

const AccountSettings = () => {
    return (
        <div className="element account">
            <h3>Account Details</h3>
            <p className="joined">Joined: {DATE_JOINED}</p>
            <p><b>User Tag:</b> {USER_TAG}</p>
            <p><b>Email:</b> {EMAIL}</p>
        </div>
    )
}

export default AccountSettings