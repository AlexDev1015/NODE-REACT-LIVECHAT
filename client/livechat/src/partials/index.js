

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

export const contactCreation = async(user,contactID) =>{

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