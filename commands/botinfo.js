const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new MessageEmbed()
        .setTitle("Deze Bot")
        .setDescription("Deze bot is gemaakt door ItzMeDaan#1049")
        .setColor("AQUA")
        .addField("Bot Naam", client.user.username)

    return message.channel.send({embed: [botEmbed] });
    
}

module.exports.help = {
    name: "botinfo"
}