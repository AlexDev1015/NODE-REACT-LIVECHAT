import { json } from "express";

export const setSocketId = async (connection, userSocketId, userID) => {

    if (userID != null) {
        try {
            let idArray = JSON.parse(userID)
            console.log(`id: ${idArray}`)
            const query = 'UPDATE `users` SET `SocketId`= ? WHERE `ID`= ?';
            const res= await connection.query(query,[userSocketId,idArray[0].ID])
        }
        catch (e) { }
    }
}