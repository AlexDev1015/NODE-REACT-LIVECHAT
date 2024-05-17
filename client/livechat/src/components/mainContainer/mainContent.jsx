import './mainContent.css'

import { LoginForm } from '../loginForm/loginForm'

export const MainContainer = () => {


    return (
        <>
            <div className='container'>
                <div className='wrapper'>
                    <div className='mainContainer'>
                        <LoginForm />
                    </div>

                </div>

            </div>


        </>
    )
}