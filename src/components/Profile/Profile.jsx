import ProfileImage from '../imgProfile.jpg'
import s from './Profile.module.css'
import MyPosts from "../PostComponents/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
function Profile(props){
    return(
        <div className={s.content}>
         <ProfileInfo/>
         <MyPosts informationInPost={props.informationInPost}/>
       </div>
    )
}
export default Profile;