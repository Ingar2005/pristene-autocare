export default function ContactForm(){

    return(
        <form >
            <div  >
            <label htmlFor="name" >*Name:</label>
            <input id="name" ></input>
        </div>
        <div >
        <label htmlFor="type">*Vehicle Type:</label>
            <select id="type">
                <option>None</option>
                <option>Car</option>
            </select>
        </div>
        <div >
        <label htmlFor="number">*number:</label>
        <input id="number" ></input>
        </div>
        <button type="submit">submit</button>

        </form>
    )
}