import {v4} from "uuid";

export const getMessages = async (connection, requestParams) =>{

    const contactID = requestParams.contactID;
    const user = requestParams.user[0].ID;

    const [conversationID] = await connection.query("SELECT conversationID FROM conversations WHERE (sendBy = ? AND sendTo = ? ) OR (sendBy = ? AND sendTo = ?)",[contactID,user,user,contactID]);
    if(conversationID != ""){

        const[conversation] = await connection.query("SELECT * FROM messages where conversationID = ?",[conversationID[0].conversationID])
        console.log(`conversationID: ${JSON.stringify(conversation)}`)

        return conversation
        //resolver el obtener los menssajes
    }
    else{
        return "Say hi!"


    }



}