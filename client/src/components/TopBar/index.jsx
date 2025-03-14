import style from './style.module.css'
import UserButton from "../userButton"

const TopBar = () => {
    return (
        <div className={style.topBar}>
            <div className={style.search}>
                <img src="/general/search.svg" alt="" />
                <input type="text" placeholder="Search" />
            </div>
            <UserButton />
        </div>
    )
}

export default TopBar