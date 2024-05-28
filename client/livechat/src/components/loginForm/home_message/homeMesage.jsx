import { useContext, useEffect, useState } from "react"
import { UserParams } from "../../mainContainer/mainContent"

export const HomeMessage = () => {

    let [user, setUser] = useContext(UserParams);
    let[defaultMessage, setDefaultMessage] = useState('')
    let[message, setMessage] = useState('')

    let [counter, setCounter] = useState(0)


    const putMessage = () => {

        if (counter < defaultMessage.length) {
            setMessage(message => message + defaultMessage[counter])
            setCounter(prev => prev + 1)

        }
     
    }

    useEffect(()=>{
        if(Array.isArray(user)){
            setCounter(0)
            setMessage('')
            setDefaultMessage("PLEASE, TRY AGAIN :(")
        }
        else{
            setDefaultMessage('WELCOME!')
        }
    
    },[user])
 

    useEffect(() => {
        setTimeout(putMessage, 50)
    }, [message,defaultMessage])



    return (
        <>
            <span>{message ? message : null}</span>

        </>
    )

}