import Image from '../Image'
import style from './style.module.css'
const LeftBar = () => {
  return (
    <div className={style.leftBar}>
      <div className={style.menuIcons}>
        <a href="/" className={style.menuIcon}>
          <Image path="/general/logo.png" alt="Logo" className={style.logo} />
        </a>
        <a href="/" className={style.menuIcon}>
          <Image path="/general/home.svg" alt="Home" />
        </a>
        <a href="/" className={style.menuIcon}>
          <Image path="/general/create.svg" alt="create" />
        </a>
        <a href="/" className={style.menuIcon}>
          <Image path="/general/updates.svg" alt="update" />
        </a>
        <a href="/" className={style.menuIcon}>
          <Image path="/general/messages.svg" alt="messages" />
        </a>
      </div>
      <a href="/" className={style.menuIcon}>
        <Image path="/general/settings.svg" alt="settings" />
      </a>
    </div>
  )
}

export default LeftBar