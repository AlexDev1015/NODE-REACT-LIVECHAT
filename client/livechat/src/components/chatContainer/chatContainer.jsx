import { useContext } from "react"
import { UserParams } from "../mainContainer/mainContent"

import { NewConversation } from "./userPanel/newConversation/newConversation"
import { Contacts } from "./userPanel/contacts/contacs"

import '../chatContainer/chatContainer.css'


export const ChatContainer = () => {

    let {user,setUser} = useContext(UserParams)



    return (
        <>
            <div className="chatContainerWrapper">
                <div className="userPanel">
                    <NewConversation/>
                    <Contacts/>
                </div>
                

            </div>
        </>
    )

}