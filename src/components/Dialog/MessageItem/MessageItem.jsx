import s from "../Dialog.module.css";
import React from "react";

function MessageItem(props) {

    let newMessageItem = React.createRef()

    function addMessage() {
        let text = newMessageItem.current.value
        alert(text)
    }

    return (
        <div className={s.message_text}>
            <textarea name="message_field" ref={newMessageItem}></textarea>
            <div className={s.button}>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default MessageItem
