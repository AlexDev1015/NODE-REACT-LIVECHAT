import express from 'express'
import cors from 'cors'
import { logRequest } from './partials/logrequest.js'
import { dbConnection } from './partials/dbconnection.js'

let connection;


const app = express()
app.use(cors());
app.use(express.json());



app.get('/',(req,res)=>{

})

app.post('/login',async(req,res)=>{
    const request = await logRequest(connection,req.body)
    console.log(`request -> ${JSON.stringify(request)}`)
    res.json(request)

})


app.listen(3000, async()=>{
    console.log('server is running') 
    connection = await dbConnection()

   
})