const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var splitser = "/";

    if(args[0], args[1] == null) {
        var gebruikMessage = new discord.RichEmbed()
        .setTitle("Gebruik")
        .setColor("#32CD32")
        .setDescription(`Meld je aan door gebruik te maken van: \n !aanmelden <TEAM> ${splitser} <DIENSTNUMMER>`);
    
        return message.channel.send(gebruikMessage);
    }

    args = args.join(" ").split(splitser);

    if(args[0] == undefined) args[0] = "Geen team opgegeven";
    if(args[1] == undefined) args[1] = "Geen dienstnummer opgegeven";

    var dnr2 = {

        team: args[0].trim(),
        dienstnummer: args[1].trim()

    }

   var dnrEmbed = new discord.RichEmbed()
    .setTitle("Aanmelding:")
    .setColor("#32CD32")
    .setDescription(`Aanmelding van: ${message.author} \n\n\n Team van aanmelding: **${dnr2.team}** \n\n Dienstnummer: **${dnr2.dienstnummer}**`)
    .setTimestamp();

    var dnrKanaal = message.guild.channels.find(`name`, "aanmeldingen-afmeldingen");
    if(!dnrKanaal) return message.channel.send("Kan het kanaal niet vinden!");

    dnrKanaal.send(dnrEmbed);

    var succesEmbed = new discord.RichEmbed()
    .setTitle("Aanmelding")
    .setColor("#32CD32")
    .setDescription(`Hallo ${message.author}! Je bent succesvol aangemeld! \n Aanmelding zien? Ga naar ${dnrKanaal}`);

    return message.channel.send(succesEmbed);
}

module.exports.help = {
    name: "aanmelden",
    description: "Meld je aan"
}