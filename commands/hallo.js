const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send(`Hallo ${message.author}!`);

}

module.exports.help = {
    name: "hallo",
    description: "Zeg hallo tegen Utrecht."
}