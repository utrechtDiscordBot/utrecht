const discord = require("discord.js");
const botConfig = require("../botconfig.json");
var prefix = botConfig.prefix;

module.exports.run = async (bot, message, args) => {

    try {

        var text = `\n\n **__Speler Commands:__** \n ${prefix}aanmelden - Meld je aan als een Hulpdienst! \n ${prefix}afmelden - Meld je af als een hulpdienst! \n ${prefix}review - Geef een review aan de discord server/roblox game. \n ${prefix}bug - Laat weten aan ons dat er ergens een bug in zit! \n ${prefix}idee - Stuur een idee voor de discord server/roblox game in. \n ${prefix}botinfo - Bekijk de informatie van de Discord Bot. \n ${prefix}hallo - Zeg hallo tegen Utrecht. \n ${prefix}help - Krijg dit bericht. \n ${prefix}ping - Check de vertraging van de bot. \n ${prefix}serverinfo - Krijg de informatie van de Utrecht Discord Server. \n ${prefix}test - Test of Utrecht nog bestaat! \n\n\n\n **__Ticket Commands:__** \n ${prefix}ticket - Maak een ticket aan. \n ${prefix}close - Sluit een ticket. \n !claim - Claim een ticket \n\n\n **__Staff Commands:__** \n !clear - Verwijder een bepaald aantal berichten. \n !mute - Demp iemand voor een bepaalde tijd. \n !mededeling - Maak een mededeling aan. \n !status - Verander de status van de bot. \n !training - Maak een melding aan dat er een training is in de roblox server. \n !say - Laat de bot jouw bericht zeggen! \n\n\n\n\n **__Maak voor meer vragen een ticket aan!__**`;
        
        var helpEmbed = new discord.RichEmbed()
        .setTitle(`**Utrecht Hulpcentrum voor ${message.author.username}**`)
        .setColor("#ffa500")
        .setDescription(text);
        message.author.send(helpEmbed);

        message.channel.send(":mailbox: De commands zijn in je privé berichten verstuurd! :mailbox:")

    } catch (error) {

        message.channel.send("Er is iets fout gegaan!");

    }

}

module.exports.help = {
    name: "help",
    description: "Krijg dit bericht."
}