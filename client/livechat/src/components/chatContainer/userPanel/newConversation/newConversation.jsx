import { useState,useContext,useEffect } from "react"
import '../newConversation/newConversation.css'



import { contactSearch } from "../../../../partials"
import {UserParams} from "../../../mainContainer/mainContent"



export const NewConversation = () => {

    let[contactID, setContactID] = useState('')
    
    const {user,contacs,setContacts} = useContext(UserParams)



    let handleSubmit = async(event)=>{
        console.log(`valor de contact: ${typeof(contacs)}`)
        event.preventDefault();
        const response = await contactSearch(user,contactID)
        console.log(`user search response ->${response}`)

    }

    let getContactID = (e) =>{setContactID(e.target.value);}

    return(
    <>
        <form onSubmit={handleSubmit} className="createNewConversation"> 
            <input required onChange={getContactID} value={contactID} />
            <button type="submit">SEARCH</button>
        </form>
        
    </>)
}