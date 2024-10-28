import { ReactGoogleReviews } from "react-google-reviews";
import enhance from "./assets/enhance-the-look.jpg";

export default function Footer({featurableWidgetId}){

    return(<>
    <div className="flex ">
        <image className="" src={enhance} alt="enhance the look of your vehicle"></image>
    </div>
    <div className="flex  justify-around flex-wrap bg-black lg:px-7 py-5 sm:px-0 ">
    <iframe width="600" height="450" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ-wPzPQBhd0gRYZklXRLRpoI&key=AIzaSyANafHUIC8YCqe_1IYstHEjcbTwgnRaomU"></iframe>
    <a href="https://www.google.com/maps/place/Pristine+Auto+Care+Leicester/@52.635777,-1.095044,16z/data=!4m6!3m5!1s0x487761003df303fb:0x82a6d1125d259961!8m2!3d52.6357767!4d-1.095044!16s%2Fg%2F11w35st_hy?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D">
        <div className="mx-7 ">
    <h2 className="text-white font-bold text-xl"> Adress: <br/></h2>
    <h3 className="text-white"> Pristine Auto Care Leicester <br/>16 Sherwood St <br/> Leicester <br/> LE5 4GR <br/>  United Kingdom</h3>
    </div></a>
    <div className="mr-8 sm:mr-0">
        <h2 className="text-white font-bold text-xl">Contact Us:</h2>
        <h1 className="text-white">07798867651</h1>
    </div>
    <div>
    <ReactGoogleReviews  layout="badge" featurableId={featurableWidgetId} />

    </div>
    </div>
    </>)
}