
import '../chatPanel/chatpanel.css'
import {useContext, useEffect, useState} from "react";
import {UserParams} from "../mainContainer/mainContent.jsx";
import {sendMessage} from "../../partials/clientSocketConnection.js";
import {clientSocket} from "../../partials/clientSocketConnection.js";


export const ChatPanel = ({messages,setMessages}) => {

    let [message, setMessage] = useState(null)
    let {user,contact} = useContext(UserParams)

    const handleInputMessage = (event) =>{ setMessage(event.target.value)}

    const handleSubmitMessage = async (event) =>{
        event.preventDefault();
        const petition = await sendMessage(user,contact, message);
        setMessages(petition)
        console.log(petition)
    }

    useEffect(()=>{
        clientSocket.on("get messages",(messages)=>{
            console.log(`los mensajes del contactxzo son ${JSON.stringify(messages)}`)
            setMessages(messages)
            console.log(`èl user para la clase es ${JSON.stringify(user)}`)
        })
        },[clientSocket])





    return(
        <>
            <div className="ChatPanel">
                <div className="MessagesContainer">
                    <div className="MessagesWrapper">
                        {
                            Array.isArray(messages) ?
                                messages.map((message,index)=>(<>
                                        <div className={message.sendBy == user[0].ID ?'userMessage message':'contactMessage message'} key={index}>{message.message}</div>
                                    <div className={message.sendBy == user[0].ID ?' right':'left'}>{message.sendAt}</div>
                                    </>

                                ))

                                :null

                        }
                    </div>

                </div>

                <div className="MessageContainer ">
                    <form onSubmit={handleSubmitMessage} className="MessageWrapper inputContainer">
                        <input onChange={handleInputMessage} type="text"/>
                        <input type="submit" />
                    </form>
                </div>

            </div>
        </>
    )
}