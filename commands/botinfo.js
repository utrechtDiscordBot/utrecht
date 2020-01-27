const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
var botIcon = bot.user.displayAvatarURL;

        var botInfoEmbed = new discord.RichEmbed()
            .setDescription("Discord bot informatie")
            .setColor("#17517E")
            .setThumbnail(botIcon)
            .addField("Bot naam:", bot.user.username)
            .addField("Gemaakt op:", bot.user.createdAt);


        return message.channel.send(botInfoEmbed);
    }

    module.exports.help = {
        name: "botinfo",
        description: "Bekijk de informatie van de Bot."
    }