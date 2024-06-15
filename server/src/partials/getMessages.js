import {json} from "express";

export const getMessages = async (connection, requestParams) =>{

    console.log(`asa${JSON.stringify(requestParams)}`)
    const [result] = await connection.query("SELECT conversations FROM users where ID = ? ",[requestParams.user[0].ID]);
    let userMessages = result[0].conversations;
    //console.log(`mensajes:  ${userMessages}`)
    //esta pendiente resolver según el contacto
    if(userMessages != null){
        return userMessages;
    }
    else{
        return 'Say hi';
    }

}