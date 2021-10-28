const botConfig = require("../botConfig.json");

module.exports.run = async (client, message, args) => {

    try {

        var prefix = botConfig.prefix;

        var response = "**Commands**\r\n\n";
        var response = "!help"
        var response = "!hallo"
        var response = "Er zullen Meer commands Komen deze bot is in de bouw"
        var general = "**__Algemene commands__**\r\n";
        var info = "\r\n**__Informatie__**\r\n";

        client.commands.forEach(command => {

            switch (command.help.category) {

                case "general":
                    general += `${prefix}${command.help.name} - ${command.help.discription}\r\n`;
                    break;
                case "info":
                    info += `${prefix}${command.help.name} - ${command.help.discription}\r\n`;
                    break;
            }

        });

        response += general = info;

        message.author.send(response).then(() => {
            return message.reply("Alle commands kun je vinden in je Privé DM")
        }).catch(( ) => {
            return message.reply("Je Privé DM Is uitgeschakeld je hebt dus geen bericht ondvangen");
        })

    } catch (error) {
        message.reply("Deze command is verkeert uitgevoert")
    }

}

module.exports.help = {
    name: "help", 
    category: "info", 
    descrption: "geeft dit menu"
}