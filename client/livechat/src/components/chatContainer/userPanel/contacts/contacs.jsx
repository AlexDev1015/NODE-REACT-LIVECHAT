import { useContext } from 'react'
import { UserParams } from '../../../mainContainer/mainContent'

import '../contacts/contacs.css'




export const Contacts = () =>{

    const {contacs,setContacs} = useContext(UserParams)


    return(
    <>
        <div className="userContacsContainer">
            <ul>
                <td>CONTACTS</td>
                <li>Contacto 1</li>
                <li>Contacto 1</li>
                <li>Contacto 1</li>
                <li>Contacto 1</li>
            </ul>

        </div>
    </>
    )
}