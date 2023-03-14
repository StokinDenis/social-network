import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

function DialogItem(props){
    return(
        <div className={s.name}>
            <NavLink to={"/dialog" + props.id}>
                {props.nameInterlocutor}
            </NavLink>
        </div>
    )
}
function MessageItem(props){
    return(
        <div className={s.message_text}>
            {props.message}
        </div>
    )
}
function Dialog(){
    return(
        <div className={s.dialogs}>
            <div className={s.names}>
                <DialogItem nameInterlocutor={"Kolya"} id={"/1"}/>
                <DialogItem nameInterlocutor={"Kiryl"} id={"/2"}/>
                <DialogItem nameInterlocutor={"Leha"} id={"/3"}/>
                <DialogItem nameInterlocutor={"Anton"} id={"/4"}/>
            </div>
            <div className={s.messages}>
                <MessageItem message={"hello"}/>
                <MessageItem message={"how are you?"}/>
                <MessageItem message={"We'll meet tomorrow?"}/>
                <MessageItem message={"Yes i can"}/>
            </div>
        </div>
    )
}

export default Dialog;