import { query } from "express";


export const contactRequest = async(connection,requestParams) =>{

    let tempUserID = requestParams.user[0].ID;
    let contactID = requestParams.contactID;

    const firstQuery = 'EXISTS(SELECT * FROM `users` WHERE `ID` = ?)';

    const [results] = await connection.query(firstQuery,[contactID])
    
    console.log(`existe ? : ${JSON.stringify(results)}`)




   // const query = 'SELECT `ID`, `usr` FROM `users` WHERE  '


}


