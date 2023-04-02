import s from "../Dialog.module.css";
import React from "react";

function MessageItem(props){

    let newMessageElement = React.createRef();

   function showMessage(){
       let text = newMessageElement.current.value;
       alert(text)
   }



    return(
        <div className={s.message_text}>
            <textarea  name="" ref={newMessageElement}></textarea>
            <div className={s.button}>
            <button onClick={showMessage}>Отправить</button>
            </div>
        </div>
    )
}
export default MessageItem
