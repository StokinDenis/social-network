import Logo from './../../image/Logo.jfif'
import s from './Header.module.css'

function Header(){
    return(

        <header className={s.header}>
        <img className={s.logo} src={Logo} alt="#" />
          <div className={s.name_header}>
              <h1>SOCIAL NETWORK</h1>
          </div>
       </header>
    )
}

export default Header;