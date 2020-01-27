const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // Vang het idee op.
    var idee = args.join(" ");
 
    // Kijk na als er een idee is meegegeven.
    if (!idee) return message.channel.send("Geen idee opgegeven! Gelieve een idee op te geven.");
 
    // Maak het embed aan.
    var icon = message.author.displayAvatarURL;
    var ideeEmbed = new discord.RichEmbed()
        .setTitle("Nieuw Idee")
        .setColor("#00FF00")
        .setThumbnail(icon)
        .addField("Idee: ", idee)
        .addField("Ingezonden door: ", message.author);
 
    // Vind het kanaal.
    var ideeChannel = message.guild.channels.find(`name`, "ideeën");
    if (!ideeChannel) return message.guild.send("Kan het kanaal niet vinden");
 
    // Verzend het bericht en voeg er reacties aan toe.
    ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
    });

    var succesEmbed = new discord.RichEmbed()
    .setDescription(`Hallo, ${message.author}! Bedankt voor het idee! U helpt ons om Utrecht beter te maken!`)
    .setColor("00FF00");
    return message.channel.send(succesEmbed);
 
    // Einde.

}
 
module.exports.help = {
    name: "idee",
    description: "Heb je een idee. Zet het dan hier en misschien passen we het toe."
}