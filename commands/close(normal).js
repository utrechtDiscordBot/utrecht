const discord = require("discord.js");
const ticketFile = require("./ticket.js");
 
module.exports.run = async (bot, message, args) => {
 
    // Id van category van tickets.
    const categoryId = `663847265231831040`;
    const category2 = `675342005152514058`;
 
    var argumenten = args.join(" ");
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Jij kunt dit niet doen!");
    if(!argumenten) return message.channel.send("Geef een reden op om de ticket te sluiten!");
    // Als bericht in ticket kanaal is dan verwijder kanaal ander zend bericht
    if (argumenten, message.channel.parentID == categoryId) {
        
        
 
    } else {
 
        message.channel.send("Gelieve dit commando in een ticket kanaal te doen.");
 
    }

    var embedCloseTicket = new discord.RichEmbed()
        .setTitle(`Ticket van ${message.channel.name}`)
        .setDescription("Je ticket is **__GESLOTEN__**. Wil je een nieuwe maken doe dan !ticket")
        .setColor("#FF0000")
        .addField("Reden van sluiting: ", argumenten)
        .setFooter("ticket gesloten");
 
    // Vind kanaal voor de logs.
    var logChannel = message.guild.channels.find("name", "ticket-logs");
    if (!logChannel) return message.channel.send("Kanaal bestaat niet");
 
    logChannel.send(embedCloseTicket);

    ticketFile.overwritePermissions(message.author, {
 
        "READ_MESSAGES": false, "SEND_MESSAGES": false,
        "ATTACH_FILES": false, "CONNECT": false,
        "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": false,
        "READ_MESSAGE_HISTORY": false
    
    });
 
}
 
module.exports.help = {
    name: "close",
    description: "Sluit een ticket af"
}