
import rari2 from "./assets/rari2.jpeg";
import PackageBox from "./PackageBox.jsx";
export default function Packages(){

  return(<div className="flex flex-row justify-around flex-wrap lg:mx-24 pt-24">


   <div className=" flex flex-col align-middle justify-center py-10 h-[27rem] w-full lg:max-w-[50%] md:max-w-[50%]  border-black border-2 my-8 ">
  <div className="flex mx-auto px-5  max-w-full justify-center">
    <img className="w-full max-w-[30rem] h-auto object-contain" src={rari2} alt="maintenance" />
  </div>
  <div className="flex flex-col justify-center items-center my-5">
    <h2 className="font-bold">Ceramic Coating (From £100k)</h2>
    <p>- one <br /></p>
    <p>- two <br /></p>
    <p>- three <br /></p>
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