export const logRequest =async(connection,credentials ) =>{
    try{
        const query = 'SELECT `ID` FROM `users` WHERE `usr` = ? AND `pswd` = ?';
        const response = connection.query(query)

    }catch(e){}


}