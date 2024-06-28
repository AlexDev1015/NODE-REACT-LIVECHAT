import { io } from 'socket.io-client';
export const clientSocket = io('http://localhost:1222');

export const sendMessage = async (user, contact, message) => {
    const params = { user: user, contact: contact, message: message };

    return new Promise((resolve, reject) => {
        clientSocket.emit('send message', params, (response) => {
            console.log(`la respuesta es ${JSON.stringify(response)}`);
            resolve(response);
        });
    });
};



export const refreshMessages = () => {


}
