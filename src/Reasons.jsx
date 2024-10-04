import one from "./assets/9D77DBAF-0B1A-49E3-923C-156F3700506F.jpeg";
import logo from "./assets/logo.jpeg"
import { InstagramEmbed } from 'react-social-media-embed';

export default function Content(){
  const  whyUsText= "At PristineAutoCare, we combine knowledge and expertise with the latest detailing techniques to deliver exceptional care for your vehicle. As skilled professionals we use top-quality products and high quality equipment to ensure every detail is meticulously attended to, leaving your car spotless and well-protected. We're committed to your satisfaction and take pride in exceeding your expectations with every service."
  const foundedText = "Founded in 2023, Pristine Auto Care is a dynamic and innovative car detailing company that offers both mobile services and convenient site locations around Stoneygate off London Road and in Evington off Uppingham Road. We provide a comprehensive range of detailing services, including exterior 3-step washes, iron decontamination, clay bar treatments, machine and hand polishing, interior decontamination, steam cleaning, leather care and restoration, deep seat cleaning, ceramic coating, headlight restoration, and more.<br /><br /> At Pristine Auto Care, we cater to all vehicle owners who value the importance of maintaining their cars health and appearance. We believe that your vehicle is a reflection of you, and we are dedicated to ensuring it stays in top condition. Our commitment to delivering excellent service at competitive prices, combined with our attention to detail, sets us apart in the industry. <br /><br />As a company founded by two young entrepreneurs, we are constantly seeking innovative ways to enhance our services and stand out in the market we work as a pair too help multitask and detail your car at a much more reasonable time. Our mission is to provide exceptional care for your car, making sure every detail counts. Trust Pristine Auto Care to keep your vehicle looking its best."

  return (<>
    <div className="grid grid-cols-4 " id={"reasons"}>
    <div className=" place-self-center col-span-4 lg:mx-96">
    <div className="h-9" ></div>
      <h2 className="font-bold text-2xl tracing-wide leading-10">About Us?</h2>
      <div className="h-9" ></div>
      <p className=" tracing-wide ">{whyUsText}</p>
      <div className="h-9" ></div>
      <hr className="h-0.5 bg-black"></hr>
      <div className="h-9" ></div>
      <div id={"founded"}  >
        <p className=" tracing-wide " dangerouslySetInnerHTML={{ __html: foundedText }}></p>
      </div>
      <div className="h-9" ></div>
      <hr className="h-0.5 bg-black"></hr>
      <div className="h-9" ></div>
    </div>
  </div>


  </>

  )
}