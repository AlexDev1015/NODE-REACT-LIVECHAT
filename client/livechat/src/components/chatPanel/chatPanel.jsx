
import '../chatPanel/chatpanel.css'
import {useContext, useState} from "react";
import {handleMessage} from "../../partials/index.js";
import {UserParams} from "../mainContainer/mainContent.jsx";

export const ChatPanel = ({messages,setMessages}) => {

    let [message, setMessage] = useState(null)
    let {user,contact} = useContext(UserParams)

    const handleInputMessage = (event) =>{ setMessage(event.target.value)}

    const handleSubmitMessagge = async (event) =>{
        event.preventDefault();
        const petition = await  handleMessage(user,contact, message);



    }
    return(
        <>
            <div className="ChatPanel">
                <div className="MessagesContainer">
                    <div className="MessagesWrapper">
                        {
                            messages ?
                                <div>
                                    {messages}
                                </div>
                                : null
                        }

                    </div>

                </div>

                <div className="MessageContainer">
                    <form onSubmit={handleSubmitMessagge} className="MessageWrapper">
                        <input onChange={handleInputMessage} type="text"/>
                        <input type="submit" />
                    </form>
                </div>

            </div>
        </>
    )
}