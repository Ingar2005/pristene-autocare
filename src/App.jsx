import { useState } from 'react'
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

function App() {
  const featurableWidgetId= "#api key"
  const text = "hello world"
  const foundedText = "founig text"
  const whatWeDo = "we excel"
  const [product, setProduct] = useState([{name:"Premium Detail",link:"https://google.com"},{name:"Paint Correction",link:"https://google.com"},{name:"motorbike Detail",link:"https://google.com"}])
  
  return (
    <>

    <NavBar />
    <Gallery images={[{origin:one}]}/>
     <div id={"reasons"}>
        <h2>Why Us?</h2>
        <p>{text}</p>
      </div>
      <div id='reviews'>
      <ReactGoogleReviews theme="dark" layout="carousel" featurableId={featurableWidgetId} />
      </div>
      <div id={"founded"}>
        <p>{foundedText}</p>
        <img src={logo} alt={"car image"} />
      </div>
      <div id={"whatWeDo"}>
        <h2>What We Do</h2>
        <p>{whatWeDo}</p>
        <table>
          <tbody>
          {product.map((item,index) => {if(index %2 === 0){return(<a href={item.link}><td>{item.name}</td></a>)} else{return (<><a href={item.link}><td>{item.name}</td></a><tr></tr></>)}})}
          </tbody>
        </table>
      </div>
    <Footer />
    </>
  )
}

export default App
