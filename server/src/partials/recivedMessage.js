import {v4} from "uuid";

export const recivedMessage = async( connection,message_params) =>{

    const _user = message_params.user[0].ID;
    const  _contactID = message_params.contact;
    const  _message = message_params.message;

    if(_message){
        const [request] = await  connection.query("SELECT * from conversations where (sendBy = ? AND sendTo = ?) or (sendBy = ? AND sendTo = ?)",[_user,_contactID,_contactID,_user]);
        let conversations = request;
        if(conversations.length == 0){
            let newConversationID = v4();
            const [setNewConversationID] = await connection.query("INSERT INTO conversations(conversationID,sendBy,sendTo) values(?,?,?)",[newConversationID,_user,_contactID])
            conversations = setNewConversationID;
            console.log(`la nueva conversacion es: ${JSON.stringify(conversations)} `)
            return conversations;

        }
        else {
            console.log(`la conversacion es: ${JSON.stringify(conversations)} `)
            return conversations;

        }




    }





}