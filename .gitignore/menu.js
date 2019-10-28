const Discord = require("discord.js");
const client = new Discord.Client();

var perfix = ".tt"

client.on('message', message => {
  if (message.content === 'ping' ) {
    message.reply('pong !')
  }
})

client.on("ready", () => {
  console.log("Ready");
  client.user.setGame("On apprend nos erreurs mais la vie est une erreur , alors comment comprendre après la mort 😔");
})



client.login(process.env.TOKEN)
