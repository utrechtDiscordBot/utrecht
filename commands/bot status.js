const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        if (args[0] == "aan") {
            var statusEmbed = new discord.RichEmbed()
            .setTitle("Bot Status")
            .setColor("#00ee00")
            .setDescription("De discord bot is online!")

            var statusChannel = message.guild.channels.find(`name`, "bot-status");
    if(!statusChannel) return message.reply("ik kan het bot status kanaal niet vinden");

    statusChannel.send(statusEmbed)
        } else if (args[0] == "uit") {
            var statusUit = new discord.RichEmbed()
            .setTitle("Bot Status")
            .setColor("#ee0000")
            .setDescription("De discord bot is offline!")

            var statusChannel = message.guild.channels.find(`name`, "bot-status");
    if(!statusChannel) return message.reply("ik kan het bot status kanaal niet vinden");

    statusChannel.send(statusUit)
        }
}

module.exports.help = {
    name: "status",
    description: "Verander de bot status."
}