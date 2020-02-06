const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // ID van de categorie van de tickets.
    const categoryId = "669920780229804042";

    var argumenten = args.join(" ");
    if(!argumenten) argumenten = "Niet opgegeven";
    // Verkrijg Gebruikersnaam
    var userName = message.author.username;
    // Verkrijg discriminator
    var userDiscriminator = message.author.discriminator;
 
    // Als ticket al gemaakt is
    var bool = false;
 
    // Kijk na als ticket al gemaakt is.
    message.guild.channels.forEach((channel) => {
 
        // Als ticket is gemaakt, zend bericht.
        if (channel.name == userName.toLowerCase() + "-#" + userDiscriminator) {
 
            message.channel.send("Je hebt al een ticket aangemaakt");
 
            bool = true;
 
        }
 
    });
 
    // Als ticket return code.
    if (bool == true) return;

    var icon = message.author.displayAvatarURL;

    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Hoi, " + message.author.username)
        .setColor("#ffa500")
        .setThumbnail(icon)
        .setDescription("Je ticket is volledig aangemaakt!")
        .addField("Bericht: ", argumenten);
 
    message.channel.send(embedCreateTicket);
 
    // Maak kanaal en zet in juiste categorie.
    message.guild.createChannel(userName + "-#" + userDiscriminator, "text").then((createdChan) => { // Maak kanaal
 
        createdChan.setParent(categoryId).then((settedParent) => { // Zet kanaal in category.
 
            // Zet perms voor iedereen
            settedParent.overwritePermissions(message.guild.roles.find('name', "Speler"), { "READ_MESSAGES": false });
            // Zet perms voor de gebruiker die ticket heeft aangemaakt.
            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
            
            });


            var icon = message.author.displayAvatarURL;
 
            var embedParent = new discord.RichEmbed()
                .setTitle("Ticket")
                .setDescription("Als je geen vraag of bericht heb meegegeven bij de command, type alvast je vraag/bericht in deze ticket!")
                .setColor("#ffa500")
                .setThumbnail(icon)
                .addField("Ticket aangemaakt door: ", message.author)
                .addField("Bericht: ", argumenten);
 
            settedParent.send(embedParent);
        }).catch(err => {
            message.channel.send("Uhh oh! Er is iets fout gelopen.");
        });
 
    }).catch(err => {
        message.channel.send("Uhh oh! Er is iets fout gelopen.");
    });

}
 
module.exports.help = {
    name: "ticket",
    description: "Maak een ticket aan"
}