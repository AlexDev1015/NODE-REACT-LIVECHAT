import { query } from "express";


export const contactRequest = async (connection, requestParams) => {

    let UserID = requestParams.user[0].ID;
    let contactID = requestParams.contactID;

    if (contactID != null) {

        const firstQuery = 'SELECT 1 FROM `users` WHERE `ID` = ? ';

        const [exists] = await connection.query(firstQuery, [contactID])
        let contactsList = [];
        console.log(`contacto: ${JSON.stringify(exists)}`)


        if (exists.length) { // verify contact
            console.log("existe user en la db")
            const verificationQuery = 'SELECT contacts FROM users WHERE ID = ?'
            const [results] = await connection.query(verificationQuery, [UserID]);
            contactsList = JSON.parse(results[0].contacts);
            let tag = false;


            if (contactsList == null) { // verify userContactsList
                console.log("no tiene contactos")

                const [userResult] = await connection.query('SELECT usr FROM users WHERE ID = ?', [contactID])
                console.log(`$user -> ${JSON.stringify(userResult)})`)

                const setContactList = [{ contactID: contactID, user: userResult[0].usr }]
                const createContactQuery = 'UPDATE users SET contacts = ? WHERE ID = ?';
                const [result] = await connection.query(createContactQuery, [JSON.stringify(setContactList), UserID])
                console.log(`${JSON.stringify(result)}`)
                return setContactList

            }

            if (contactsList != null) {

                contactsList.map(async (contact) => {
                    //console.log(`verificación ${contact}`)
                    if (contact.contactID == contactID) {
                        console.log(`es su contacto:`)
                        tag = true;
                    }
                })

            }
            if (!tag) {
                let newContactList = contactsList;
                const [userResult] = await connection.query('SELECT usr FROM users WHERE ID = ?', [contactID])

                let newContact = { contactID: contactID, user: userResult[0].usr }
                newContactList.push(newContact)
                const newContactListQuery = 'UPDATE users SET contacts = ? WHERE ID = ?'
                const [result] = await connection.query(newContactListQuery, [JSON.stringify(newContactList), UserID])
                console.log(`nuevo contacto`)
                return newContactList;
            }
            else {
                return contactsList;
            }




        }

        else {
            console.log("no existe"); // dont exist
            return null;

        }
    }
    else{
            const [contactsList] = await connection.query('SELECT contacts FROM users WHERE ID = ?',[UserID])
            console.log(`obteniendo contactos: ${JSON.stringify(contactsList[0].contacts)}`) 
            return contactsList[0].contacts
    }
}

