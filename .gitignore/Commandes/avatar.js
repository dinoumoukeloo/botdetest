module.exports.run = async(bot, message, args) => {
    let msg = await message.channel.send("doing some magic ...");
    let target = message.mentions.users.first() || message.author;
    message.delete()

    await message.channel.send({files: [
        {
            attachment: target.displayAvatarURL,
            name: "client.user.setAvatar"
        }
    ]});

    msg.delete();
}

module.exports.help = {
    name: "avatar",
    description: "show the avatar of a user",
    usage: "[@user]"
}
