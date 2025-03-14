import Image from '../../components/Image';
import './style.css'

const UserProfile = () => {
    return (
        <div className="profilePage">
            <Image path="/general/noAvatar.png" alt="" width={100} hieght={100} />
            <h1 className='profileName'>Johm Doe</h1>
            <span className='profileUsername'>@johndoe</span>
            <div className="followCounts">10 followers - 20 followings</div>
            <div className="profileInteractions">
                <Image path="/general/share.svg" alt="" />
                <div className="profileButtons">
                    <button>Message</button>
                    <button>Follow</button>
                </div>
                <Image path="/general/more.svg" alt="" />
            </div>
            <div className="profileOptions">
                <span>Created</span>
                <span>Saved</span>
            </div>
        </div>
    )
}

export default UserProfile