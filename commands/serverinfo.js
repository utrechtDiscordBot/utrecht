const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconURL;

        var serverinfoEmbed = new discord.RichEmbed()
            .setDescription("Discord server informatie")
            .setColor("#17517E")
            .setThumbnail(icon)
            .addField("Jouw naam:", message.author)
            .addField("Je bent gejoind op:", message.member.joinedAt)
            .addField("Totaal aantal leden:", message.guild.memberCount)
            .addField("Server gemaakt op:", message.guild.createdAt);

        return message.channel.send(serverinfoEmbed);

}

module.exports.help = {
    name: "serverinfo",
    description: "Bekijk de informatie van Utrecht."
}