

function NewContactForm() {
    return(
        <div>
           
        <form >
            <label>Name: </label>
            <input type={"text"} placeholder={"enter name"} required></input>
            <br/>
            <label>Email: </label>
            <input type={"email"} placeholder={"enter email"}  required></input>
            <br/>
            <label>Phone: </label>
            <input type={"tel"} placeholder={"enter phone"} ></input>
            <br/>
            <label>Address: </label>
            <input type={"text"} placeholder={"enter address"} ></input>
            <button type="submit" >Submit</button>
        </form>
        </div>
    )
}

export default NewContactForm