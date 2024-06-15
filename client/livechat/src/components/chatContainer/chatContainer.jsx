import {useContext, useState} from "react"
import { UserParams } from "../mainContainer/mainContent"

import { NewConversation } from "./userPanel/newConversation/newConversation"
import { Contacts } from "./userPanel/contacts/contacs"

import '../chatContainer/chatContainer.css'
import {ChatPanel} from "../chatPanel/chatPanel.jsx";

export const ChatContainer = () => {

    let {user,  setUser, contacts, setContacts} = useContext(UserParams)

    let [messages, setMessages] = useState(null)


    return (
        <>
            <div className="chatContainerWrapper">
                <div className="userPanel">
                    <NewConversation/>
                    <Contacts setMessages={setMessages} />
                </div>

                <div className="chatPanel">
                    <ChatPanel  messages={messages} setMessages={setMessages} />
                </div>


            </div>

        </>
    )

}