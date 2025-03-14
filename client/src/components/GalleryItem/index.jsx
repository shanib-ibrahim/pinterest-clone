import { Link } from 'react-router'
import style from './style.module.css'
import Image from '../Image'

const GalleryItem = ({ item }) => {
    const optimizedHeigght = (372 * item.height) / item.width;
    return (
        <div className={style.galleryItem} style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}>
            <Image path={item.media} alt="" width={372} height={optimizedHeigght} />
            <Link to={`/pin/${item.id}`} className={style.overlay}></Link>
            <button className={style.saveButton}>Save</button>
            <div className={style.overlayIcons}>
                <button>
                    <Image path="/general/share.svg" alt="" />
                </button>
                <button>
                    <Image path="/general/upload.svg" alt="" />
                </button>
            </div>
        </div>
    )
}

export default GalleryItem