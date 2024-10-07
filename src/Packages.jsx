
import rari2 from "./assets/rari2.jpeg";
import PackageBox from "./PackageBox.jsx";
export default function Packages(){

  return(<div className="flex flex-row justify-around flex-wrap lg:mx-44 pt-24">
  <PackageBox title="prem package" price="£10K" description={["- one","- two","- three"]} image={rari2} />
  <PackageBox title="prem package" price="£10K" description={["- one","- two","- three"]} image={rari2} />
  <PackageBox title="prem package" price="£10K" description={["- one","- two","- three"]} image={rari2} />
  </div>)
}