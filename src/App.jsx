import { useState, useRef } from 'react'
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

function App() {
  const featurableWidgetId= "API KEY"
  const foundedText = "Founded in 2023, Pristine Auto Care is a dynamic and innovative car detailing company that offers both mobile services and convenient site locations around Stoneygate off London Road and in Evington off Uppingham Road. We provide a comprehensive range of detailing services, including exterior 3-step washes, iron decontamination, clay bar treatments, machine and hand polishing, interior decontamination, steam cleaning, leather care and restoration, deep seat cleaning, ceramic coating, headlight restoration, and more.<br /> At Pristine Auto Care, we cater to all vehicle owners who value the importance of maintaining their cars health and appearance. We believe that your vehicle is a reflection of you, and we are dedicated to ensuring it stays in top condition. Our commitment to delivering excellent service at competitive prices, combined with our attention to detail, sets us apart in the industry. <br />As a company founded by two young entrepreneurs, we are constantly seeking innovative ways to enhance our services and stand out in the market we work as a pair too help multitask and detail your car at a much more reasonable time. Our mission is to provide exceptional care for your car, making sure every detail counts. Trust Pristine Auto Care to keep your vehicle looking its best."
  const  whyUsText= "At PristineAutoCare, we combine knowledge and expertise with the latest detailing techniques to deliver exceptional care for your vehicle. As skilled professionals we use top-quality products and high quality equipment to ensure every detail is meticulously attended to, leaving your car spotless and well-protected. We're committed to your satisfaction and take pride in exceeding your expectations with every service."
  const whatWeDo = "we excel"
  const [product, setProduct] = useState([{name:"Premium Detail",link:"https://google.com"},{name:"Paint Correction",link:"https://google.com"},{name:"motorbike Detail",link:"https://google.com"}])
  
  const packages = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) =>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:"smooth"
    })
  }
  return (
    // <ContactForm></ContactForm>
    <div>

    <NavBar scrollToSection={scrollToSection} packages={packages} />
    <Gallery images={[{original:one},{original:three},{original:four},{original:two},{original:five}]}/>
     <div id={"reasons"}>
        <h2>Why Us?</h2>
        <p>{whyUsText}</p>
      </div>
      <div id='reviews'>
      <ReactGoogleReviews carouselSpeed={10000} theme="dark" layout="carousel" featurableId={featurableWidgetId} />
      </div>
      <div id={"founded"}  >
        <p dangerouslySetInnerHTML={{ __html: foundedText }}></p>
        <img src={logo} alt={"car image"} />
      </div>
      <div ref={packages} id={"whatWeDo"}>
        <h2>What We Do</h2>
        <p>{whatWeDo}</p>
        <table>
          <tbody>
          {product.map((item,index) => {if(index %2 === 0){return(<a href={item.link}><td>{item.name}</td></a>)} else{return (<><a href={item.link}><td>{item.name}</td></a><tr></tr></>)}})}
          </tbody>
        </table>
      </div>
    <Footer/>
    </div>
  )
}

export default App
