import { useContext, useEffect } from 'react'
import { UserParams } from '../../../mainContainer/mainContent'
import { contactSearch } from '../../../../partials'

import '../contacts/contacs.css'
import {getMessages} from "../../../../partials/index.js";


export const Contacts = ({setMessages}) => {

    const { user, contacs, setContacts,contact,setContact } = useContext(UserParams)

    const handleGetMessages = async (contactID) =>{
        setContact(contactID)
        const request = await getMessages(user, contactID)
        setMessages(request)
        console.log(request)

    }

    useEffect(()=>{
        if(contacs == null){
            async function getContacts(){
                const response = await contactSearch(user);
                setContacts(JSON.parse(response))
                console.log(`contactos front: ${JSON.stringify(response)}`)

            }
            getContacts();
            
        }
    },[contacs])


    return (
        <>
            {contacs != null ?

                <div className="userContacsContainer">
                    <span>CONTACTS</span>
                    <ul>
                        {
                        contacs.map((contact) => (
                                <li  onClick={()=>{handleGetMessages(contact.contactID)}} className='contactSlide' key={contact.contactID}>{contact.user}</li>
                        )  
                        )}
                    </ul>

                </div>
                : null}
        </>

    )
}