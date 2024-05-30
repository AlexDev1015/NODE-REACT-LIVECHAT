import './mainContent.css'

import { createContext, useContext, useEffect, useState } from 'react'
import { LoginForm } from '../loginForm/loginForm'
import { ChatContainer } from '../chatContainer/chatContainer';


export let UserParams = createContext();


export const MainContainer = () => {




    let [user, setUser] = useState(null);
    let [contacs,setContacts] = useState('')




    const globalParams = {user,setUser,contacs,setContacts}


    return (

        <UserParams.Provider value={globalParams}>
            {(user == null || user.length == 0) ?

                <div className='container'>
                    <div className='wrapper'>
                        <div className='mainContainer'>
                            <LoginForm />

                        </div>

                    </div>
                </div>

                : (user.length > 0) ?
                    <ChatContainer />

                    : null




            }
        </UserParams.Provider >


    )
}