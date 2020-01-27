const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("jij kunt dit niet doen!");

    var splitser = "/";

    if(args[0] == null) {
        var gebruikMessage = new discord.RichEmbed()
        .setTitle("Gebruik")
        .setColor("#00ee00")
        .setDescription(`Maak een mededeling aan door gebruik te maken van: \n !mededeling <SOORT MEDEDELING> ${splitser} <MEDEDELING> ${splitser} <KLEUR IN HEX WAARDE> ${splitser} <KANAAL>`);
    
        return message.channel.send(gebruikMessage);
    }

    args = args.join(" ").split(splitser);

    if(args[0] == undefined) args[0] = "Niet opgegeven";
    if(args[1] == undefined) args[1] = "Niet opgegeven";
    if(args[2] == undefined) args[2] = "#ffa500";
    if(args[3] == undefined) args[3] = "mededelingen";

    var options = {

        soort: args[0].trim(),
        mededeling: args[1].trim(),
        kleur: args[2].trim(),
        kanaal: args[3].trim()

    }

    var announcer = message.author;

    var mededelingEmbed = new discord.RichEmbed()
    .setTitle("Mededeling:")
    .setColor(options.kleur)
    .setDescription(`Bericht van ${announcer} \n\n\n Soort mededeling: **${options.soort}** \n\n Mededeling: **${options.mededeling}**`)
    .setTimestamp();

    var mededelingKanaal = message.guild.channels.find(`name`, options.kanaal);
    if(!mededelingKanaal) return message.channel.send("Kan het kanaal niet vinden!");

    mededelingKanaal.send(mededelingEmbed)
    mededelingKanaal.send("@everyone");
}

module.exports.help = {
    name: "mededeling",
    description: "Maak een mededeling."
}