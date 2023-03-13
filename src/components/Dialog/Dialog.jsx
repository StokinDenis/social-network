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
                  i'am gay
                </div>
                <div className={s.message_text}>
                  i'am cat
                </div>
                <div className={s.message_text}>
                    ууу сука ща затоксичу
                </div>
                <div className={s.message_text}>
                    я ноунейм
                </div>
            </div>
        </div>
    )
}

export default Dialog;