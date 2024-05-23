import { useContext, useEffect, useState } from "react"
import { UserParams } from "../../mainContainer/mainContent"

export const HomeMessage = () => {

    let [user, setUser] = useContext(UserParams);
    let[defaultMessage, setDefaultMessage] = useState('')
    let[message, setMessage] = useState('')

    let [counter, setCounter] = useState(0)


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


    const putMessage = () => {
    
        if (counter < defaultMessage.length) {
            setMessage(message => message + defaultMessage[counter])
            setCounter(prev => prev + 1)

        }
     
    }
 

    useEffect(() => {
        setTimeout(putMessage, 80)
    }, [message,defaultMessage])



    return (
        <>
            <span>{message ? message : null}</span>

        </>
    )

}