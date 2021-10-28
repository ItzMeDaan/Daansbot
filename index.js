const { Client, Intents, Collection } = require("discord.js");
const botConfig = require("./botConfig.json");
const fs = require("fs");

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS]
});

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith(".js"));

for (const file of commandFiles) {

    const command = require(`./commands/${file}`);

    client.commands.set(command.help.name, command);

    console.log(`De file ${command.help.name}.js is geladen`);

}

client.once("ready", () => {
    console.log(`${client.user.username} is online.`);
    client.user.setActivity("DF Customers", { type: "STREAMING" });
});

client.on("guildMemberAdd", member => {

    var role = member.guild.roles.cache.get("903268734137933865");

    if (!role) return; 

    member.roles.add(role);

    var channel = member.guild.channels.cache.get("902933636301615134");

    if (!channel) return;

    channel.send(`Welkom op de server,  ${member}`);

});




client.on("messageCreate", async message => {

    if (message.author.bot) return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var commend = messageArray[0];

    if (!message.content.startsWith(prefix)) return;

    const commandData = client.commands.get(commend.slice(prefix.length));

    if (!commandData) return;

    var arguments = messageArray.slice(1);

    try {

        await commandData.run(client, message, arguments);


    } catch (error) {
        console.log(error);
        await message.reply("Er was een probleem tijdens het uitvoeren van deze command");
    }

    if (commend == `${prefix}hallo`) {
        return message.channel.send("HIIII");
    }

});

client.login(process.env.token);