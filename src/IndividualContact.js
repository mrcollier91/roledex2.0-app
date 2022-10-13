import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"



function IndividualContact() {
    const [contact, setContact] = useState(null)
    const params = useParams()

    function getContact() {
        return fetch(`http://localhost:3004/contacts/${params.id}`)
          .then(response => response.json())
          .then(data => setContact(data))
      }
    
      useEffect(()=> {
        getContact()
    },[])

    return(
        <div>
            {contact ? 
                
                (
                     <div key={contact.id}>
                     <p>{contact.name}</p>
                     <p>{contact.address}</p>
                     <p>{contact.phone}</p>
                     <p>{contact.email}</p>
                     </div>
                )
                : <div>Contact doesn't exist</div>
             }
        
         
        </div>
    )
}

export default IndividualContact