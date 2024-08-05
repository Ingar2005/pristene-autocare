import viteLogo from "/vite.svg";

export default function NavBar(){
    return(
        <nav>
            <img src={viteLogo} alt="Logo"/>
            <ul>
                <h1>Pristine Autocare</h1>
                <h1>Detailing Packages</h1>
                <h1>Contact</h1>
                <h1>Motorbike Packages</h1>
                <h1>Quick Quote</h1>
            </ul>
        </nav>
    )
}