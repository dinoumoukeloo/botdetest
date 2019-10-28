const Discord = require("discord.js");
const ms = require("ms")

module.exports.run = async (bot, message, args) => {
    
    if(message.channel.type === "dm") return;
    message.delete()
    if(message.author.bot) return;
    let tomute = message.guild.member(message.mention.users.first() || message.guild.member.get(args[0]));
    if(!tomute){
        return message.reply("Je ne trouve pas l'utilisateur")
    }
    if(tomute.hasPermission(ADMINISTRATOR)) return message.reply("Je ne peut pas mute un administrateur")
    let muterole = message.guild.roles.find(`name`, "mute")
    if(!muterole) {
        try{
            muterole = await message.guild.createrole({
                name: "mute",
                color: "#000000",
                permissions: []
                
            })
            message.guild.channels.forEach(async(channel, id) => {
                await channel.overwritePremissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        }catch(e){
            console.log(e.stack)
        }
    }
    let mutetime = args[1]
    if(!mutetime) return message.reply("Vous n'avez pas mi de temps")

    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> a été mute pour ${ms(ms(mutetime))}`)
    setTimeout(function(){
        tomute.removeRole(muterole.id)
        message.channel.sen(`<@${tomute.id}> a été unmute`)

    }, ms(mutetime));
}


module.exports.help = {
    name: "tempmute"
}
