import ProfileImage from '../imgProfile.jpg'
import s from './Profile.module.css'
import MyPosts from "../PostComponents/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
function Profile(){
    return(
        <div className={s.content}>
         <ProfileInfo/>
         <MyPosts/>
       </div>
    )
}
export default Profile;