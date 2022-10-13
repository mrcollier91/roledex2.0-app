import { useState, useEffect } from "react"


function ContactList() {

    const [contacts, setContacts] = useState([])
    
    function getContacts() {
        return fetch("http://localhost:3004/contacts")
        .then(response => response.json())
        .then(data => setContacts(data))
    }

    useEffect(()=> {
        getContacts()
    },[])


    return(
        <div>
            {
            contacts.map((contact) =>{
            return(
            <div key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
            <p>{contact.address}</p>
            </div>
            )
            })
            }
        </div>
    )
}

export default ContactList