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

    let dialogData = [
        {name: "Kolya", id: "/1"},
        {name: "Kiryl", id: "/2"},
        {name: "Leha", id: "/3"},
        {name: "Anton", id: "/4"}
    ]

    let messagesDate=[
        {message: "hello", id: 1},
        {message: "how are you?", id: 2},
        {message: "We'll meet tomorrow?", id: 3},
        {message: "Yes i can", id: 4}
    ]

    let dialogElements = dialogData.map(item => <DialogItem nameInterlocutor={item.name} id={item.id}/>)

    let messagesElements = messagesDate.map(message=><MessageItem message={message.message}/>)

    return(
        <div className={s.dialogs}>
            <div className={s.names}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialog;