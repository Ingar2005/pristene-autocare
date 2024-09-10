export default function ContactForm(){

    return(
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSerDfOsvD1oStc2ZBMwXsYEABU72oCdd-wY5K7pI30s-bkn-w/formResponse"> 
            <div  >
            <label htmlFor="name" >*Name:</label>
            <input id="name" name="entry.2143218858"></input>
        </div>
        <div >
        <label htmlFor="type">*Vehicle Type:</label>
            <select name="entry.1049832130" id="type">
                <option>None</option>
                <option>Car</option>
            </select>
        </div>
        <div >
        <label htmlFor="email">Email:</label>
        <input id="email" name="entry.512781029"></input>
        </div>  
        <button type="submit">submit</button>
            
        </form>
    )
}