import style from './style.module.css'
const LeftBar = () => {
  return (
    <div className={style.leftBar}>
      <div className={style.menuIcons}>
        <a href="/" className={style.menuIcon}>
          <img src="/general/logo.png" alt="Logo" className={style.logo} />
        </a>
        <a href="/" className={style.menuIcon}>
          <img src="/general/home.svg" alt="Logo" />
        </a>
        <a href="/" className={style.menuIcon}>
          <img src="/general/create.svg" alt="Logo" />
        </a>
        <a href="/" className={style.menuIcon}>
          <img src="/general/updates.svg" alt="Logo" />
        </a>
        <a href="/" className={style.menuIcon}>
          <img src="/general/messages.svg" alt="Logo" />
        </a>
      </div>
      <a href="/" className={style.menuIcon}>
        <img src="/general/settings.svg" alt="Logo" />
      </a>
    </div>
  )
}

export default LeftBar