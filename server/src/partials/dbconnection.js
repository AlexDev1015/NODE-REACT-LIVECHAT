import mysql from "mysql2/promise"

export const dbConnection = async() =>{


    try{
        const connection = await mysql.createConnection({
            host:'localhost',
            user:'root',
            database: 'livechat'
        })
    
        return connection;
    

    }
    catch(e){return e}
    
}