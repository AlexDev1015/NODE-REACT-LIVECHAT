import express, { json } from 'express'
import cors from 'cors'
import http from "http"
import dotenv from  "dotenv"



import {Server} from 'socket.io'
import { logRequest } from './partials/logrequest.js'
import { dbConnection } from './partials/dbconnection.js'
import { setSocketId } from './partials/dbSearch.js'
import { contactRequest } from './partials/contactRequest.js'


dotenv.config();

const app = express()

const http_server = http.createServer(app)

const ioSocket = new Server(http_server,{
    cors:{ origin: "http://localhost:5173"}
})


app.use(cors());
app.use(express.json());


let connection;
let userSocketId=null;


http_server.listen(process.env.SERVER_PORT, async()=>{ // on top bc here  is defined the port for the app routes request
    console.log('server is running') 
    connection = await dbConnection() 
})

ioSocket.on('connection',(socket)=>{ 
    userSocketId=socket.id;
    console.log(`socket: ${userSocketId}`)
})


app.post('/login',async(req,res)=>{
    const request = await logRequest(connection,req.body)
    setSocketId(connection,userSocketId,JSON.stringify(request))
    res.json(request)

})

app.post('/contacs',async(req,res)=>{
    
    const request = await contactRequest(connection,req.body);

    //console.log(`###################### index.js > request: ${request}`)

})




