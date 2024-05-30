import { useContext, useState } from "react"


import './loginForm.css'
import { logPetition } from "../../partials/index.js"
import { HomeMessage } from "./home_message/homeMesage.jsx"
import { UserParams } from "../mainContainer/mainContent.jsx"


export const LoginForm =() => {

    const {user,setUser} = useContext(UserParams)

    let [userName, setUserName] = useState('')
    let [userPassword,setUserPassword] = useState('')

     

    const getUserName = (event) =>{ setUserName(event.target.value)}
    const getUserPassWord =(event) =>{setUserPassword(event.target.value)}


    const logIn = async(event) => {
        event.preventDefault();
        const response =  await logPetition(userName,userPassword)
        console.log(`${JSON.stringify(response)}`)
        setUser(response)

    }
    


    return(
        <>
        <div className="loginContainer">
            <HomeMessage />
            <form onSubmit={logIn} className="logForm">
                <input onChange={getUserName} value={userName} /> 
                <input onChange={getUserPassWord} type="password" value={userPassword} />
                <button type="submit">lOG</button>
            </form>
        </div>
        </>
    )

}