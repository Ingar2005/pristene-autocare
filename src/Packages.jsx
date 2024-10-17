
import rari2 from "./assets/rari2.jpeg";
import PackageBox from "./PackageBox.jsx";
export default function Packages(){

  return(<div className="flex flex-row justify-around flex-wrap lg:mx-24 pt-24">


    <div className="mx-7 flex flex-col align-middle justify-center h-[27rem] w-screen border-black border-2 my-8">
    <div className="flex mx-auto w-[27rem]"><img className="" src={rari2} alt="maintanance"></img></div>
    <div className="flex flex-col justify-center items-center my-8"><h2 className="font-bold">Ceramic Coating (From £100k)</h2>
     <p>- one <br /> </p>
     <p>- two <br /> </p>
     <p>- three <br /> </p>

    </div>
    </div>
  <PackageBox title="Maintenance Scheme" price="£10K" description={["- one","- two","- three"]} image={rari2} />
  <PackageBox title="Standerd Detail" price="£10K" description={["- one","- two","- three"]} image={rari2} />
  <PackageBox title="Pain Correction" price="£10K" description={["- one","- two","- three"]} image={rari2} />
 <PackageBox title="Deep Clean" price="£10K" description={["- one","- two","- three"]} image={rari2} />
  <PackageBox title="Headlight Restauration" price="£10K" description={["- one","- two","- three"]} image={rari2} />
  <PackageBox title="Decontamination And Protection " price="£10K" description={["- one","- two","- three"]} image={rari2} />
  <PackageBox title="Engine Bay Detail" price="£10K" description={["- one","- two","- three"]} image={rari2} />
  </div>)
}