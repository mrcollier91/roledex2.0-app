import {useState} from "react"
import {Navigate} from "react-router-dom"


function NewContactForm() {
    // console.log('this is NewContactForm')
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [isSubmit, setIsSubmit] = useState(false)

    function handleNewContact(e) {
        e.preventDefault()
        const options = {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                'Accept': 'application/json'
            },
            body : JSON.stringify( {
                name,
                email,
                phone,
                address
            })
        }
        return fetch("http://localhost:3004/contacts", options)
            .then(() => setIsSubmit(true))
    }

     return(
         <div id="formbox">
             {isSubmit ? <Navigate to="/contacts" replace={true} /> : 
        (<form onSubmit={(e)=>handleNewContact(e)}>
            <label className="form">Name: </label>
            <input type={"text"} placeholder={"enter name *required"} onChange={(e)=>{setName(e.target.value)}} required></input>
            <br/>
            <label className="form">Email: </label>
            <input type={"email"} placeholder={"enter email *required"} onChange={(e)=>{setEmail(e.target.value)}} required></input>
            <br/>
            <label className="form">Phone: </label>
            <input type={"tel"} placeholder={"enter phone"} onChange={(e)=>{setPhone(e.target.value)}}></input>
            <br/>
            <label className="form">Address: </label>
            <input type={"text"} placeholder={"enter address"} onChange={(e)=>{setAddress(e.target.value)}}></input>
            <button type="submit" >Submit</button>
        </form>)}
        </div>
    )
}

export default NewContactForm