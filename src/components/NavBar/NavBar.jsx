import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

function NavBar(){
    return(
        <nav className={s.nav}>
            <ul>
                <li> <NavLink to="/profile"  className = { navData => navData.isActive ? s.active : s.link } >Profile</NavLink></li>
                <li> <NavLink to="/dialog" className = { navData => navData.isActive ? s.active : s.link }>Message</NavLink></li>
                <li> <NavLink to="/news" className = { navData => navData.isActive ? s.active : s.link }>News</NavLink></li>
                <li> <NavLink to="/musicPage" className = { navData => navData.isActive ? s.active : s.link }>Music</NavLink></li>
            </ul>
            <div><NavLink to="/settingPage" className = {navData => navData.isActive ? s.active : s.link}>Setting</NavLink></div>
            <div className={s.line}></div>

        </nav>
    )
}
export default NavBar;