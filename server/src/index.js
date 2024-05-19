import express from 'express'
import { logRequest } from './partials/logrequest.js'
import { dbConnection } from './partials/dbconnection.js'


const app = express()

let connection;


app.get('/',(req,res)=>{

})

app.post('/login',(req,res)=>{

    const request = logRequest(connection,req.body.credentials)
    console.log(`request -> ${req.body.credentials}`)
    res(request)


})


app.listen(3000, async()=>{
    console.log('server is running') 
    connection = await dbConnection()

   
})