const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    // !warn gebruiker reden

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("jij kunt dit niet doen!");
    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(arguments[0]));
    if(!user) return message.channel.send("de speler is niet gevonden!");
    var reden = arguments[0];

    if(arguments[0]) message.reply(`${user} is succesvol gewaarschuwd!`);

    var warnEmbed = new discord.RichEmbed()
    .setTitle("Warn")
    .setColor("#ffa500")
    .addField("Warned user: ", user)
    .addField("Warned door: ", message.author)
    .addField("Reden: ", reden);

    var warnChannel = message.guild.channels.find('name', 'logs');

    if(arguments[0]) warnChannel.send(warnEmbed);
}

module.exports.help = {
    name: "warn",
    description: "Waarschuw iemand"
}