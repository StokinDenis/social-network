import {NavLink} from "react-router-dom";
import s from "./../Dialog.module.css"

function DialogItem(props) {
    return (
        <div className={s.name}>
            <NavLink to={"/dialog" + props.id}>
                {props.nameInterlocutor}
            </NavLink>
        </div>
    )
}

export default DialogItem;