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
import rari2 from "./assets/rari2.jpeg";
import Reasons from './Reasons.jsx';

function App() {
  const featurableWidgetId= "ab151222-7f6e-489a-b45a-63b8500fb10a"
  const whatWeDo = "we excel"
  const [product, setProduct] = useState([{name:"Premium Detail",link:"https://google.com"},{name:"Paint Correction",link:"https://google.com"},{name:"motorbike Detail",link:"https://google.com"}])

  useEffect(()=>{
    const script = document.createElement('script')
    script.src = "https://static.elfsight.com/platform/platform.js"
    script.async = true
    document.body.appendChild(script)
  },[])

  const packages = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) =>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:"smooth"
    })
  }
  return (<>
  <head>
  </head>
    <body className="">
    <NavBar scrollToSection={scrollToSection} packages={packages} />
    <div className="elfsight-app-fea6e5d6-19c0-4472-b4e9-aa4c88394e88" data-elfsight-app-lazy></div>

    <div className="flex flex-col bg-white ">
    {/* <ContactForm></ContactForm> */}

     {/*<Gallery images={[{original:one},{original:three},{original:four},{original:two},{original:five}]}/>*/}
      <Reasons />
      {/*<div id='reviews'>
      <ReactGoogleReviews carouselSpeed={10000} layout="carousel" featurableId={featurableWidgetId} />
      </div>

      <div ref={packages} id={"whatWeDo"}>
        <h2>What We Do</h2>
        <p>{whatWeDo}</p>
        <table>
          <tbody>
          {product.map((item,index) => {if(index %2 === 0){return(<a href={item.link}><td>{item.name}</td></a>)} else{return (<><a href={item.link}><td>{item.name}</td></a><tr></tr></>)}})}
          </tbody>
        </table>
      </div> */}
    </div>
    <Footer/>

    </body>
    </>
  )
}

export default App
