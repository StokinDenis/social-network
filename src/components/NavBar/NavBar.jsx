import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import ava1 from './../../image/ava1.jpg'

function NavBar() {
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink to="/profile" className={navData => navData.isActive ? s.active : s.link}>Profile</NavLink>
                </li>
                <li><NavLink to="/dialog" className={navData => navData.isActive ? s.active : s.link}>Message</NavLink>
                </li>
                <li><NavLink to="/news" className={navData => navData.isActive ? s.active : s.link}>News</NavLink></li>
                <li><NavLink to="/musicPage" className={navData => navData.isActive ? s.active : s.link}>Music</NavLink>
                </li>
            </ul>
            <div><NavLink to="/settingPage"
                          className={navData => navData.isActive ? s.active : s.link}>Setting</NavLink></div>
            <div className={s.line}></div>
            <div className={s.friends}>
                <div className={s.friends__name_section}>
                    Friends
                </div>
                <div className={s.friends__elements_container}>
                    <div className={s.friends__element}>
                        <div className={s.friends__block_width_image}>
                            <img className={s.friends__element_image} src={ava1} alt=""/>
                        </div>
                        <div className={s.friends__name_friend}>Alex</div>
                    </div>
                    <div className={s.friends__element}>
                        <div className={s.friends__block_width_image}>
                            <img className={s.friends__element_image} src={ava1} alt=""/>
                        </div>
                        <div className={s.friends__name_friend}>Dimon</div>
                    </div>
                    <div className={s.friends__element}>
                        <div className={s.friends__block_width_image}>
                            <img className={s.friends__element_image} src={ava1} alt=""/>
                        </div>
                        <div className={s.friends__name_friend}>Kolya</div>
                    </div>
                </div>
  
            </div>
        </nav>
    )
}

export default NavBar;