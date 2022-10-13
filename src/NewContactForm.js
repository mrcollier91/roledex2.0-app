import {useState} from "react"


function NewContactForm({getContacts}) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    

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
        .then(() => getContacts())
    }
    return(
        <div>
         
       <form onSubmit={(e)=>handleNewContact(e)}>
           <label>Name: </label>
           <input type={"text"} placeholder={"enter name"} onChange={(e)=>{setName(e.target.value)}} required></input>
           <br/>
           <label>Email: </label>
           <input type={"email"} placeholder={"enter email"} onChange={(e)=>{setEmail(e.target.value)}} required></input>
           <br/>
           <label>Phone: </label>
           <input type={"tel"} placeholder={"enter phone"} onChange={(e)=>{setPhone(e.target.value)}}></input>
           <br/>
           <label>Address: </label>
           <input type={"text"} placeholder={"enter address"} onChange={(e)=>{setAddress(e.target.value)}}></input>
           <button type="submit" >Submit</button>
       </form>
       </div>
   )
}

    

export default NewContactForm