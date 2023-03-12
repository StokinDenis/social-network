import s from './Dialog.module.css'
function Dialog(){
    return(
        <div className={s.dialogs}>
            <div className={s.names}>
                <div className={s.name}>
                  Kolya Klimovich
                </div>
                <div className={s.name}>
                   Kiryl Shahnitsky
                </div>
                <div className={s.name}>
                   Anton Grinkevich
                </div>
                <div className={s.name}>
                   Ivan Ivanov
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