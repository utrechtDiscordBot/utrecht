const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    // !warn gebruiker reden

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Jij kunt dit niet doen!");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.reply("de speler is niet gevonden!");

    if (user.hasPermission("MANAGE_MESSAGES")) return message.reply("deze speler kunt u niet waarschuwen!");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.reply("geef een reden!");

    message.channel.send(`${user} is succesvol gewaarschuwd!`)

var warnEmbed = new discord.RichEmbed()
.setDescription("**__Warn__**")
.setColor("#ffa500")
.addField("Warned speler:", user)
.addField("Warned door:", message.author)
.addField("Reden:", reason);

var warnChannel = message.guild.channels.find(`name`, "logs");
if(!warnChannel) return message.reply("ik kan het logs kanaal niet vinden");

warnChannel.send(warnEmbed);
}

module.exports.help = {
    name: "warn",
    description: "Waarschuw iemand"
}