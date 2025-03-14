import { IKImage } from 'imagekitio-react'

const Image = ({ path, alt, className, width, hieght, onClick }) => {
    return (
        <IKImage
            urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
            path={path}
            transformation={[{
                width: width,
                hieght: hieght
            }]}
            alt={alt}
            loading="lazy"
            className={className}
            lqip={{ active: true, quality: 20 }}
            onClick={onClick}
        />
    )
}

export default Image