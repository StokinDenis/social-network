import ProfileImage from '../imgProfile.jpg'
import s from './Profile.module.css'
function Profile(){
    return(
        <div className={s.content}>
        <div>
         <img className={s.profileImg} src={ProfileImage} alt='#'/>
        </div>
        <div>
         ava+description
        </div>
        <div>
         My posts 
         <div>
           New post
         </div>
         <div>
           <div>Post 1</div>
           <div>Post 2</div>
           <div>Post 3</div>
         </div>
        </div>
       </div>
    )
}
export default Profile;