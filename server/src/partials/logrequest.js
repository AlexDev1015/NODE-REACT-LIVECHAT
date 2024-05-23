export const logRequest =async(connection,credentials ) =>{

    try{
        const query = 'SELECT `ID` FROM `users` WHERE `usr` = ? AND `pswd` = ?';
        const  [results, fields] = await connection.query(query,[credentials.user,credentials.password])

        return results

    }catch(e){console.log('server error / dbsearch failed ')}


}