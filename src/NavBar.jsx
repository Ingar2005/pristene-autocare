import logo from "./assets/logo.jpeg"
export default function NavBar({scrollToSection,packages}){
    return(<>
        <style>{
           `.navElement{display:flex;flex-Direction:row;justify-content:centre;align-Items:center;}`
            }
        </style>
        <nav style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"end"}}>
            <img style={{height:"15vh"}} src={logo} alt="Logo"/>
            </div>
            <h1 style={{display:"flex", flexDirection:"row",justifyContent:"centre",alignItems:"center"}}>Pristine Auto Care</h1>

            <ul style={{display:"flex", flexDirection:"row",justifyContent:"space-between",width:"70%"}}>
                <h2 className="navElement" onClick={()=>scrollToSection(packages)}>Detailing Packages</h2>
                <h2 className="navElement">Contact</h2>
                <h2 className="navElement" >Motorbike Packages</h2>
                <h2 className="navElement">Quick Quote</h2>
            </ul>
        </nav>
        </>
    )
}