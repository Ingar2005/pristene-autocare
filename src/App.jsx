import { useState, useRef, useEffect } from 'react'
import logo from "./assets/logo.jpeg"
import trial from "./assets/temp.jpg";
import './App.css'
import NavBar from "./NavBar.jsx";
import Gallery from "./Gallery.jsx";
import Footer from './Footer.jsx'
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import one from "./assets/9D77DBAF-0B1A-49E3-923C-156F3700506F.jpeg";
import two from "./assets/30C68153-F0B4-4EDD-B717-E0FF5D16FBE9.jpeg";
import three from "./assets/IMG_2635.jpeg";
import four from "./assets/IMG_3572.jpeg";
import five from "./assets/IMG_3681.jpeg";
import ContactForm from './ContactForm.jsx';
import Reasons from './Reasons.jsx';
import Packages from './Packages.jsx';
import Mpackages from './Mpackages.jsx';
import rari2 from "./assets/9dba0398-a29e-42f3-973c-26240e712851.jpg";
import Post from './Post.jsx';

function App() {
  const featurableWidgetId= "ab151222-7f6e-489a-b45a-63b8500fb10a"
  const whatWeDo = "we excel"
  const [product, setProduct] = useState([{name:"Premium Detail",link:"https://google.com"},{name:"Paint Correction",link:"https://google.com"},{name:"motorbike Detail",link:"https://google.com"}])

  const [home,setHome] = useState(true)
  const [carPackage,setCarPackage] = useState(false)
  const [motorbikePackage,setMotorbikePackage] = useState(false)

  useEffect(()=>{
    const script = document.createElement('script')
    script.src = "https://static.elfsight.com/platform/platform.js"
    script.async = true
    document.body.appendChild(script)


  },[])

  const packages = useRef(null)
  const contact = useRef(null)

  const onHomeClick = () =>{
    setCarPackage(false)
    setMotorbikePackage(false)
    setHome(true)

  }

  const onCarPackageClick = () =>{
    setMotorbikePackage(false)
    setHome(false)
    setCarPackage(true)


  }
  const onMotorPackageClick = () =>{
    setCarPackage(false)
    setHome(false)
    setMotorbikePackage(true)

  }

  return (<>
  <head>
  </head>
    <body className="">


    <NavBar className=" " onHomeClick={onHomeClick} onCarPackageClick={onCarPackageClick} onMotorPackageClick={onMotorPackageClick}  packages={packages} />

    {home &&

    <><div className=" elfsight-app-fea6e5d6-19c0-4472-b4e9-aa4c88394e88" data-elfsight-app-lazy></div>
    <div className="flex flex-col bg-white pt-24 ">
    <Gallery className="w-screen" images={[{original:trial},{original:rari2},{original:one},{original:three},{original:four},{original:two},{original:five}]}/>
      <Reasons />
      <div id='reviews'>
      <ReactGoogleReviews carouselSpeed={10000} layout="carousel" featurableId={featurableWidgetId} />
      </div >
      <div className="h-9" ></div>
      <div className="h-9" ></div>

    <div className="flex flex-row justify-around flex-wrap ">
    <Post url="https://www.instagram.com/p/CwapRozMvuS" />
    <Post url="https://www.instagram.com/p/CvU2MB_MFFr" />
    <Post url="https://www.instagram.com/p/C-INJs_Caym" />
    <Post url="https://www.instagram.com/p/C-NWvDri1vM" />
    <Post url="https://www.instagram.com/p/C9pQLYUuNC5" />

    </div>
    </div>
    </>}

      {carPackage && <Packages />}
      {motorbikePackage && <Mpackages />}

    <Footer featurableWidgetId={featurableWidgetId}/>
    </body>
    </>

    )
}

export default App
