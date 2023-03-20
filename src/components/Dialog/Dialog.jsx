import s from './Dialog.module.css'
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem"


function Dialog(props){

    let dialogData=props.dialogData

    let messagesDate=props.messageData

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