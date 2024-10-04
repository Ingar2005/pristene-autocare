import { useState, useRef, useEffect } from 'react'
import logo from "./assets/logo.jpeg"
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

function App() {
  const featurableWidgetId= "ab151222-7f6e-489a-b45a-63b8500fb10a"
  const whatWeDo = "we excel"
  const [product, setProduct] = useState([{name:"Premium Detail",link:"https://google.com"},{name:"Paint Correction",link:"https://google.com"},{name:"motorbike Detail",link:"https://google.com"}])

  const [home,setHome] = useState(true)
  const [carPackage,setCarPackage] = useState(false)
  const [contacts,setContacts] = useState(false)
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
    setContacts(false)
    setMotorbikePackage(false)
    setHome(true)

  }

  const onCarPackageClick = () =>{
    setContacts(false)
    setMotorbikePackage(false)
    setHome(false)
    setCarPackage(true)


  }
  const onMotorPackageClick = () =>{
    setCarPackage(false)
    setHome(false)
    setContacts(false)
    setMotorbikePackage(true)

  }

  return (<>
  <head>
  </head>
    <body className="">


    <NavBar onHomeClick={onHomeClick} onCarPackageClick={onCarPackageClick} onMotorPackageClick={onMotorPackageClick}  packages={packages} />

    {home && <><div className="elfsight-app-fea6e5d6-19c0-4472-b4e9-aa4c88394e88" data-elfsight-app-lazy></div>
    <div className="flex flex-col bg-white ">
     <Gallery  images={[{original:one},{original:three},{original:four},{original:two},{original:five}]}/>
      <Reasons />

      <div id='reviews'>
      <ReactGoogleReviews carouselSpeed={10000} layout="carousel" featurableId={featurableWidgetId} />
      </div>
      <iframe src="https://www.juicer.io/api/feeds/pristineautocareuk/iframe?per=15" frameBorder="0" width="1000" height="1000"  className="overflow-visible"     ></iframe>

    </div></>}

      {carPackage && <Packages />}
      {motorbikePackage && <Mpackages />}

    <Footer featurableWidgetId={featurableWidgetId}/>
    </body>
    </>
  )
}

export default App
