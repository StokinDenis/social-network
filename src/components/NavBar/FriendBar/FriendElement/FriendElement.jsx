import s from "../FriendBar.module.css";

function FriendElement(props) {
    return (
        <div className={s.friends__element}>
            <div>
                <div className={s.friends__block_width_image}>
                    <img className={s.friends__element_image} src={props.avaFriend} alt=""/>
                </div>
                <div className={s.friends__name_friend}>{props.nameFriend}</div>
            </div>
        </div>
    )
}

export default FriendElement;
