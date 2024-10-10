import logo from "./assets/logo.jpeg"
export default function NavBar({onHomeClick,packages,onCarPackageClick, onMotorPackageClick}){

    return(<>

        <nav className="fixed w-screen z-10 flex flex-row justify-between h-24  place-items-center bg-black	 ">
            <div className="flex-1  flex justify-center"  ><a onClick={()=>{onHomeClick()}}><img  className="h-20 hover:cursor-pointer"  src={logo} alt="Logo"/></a></div>
                <h2 className="flex-1 flex justify-center text-white hover:text-lg hover:cursor-pointer " onClick={()=>{onCarPackageClick()}}>Detailing Services</h2>
                {/* <h2 className="flex-1 flex justify-center text-white hover:text-lg hover:cursor-pointer">Contact</h2> */}
                <h2 className="flex-1 flex justify-center text-white hover:text-lg hover:cursor-pointer" onClick={()=>{alert("Coming Soon")}} >Motorbike Services</h2>
                <h2 className="flex-1 flex justify-center text-white hover:text-lg hover:cursor-pointer" onClick={()=>{alert("Coming Soon")}} >Quick Quote</h2>
        </nav>
        </>
    )
}