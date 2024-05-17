import { useState } from "react"


import './loginForm.css'

export const LoginForm =() => {

    let [userInput, setUserInput] = useState('')
    let [userPassword,setUserPassword] = useState('')

    const getUserInput = (event) =>{
        setUserInput(event.target.value)
    }

    const getUserPassWord =(event) =>{
        setUserPassword(event.target.value)
    }
    



    return(
        <>
            <form  className="logForm">
                <input onChange={getUserInput} value={userInput} /> 
                <input onChange={getUserPassWord} type="password" value={userPassword} />
                <button type="submit">lOG</button>

            </form>
        </>
    )

}