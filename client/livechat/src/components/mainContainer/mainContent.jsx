import './mainContent.css'

import { createContext, useContext, useState } from 'react'
import { LoginForm } from '../loginForm/loginForm'


export let UserParams = createContext();


export const MainContainer = () => {


    let [user, setUser] = useState(null);


    return (
    
            <UserParams.Provider value={[user, setUser]}>
                <div className='container'>
                    <div className='wrapper'>
                        <div className='mainContainer'>
                            <LoginForm />
                            
                        </div>

                    </div>

                </div>
            </UserParams.Provider >


         )
}