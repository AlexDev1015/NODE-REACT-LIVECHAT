export const getContactSocket = async (connection,data) =>{

    //console.log(`ña daña es ${JSON.stringify(data)}`)
    let [socketID] = await connection.query("SELECT socketID FROM users WHERE ID = ?",[data.contact])
    return socketID


}