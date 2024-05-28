import { useState } from "react"

import '../newConversation/newConversation.css'

export const NewConversation = () => {


    let[newConversation, setNewConversation] = useState(null)

    let getNewConversationInput = (e) =>{
        setNewConversation(e.target.value);

    }

    return(
    <>
        <form className="createNewConversation"> 
            <input onChange={getNewConversationInput} value={newConversation} />
            <button type="submit">SEARCH</button>

          
        </form>
        
    </>)
}