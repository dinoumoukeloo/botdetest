const Discord = require("discord.js");
const client = new Discord.Client();

var perfix = ".tt"

client.on('message', message => {
  if (message.content === 'ping' ) {
    message.reply('pong !')
  }
})



client.login(process.en.TOKEN)
