import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

function Dialog(){
    return(
        <div className={s.dialogs}>
            <div className={s.names}>
                <div className={s.names}>
                    <NavLink to="/dialog/1">
                        Kolya Klimovich
                    </NavLink>
                    <div className={s.name}>
                        <NavLink to="/dialog/2">
                            Kiryl Shahnitsky
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/dialog/3">
                            Anton Grinkevich
                        </NavLink>
                    </div>
                    <div className={s.name}>
                        <NavLink to="/dialog/4">
                            Ivan Ivanov
                        </NavLink>
                    </div>

                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message_text}>
               Hello I'am Kolya
                </div>
                <div className={s.message_text}>
                 how are you?
                </div>
                <div className={s.message_text}>
                    i think it's best website
                </div>
                <div className={s.message_text}>
                    Hello
                </div>
            </div>
        </div>
    )
}

export default Dialog;