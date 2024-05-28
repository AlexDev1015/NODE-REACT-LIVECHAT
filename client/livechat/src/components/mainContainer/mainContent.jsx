import './mainContent.css'

import { createContext, useContext, useState } from 'react'
import { LoginForm } from '../loginForm/loginForm'
import { ChatContainer } from '../chatContainer/chatContainer';


export let UserParams = createContext();


export const MainContainer = () => {


    let [user, setUser] = useState(null);


    return (

        <UserParams.Provider value={[user, setUser]}>
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