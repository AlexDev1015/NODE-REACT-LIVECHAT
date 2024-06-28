import express, {json, request} from 'express'
import cors from 'cors'
import http from "http"
import dotenv from  "dotenv"



import {Server} from 'socket.io'
import { logRequest } from './partials/logrequest.js'
import { dbConnection } from './partials/dbconnection.js'
import { setSocketId } from './partials/dbSearch.js'
import { contactRequest } from './partials/contactRequest.js'
import  {getMessages} from "./partials/getMessages.js";
import {addMessage} from "./partials/addMessage.js";
import {recivedMessage} from "./partials/recivedMessage.js";
import {getContactSocket} from "./partials/getContactSocket.js";

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
    //console.log(`socket: ${userSocketId}`)

    socket.on("send message", async(data,callback)=>{
       console.log(`la data es: ${JSON.stringify(data)}`)
       if (data.message){
           const conversationID = await recivedMessage(connection, data)
          const conversationMessages =await addMessage(connection, data, conversationID)

           const ContactSocket =   await getContactSocket(connection,data)
           console.log(`su socket es ${JSON.stringify(ContactSocket[0].socketID)}`)
           callback(conversationMessages)
           ioSocket.to(ContactSocket[0].socketID).emit("get messages",conversationMessages)


       }

    })
})


app.post('/login',async(req,res)=>{
    const request = await logRequest(connection,req.body)
    setSocketId(connection,userSocketId,JSON.stringify(request))
    res.json(request)

})

app.post('/contacs',async(req,res)=>{
    
    const request = await contactRequest(connection,req.body);
   // console.log(`###################### index.js > request index: ${JSON.stringify(request)}`)
    res.json(request)

})

app.post('/messages',async (req,res)=>{
    const requestConversationID = await getMessages(connection,req.body)



    res.json(requestConversationID);

})

/* app.post('/messages/send', async(req,res)=>{
    const firstRequestMessages = await  getMessages(connection,req.body)
    const lastRequestMessages = await  addMessage(firstRequestMessages,req.body.message)
}) */