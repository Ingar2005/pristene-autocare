
import rari2 from "./assets/rari2.jpeg";
import PackageBox from "./PackageBox.jsx";
export default function Packages(){

  return(<div className="flex flex-row justify-around flex-wrap lg:mx-24 pt-24">


 <PackageBox title="Maintenance Scheme" price="£10K" description={["- one","- two","- three"]} image={rari2} />
  <PackageBox title="Standerd Detail" price="£10K" description={["- one","- two","- three"]} image={rari2} />
  <PackageBox title="Pain Correction" price="£10K" description={["- one","- two","- three"]} image={rari2} />
 <PackageBox title="Deep Clean" price="£10K" description={["- one","- two","- three"]} image={rari2} />
  <PackageBox title="Headlight Restauration" price="£10K" description={["- one","- two","- three"]} image={rari2} />
  <PackageBox title="Decontamination And Protection " price="£10K" description={["- one","- two","- three"]} image={rari2} />
  <PackageBox title="Engine Bay Detail" price="£10K" description={["- one","- two","- three"]} image={rari2} />
  </div>)
}