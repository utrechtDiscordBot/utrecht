const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // Id van category van tickets.
    const categoryId = "663847265231831040";
 
    var argumenten = args.join(" ");
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Jij kunt dit niet doen!");
    if(!argumenten) return message.channel.send("Geef een reden op om de ticket te sluiten!");
    // Als bericht in ticket kanaal is dan verwijder kanaal ander zend bericht
    if (argumenten, message.channel.parentID == categoryId) {
        
        message.channel.delete();
 
    } else {
 
        message.channel.send("Gelieve dit commando in een ticket kanaal te doen.");
 
    }
 
    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Hoi, " + message.channel.name)
        .setDescription("Je ticket is **__GESLOTEN__**. Wil je een nieuwe maken doe dan !ticket")
        .setColor("#FF0000")
        .addField("Reden van sluiting: ", argumenten)
        .setFooter("ticket gesloten");
 
    // Vind kanaal voor de logs.
    var logChannel = message.guild.channels.find("name", "ticket-logs");
    if (!logChannel) return message.channel.send("Kanaal bestaat niet");
 
    logChannel.send(embedCloseTicket);
 
}
 
module.exports.help = {
    name: "close",
    description: "Sluit een ticket af"
}