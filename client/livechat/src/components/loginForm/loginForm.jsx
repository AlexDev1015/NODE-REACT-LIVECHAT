import { useState } from "react"


import './loginForm.css'
import { logPetition } from "../../partials/index.js"


export const LoginForm =() => {

    let [userName, setUserName] = useState('')
    let [userPassword,setUserPassword] = useState('')

    const getUserName = (event) =>{
        setUserName(event.target.value)
    }

    const getUserPassWord =(event) =>{
        setUserPassword(event.target.value)
    }


    const logIn = async() => {
        const log = await logPetition(userName,userPassword)
        console.log(`log -> ${log}`)

    }
    


    return(
        <>
            <form onSubmit={()=>logIn} className="logForm">
                <input onChange={getUserName} value={userName} /> 
                <input onChange={getUserPassWord} type="password" value={userPassword} />
                <button type="submit">lOG</button>
            </form>
        </>
    )

}