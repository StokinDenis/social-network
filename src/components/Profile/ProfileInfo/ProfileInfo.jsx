import ProfileImage from "../../imgProfile.jpg";
import s from "./ProfileInfo.module.css"
function ProfileInfo() {
    return (
        <div>
            <div>
                <img className={s.profileImg} src={ProfileImage} alt='#'/>
            </div>
            <div className={s.block_aba_and_description}>
                <div>
                    ava+description
                </div>
                <div>My posts</div>
            </div>
        </div>
    )
}
export default ProfileInfo;