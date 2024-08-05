import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./NavBar.jsx";

function App() {
  const [count, setCount] = useState(0)
  const text = "hello world"
  const foundedText = "founig text"
  const whatWeDo = "we excel"
  const [product, setProduct] = useState([{name:"Premium Detail",link:"https://google.com"},{name:"Paint Correction",link:"https://google.com"},{name:"motorbike Detail",link:"https://google.com"}])
  return (
    <>

    <NavBar />
      <div id={"reasons"}>
        <h2>Why Us?</h2>
        <p>{text}</p>
        {/*TODO add google carasol review widgit */}
      </div>
      <div id={"founded"}>
        <p>{foundedText}</p>
        <img src={viteLogo} alt={"car image"} />
      </div>
      <div id={"whatWeDo"}>
        <h2>What We Do</h2>
        <p1>{whatWeDo}</p1>
        <table>
          <tbody>
          {product.map((item,index) => {if(index %2 === 0){return(<a href={item.link}><td>{item.name}</td></a>)} else{return (<><a href={item.link}><td>{item.name}</td></a><tr></tr></>)}})}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default App
