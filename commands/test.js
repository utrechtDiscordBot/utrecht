const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send(`Beste ${message.author}, je hoeft je geen zorgen te maken, want Utrecht bestaat nog!:white_check_mark:`);

}

module.exports.help = {
    name: "test",
    description: "Test of Utrecht nog bestaat."
}