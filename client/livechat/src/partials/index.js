

export const logPetition = async(user,password) =>{

    const credentials = {user:user,password:password}
    try{
        const petition = await fetch('http://localhost:1222/login', {
            method:'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(credentials)
        })
        const result = await petition.json();      
        return result;





    }
    catch(e){console.log(e)}




}

export const contactSearch = async(user,contactID = null) =>{

    const objects = {user:user,contactID:contactID}
    try{
        const petition  = await fetch("http://localhost:1222/contacs",{
            method:'POST',
            headers: { 'content-type': 'application/json' },
            body : JSON.stringify(objects)

        })
        const result = await petition.json();
     return result

    }catch(e){}




}
export const getMessages = async (user, contactID) => {

    try{
        const objects = { user:user, contactID:contactID}
        console.log("holax")

        const petition = await fetch("http://localhost:1222/messages",{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(objects)

        })

        const result = await petition.json()
        return result;

    }
    catch (e){
        console.log("failed fetching user messages")}




}

export const handleMessage = async (user, contact, message) => {
    console.log(`user: ${JSON.stringify(user)}`)
    console.log(`msg: ${message}`)
    console.log(`contacto ${contact}`)

    const objects = {user:user,contact:contact,message:message}
    const petition = await fetch("http://localhost:1222/messages/send",{
        method: "POST",
        headers: {'content-type':'aplication/json'},
        body: JSON.stringify(objects)
    })

}



