const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Jij kunt dit niet doen!");

    if (!args[0]) return message.reply("geef een aantal op!");

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if(args[0] == 0) {
                message.channel.send("Ik kan geen 0 berichten verwijderen!").then(msg => msg.delete(3000));
            } else if (args[0] == 1) {
                message.channel.send("Ik heb 1 bericht verwijderd!").then(msg => msg.delete(3000));
            }else {

            message.channel.send(`Er zijn ${args[0]} berichten verwijderd!`).then(msg => msg.delete(3000));

            }

        });

    } else {
        return message.channel.send("Geef een aantal op.");
    }

}

module.exports.help = {
    name: "clear",
    description: "Verwijder een bepaald aantal berichten,"
}