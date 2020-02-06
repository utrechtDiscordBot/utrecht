const discord = require("discord.js");

module.exports.run  = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Jij kunt dit niet doen!");
    var botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage);
    if(!botmessage) return message.channel.send("Geef ook een bericht op!");

}


module.exports.help = {
    name: "say"
}