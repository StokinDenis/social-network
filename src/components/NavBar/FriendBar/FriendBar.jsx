import s from "./FriendBar.module.css";

import FriendElement from "./FriendElement/FriendElement";

function FriendBar(props) {
    let elementFriend = props.informationFriend.map((item) => <FriendElement avaFriend={item.avaFriend}
                                                                             nameFriend={item.nameFriend}/>)
    return (<div className={s.friends}>
        <div className={s.friends__name_section}>
            Friends
        </div>
        <div className={s.friends__elements_container}>
            {elementFriend}
        </div>

    </div>)
}

export default FriendBar;