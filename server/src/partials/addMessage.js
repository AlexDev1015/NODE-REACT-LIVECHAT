//r.eceive an array
import { v4 } from 'uuid';


export const addMessage = async (connection,data,conversationID) =>{
    const _conversationID = conversationID[0].conversationID
    const _message = data.message
    const _messageID = v4()
    const _dateobj = new Date;
    const _sendBy = data.user[0].ID

    //console.log(JSON.stringify(data))


    let dia = _dateobj.getDate();
    let mes = _dateobj.getMonth() ; // Los meses empiezan desde 0
    let año = _dateobj.getFullYear();
    let horas = _dateobj.getHours();
    let minutos = _dateobj.getMinutes();
    let segundos = _dateobj.getSeconds();
    let milisegundos = _dateobj.getMilliseconds();

    dia = dia < 10 ? '0' + dia : dia;
    mes = mes < 10 ? '0' + mes : mes;
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    milisegundos = milisegundos < 100 ? (milisegundos < 10 ? '00' + milisegundos : '0' + milisegundos) : milisegundos;
    const _date = `${año}-${mes}-${dia} ${horas}:${minutos}:${segundos}`

    await connection.query(`INSERT INTO messages(conversationID,messageID,message,sendAt,sendBy) values (?,?,?,?,?)`,[_conversationID,_messageID,_message,_date,_sendBy]);
    const[newConversation] = await  connection.query('SELECT message, sendBy, sendAt FROM messages where conversationID = ? ORDER BY sendAt',[_conversationID])
    //console.log(newConversation)
    return newConversation;

}