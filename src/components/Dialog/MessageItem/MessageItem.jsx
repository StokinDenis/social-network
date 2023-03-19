import s from "../Dialog.module.css";
import React from "react";

function MessageItem(props){
    return(
        <div className={s.message_text}>
            {props.message}
        </div>
    )
}
export default MessageItem
