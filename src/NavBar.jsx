import logo from "./assets/logo.jpeg"
export default function NavBar(){
    return(
        <nav>
            <img src={logo} alt="Logo"/>
            <h1>Pristine Auto Care</h1>
            <ul>
                <h2>Pristine Autocare</h2>
                <h2>Detailing Packages</h2>
                <h2>Contact</h2>
                <h2>Motorbike Packages</h2>
                <h2>Quick Quote</h2>
            </ul>
        </nav>
    )
}