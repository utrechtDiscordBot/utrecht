const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // Vang het idee op.
    var bug = args.join(" ");
 
    // Kijk na als er een bug is meegegeven.
    if (!bug) return message.channel.send("Geen bug opgegeven! Gelieve een bug op te geven.");
 
    // Maak het embed aan.
    var icon = message.author.displayAvatarURL;
    var bugEmbed = new discord.RichEmbed()
        .setTitle("Bug ingediend")
        .setColor("#00FF00")
        .setThumbnail(icon)
        .addField("Bug: ", bug)
        .addField("Ingezonden door: ", message.author);
 
    // Vind het kanaal.
    var bugChannel = message.guild.channels.find(`name`, "bugs");
    if (!bugChannel) return message.guild.send("Kan het kanaal niet vinden");
 
    // Verzend het bericht en voeg er reacties aan toe.
    bugChannel.send(bugEmbed);

    var succesBugEmbed = new discord.RichEmbed()
    .setDescription(`Hallo, ${message.author}! Bedankt voor het melden van de bug! U helpt ons om Utrecht beter te maken!`)
    .setColor("#00FF00");
    return message.channel.send(succesBugEmbed);
 
    // Einde.

}
 
module.exports.help = {
    name: "bug",
    description: "Heb je een bug gevonden. Zet het dan hier en misschien passen we het toe."
}