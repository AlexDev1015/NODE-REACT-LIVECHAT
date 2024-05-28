import mysql from "mysql2/promise"
import dotenv from "dotenv"
dotenv.config();


export const dbConnection = async() =>{


    try{
        const connection = await mysql.createConnection({
            host:process.env.HOST,
            user:process.env.USER,
            database: process.env.DB_NAME,
        })
    
        return connection;
    

    }
    catch(e){return console.log('DB error Connection')}
    
}