import { OpenMoreSettingsModal } from "./Settings";
import Plus from "../images/Plus";
import ShortArrow from "../images/ShortArrow";

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
      <section className="friends">
         <div className="heading">
            <h3>Friends</h3>
            <button onClick={() => OpenMoreSettingsModal("friends")}>
               <Plus className="plus" />
            </button>
         </div>
         <div className="dropdown show">
            <ShortArrow className="dropdown-icon" />
            <button onClick={buttonHandler}>online - {Number(onlineElement?.childElementCount)}</button>
         </div>
         <div id="online" className="friends-content show">
            {FRIENDS_LIST.map((user, index) => {
               if (user[1]) {
                  return (
                     <p key={user.toString() + index.toString() + "online"}>{user[0]}</p>
                  )
               }
            })}
         </div>
         <div className="dropdown">
            <ShortArrow className="dropdown-icon" />
            <button onClick={buttonHandler}>offline - {Number(offlineElement?.childElementCount)}</button>
         </div>
         <div id="offline" className="friends-content">
            {FRIENDS_LIST.map((user, index) => {
               if (!user[3]) {
                  return (
                     <p key={user.toString() + index.toString() + "offline"}>{user[0]}</p>
                  )
               }
            })}
         </div>
      </section>
   )
}

export default FriendsSetings