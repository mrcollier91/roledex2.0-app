import {useEffect, useState} from "react"
import { NavLink } from "react-router-dom";


function ContactLists() {
    // console.log("this is ContactList")
   
    const [contacts, setContacts] = useState([])
    
    function getContacts() {
      return fetch("http://localhost:3004/contacts")
        .then(response => response.json())
        .then(data => setContacts(data))
    }
  
    useEffect(()=> {
      getContacts()
  },[])


function handleSort() {
    const sortedContacts = contacts.sort((contact1,contact2)=> {
      return contact1.name.localeCompare(contact2.name)
    })
    console.log(sortedContacts)
  }
  

    return(
        <div>
          <button onClick={(e)=>handleSort()}>sort</button>
                {
                contacts.map((contact)=>{
                        return(
                            <div key={contact.id} className="contact">
                            <NavLink to={`/contacts/${contact.id}`}>
                            <div>
                            <p>{contact.name}</p>
                            <p>{contact.address}</p>
                            <p>{contact.phone}</p>
                            <p>{contact.email}</p>
                            </div>
                            </NavLink>
                            </div>
                        )})}
        </div>
    )
}

export default ContactLists