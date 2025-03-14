import style from './style.module.css'
import UserButton from "../userButton"
import Image from '../Image'

const TopBar = () => {
    return (
        <div className={style.topBar}>
            <div className={style.search}>
                <Image path="/general/search.svg" alt="" />
                <input type="text" placeholder="Search" />
            </div>
            <UserButton />
        </div>
    )
}

export default TopBar