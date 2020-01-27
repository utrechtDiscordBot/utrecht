const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("jij kunt dit niet doen!");

    var splitser = "/";

    if(args[0] == null) {
        var gebruikMessage = new discord.RichEmbed()
        .setTitle("Gebruik")
        .setColor("#00ee00")
        .setDescription(`Maak een training aan door gebruik te maken van: \n !training <TEAM> ${splitser} <SOORT TRAINING> ${splitser} <TIJD> \n${splitser} <HOST> ${splitser} <CO-HOST> ${splitser} <VERZAMELPLAATS> \n ${splitser} <TEAM KLEUR IN HEX WAARDE> ${splitser} <KANAAL>`);
    
        return message.channel.send(gebruikMessage);
    }

    args = args.join(" ").split(splitser);

    if(args[0] == undefined) args[0] = "Niet opgegeven";
    if(args[1] == undefined) args[1] = "Niet opgegeven";
    if(args[2] == undefined) args[2] = "Niet opgegeven";
    if(args[3] == undefined) args[3] = "Niet opgegeven";
    if(args[4] == undefined) args[4] = "Niet opgegeven";
    if(args[7] == undefined) args[5] = "Niet opgegeven";
    if(args[5] == undefined) args[6] = "#ffa500";
    if(args[6] == undefined) args[7] = "trainingen";

    var options = {

        team: args[0].trim(),
        soort: args[1].trim(),
        tijd: args[2].trim(),
        host: args[3].trim(),
        cohost: args[4].trim(),
        locatie: args[5].trim(),
        kleur: args[6].trim(),
        kanaal: args[7].trim(),

    }

    var announcer = message.author;

    var announcementEmbed = new discord.RichEmbed()
    .setTitle("Training:")
    .setColor(options.kleur)
    .setDescription(`Bericht van${announcer} \n\n\n Team: **__${options.team}__** \n\n Soort training: **__${options.soort}__** \n\n Tijd: **__${options.tijd}__** \n\n Host: **__${options.host}__** \n\n Co-Host: **__${options.cohost}__** \n\n Verzamelplaats: **__${options.locatie}__**`)
    .setTimestamp();

    var trainingKanaal = message.guild.channels.find(`name`, options.kanaal);
    if(!trainingKanaal) return message.channel.send("Kan het kanaal niet vinden!");

    trainingKanaal.send(announcementEmbed)
    trainingKanaal.send("@everyone");
}

module.exports.help = {
    name: "training",
    description: "Maak een training aan."
}