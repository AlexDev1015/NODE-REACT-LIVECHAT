

export const logPetition = async(user,password) =>{

    const credentials = {user:user,password:password}
    try{
        const petition = await fetch('http://localhost:3000/login', {
            method:'POST',
            body: JSON.stringify(credentials)

        })

        return petition;

    }
    catch(e){console.log(e)}




}