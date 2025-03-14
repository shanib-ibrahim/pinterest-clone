import { useState } from 'react';
import style from './style.module.css'
import Image from '../Image';
const UserButton = () => {
    const [open, setOpen] = useState(false);
    const currentUser = true;
    return currentUser ? (<div className={style.userButton}>
        <Image path="/general/noAvatar.png" alt="" />
        <Image className={style.arrow} onClick={() => setOpen(prev => !prev)} path="/general/arrow.svg" alt="" />
        {open && < div className={style.userOptions}>
            <div className={style.userOption}>Profile</div>
            <div className={style.userOption}>Settings</div>
            <div className={style.userOption}>Logout</div>
        </div>}
    </div>
    ) : (<a className='loginLink'>Login / Sign Up</a>)
}

export default UserButton