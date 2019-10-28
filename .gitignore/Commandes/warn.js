const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if(message.channel.type === "dm") return;
    message.delete()
    if(message.author.bot) return;
    var mentionned = message.mentions.users.first()
    if(!message.guild.member(message.author).hasPermission("VIEW_AUDIT_LOG")) return message.reply("Vous n'avez pas la permissions");
    if(message.mentions.users.size === 0){
        return message.channel.send("vous n'avez pas mentionner d'utilisateur");
    }else{
        const args = message.content.split(' ').slice(1)
        if(args[0] === "<@!" + mentionned.id + ">" || args[0] === "<@!" + mentionned.id + ">"){
            if(args.slice(1).length != 0){
                message.channel.sen(`${mentionned.tag} a été averti !`)
                mentionned.send(`Bonjour vous venez d'eres avertie dans le serveur ${message.guild.name} par ${message.author.username}\nRaison: ${args.slice(1).join(' ')}`)

            }else{
                return message.reply("utilisations incorrect")
            }
        }else{
            return message.reply("utilisations incorrect")
        }
    }
}
module.exports.help = {
    name: warn
}
