import logo from "./assets/logo.jpeg"
export default function NavBar({scrollToSection,packages}){
    return(<>

        <nav className="flex flex-row justify-between h-32  place-items-center bg-black	 ">
            <div className="flex-1  flex justify-center"><img className="h-28"  src={logo} alt="Logo"/></div>
                <h2 className="flex-1 flex justify-center text-white hover:text-lg hover:cursor-pointer " onClick={()=>scrollToSection(packages)}>Detailing Packages</h2>
                <h2 className="flex-1 flex justify-center text-white hover:text-lg hover:cursor-pointer">Contact</h2>
                <h2 className="flex-1 flex justify-center text-white hover:text-lg hover:cursor-pointer" >Motorbike Packages</h2>
                <h2 className="flex-1 flex justify-center text-white hover:text-lg hover:cursor-pointer">Quick Quote</h2>
        </nav>
        </>
    )
}