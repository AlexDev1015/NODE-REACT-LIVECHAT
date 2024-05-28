

export const logPetition = async(user,password) =>{

    const credentials = {user:user,password:password}
    try{
        const petition = await fetch('http://localhost:1222/login', {
            method:'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(credentials)
            
            

        })
        const result = await petition.json();

        console.log(`requesteed -> ${JSON.stringify(result)}`)
        
        return result;




    }
    catch(e){console.log(e)}




}