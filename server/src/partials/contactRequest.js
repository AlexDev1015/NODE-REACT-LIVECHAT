import { query } from "express";


export const contactRequest = async(connection,requestParams) =>{

    let UserID = requestParams.user[0].ID;
    let contactID = requestParams.contactID;

    const firstQuery = 'SELECT 1 FROM `users` WHERE `ID` = ? ';

    const [exists] = await connection.query(firstQuery,[contactID])

    if(exists.length){ // verify contact
        let contactsList=[];
        console.log("existe")
        const verificationQuery = 'SELECT `contacts` FROM `users` WHERE `ID` = ?'
        const [results] = await connection.query(verificationQuery,[UserID]);
        contactsList = JSON.parse(results[0].contacts);
        console.log(`###################### contactRequest.js > resulXt: ${JSON.stringify(contactsList)}`)
        
        if(contactsList == null){ // verify userContactsList
            console.log("no tiene contactos")
            const setContactList = [{contactID:contactID}]
            const createContactQuery = 'UPDATE users SET contacts = ? WHERE ID = ?';
            const [result] = await connection.query(createContactQuery,[JSON.stringify(setContactList),UserID])
            console.log(`${JSON.stringify(result)}`)
            return setContactList
            
        }

        else{ //Verify each contact 
            contactsList.map(async(contact)=>{
                if(contact.contactID == contactID){
                    console.log(`ya es su contactoS ${contactsList}`)
                    return contactsList;
                }
                else{ //create newContactilist
                    let newContactList = contactsList;
                    let newContact = {contactID:contactID}
                    newContactList.push(newContact) 
                    const newContactListQuery = 'UPDATE users SET contacts = ? WHERE ID = ?'
                    const [result] = await connection.query(newContactListQuery,[JSON.stringify(newContactList),UserID])
                    console.log(`nueva lista AGREGADA ${JSON.stringify(newContactList)}`)
                    console.log(`${JSON.stringify(result)}`)
                    return newContactList;


                }
            })
        }
    }

    else{
        console.log("no existe"); // dont exist

    }
}


