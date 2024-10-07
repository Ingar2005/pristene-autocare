import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
export default function Gallery({images}) {

    return (

    <ImageGallery autoPlay useBrowserFullscreen  slideInterval={10000}  items={images} originalHeigh={100} showNav={true} showFullscreenButton={false} showPlayButton={false}/>

   )
}