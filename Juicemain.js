 const Discord = require('Discord.js');

const client = new Discord.Client(); 

 const prefix = "!";

client.once('ready', () => {
 
    console.log('Juice is online!');
});



 client.on("message", Function(message))
     if(!message.content.startsWith(prefix) || message.author.bot) return;
     

     
     const commandBody = message.content.slice(prefix.length);
     const args = commandBody.split(' ');
     const command = args.shift().toLowerCase()
     

     
     if (command === "ping") {
         const timeTaken = Date.now() - message.createdTimestamp;
         message.reply(`Pong! Este mensaje ha tenido una latencia de ${timeTaken}ms.`);
        }
    ;
var filter_list = [
    'server.gsroleplay.com',
];

client.on('message', message => {
    if (filter_list.some(word =>
message.content.toLowerCase().includes(word)))
{
    message.delete()
}
});








 Client.login('NzY2Nzg4NDcwMzQ5NjI3NDIz.X4odaQ._z3dYf4Z9Iw6I7Nw3U6SJC4-Cfc');

