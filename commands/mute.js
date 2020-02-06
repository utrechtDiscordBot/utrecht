const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, arguments) => {

    // !mute gebruiker tijd

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Jij kunt dit niet doen!");

    var muteUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(arguments[0]));

    if (!muteUser) return message.reply("de speler is niet gevonden!");

    if (muteUser.hasPermission("MANAGE_MESSAGES")) return message.reply("deze speler kunt u niet muten!");

    var muteRole = message.guild.roles.find("name", "Muted");
    var muteRole2 = message.guild.roles.find("name", "Speler");

    if(!muteRole) return message.channel.send("De role: Muted bestaat niet");

    var muteTime = arguments[1];

    if(!muteTime) return message.channel.send("Geef een tijd aan!");

    await (muteUser.addRole(muteRole.id));
    message.channel.send(`${muteUser} is muted voor ${muteTime}`);

    await(muteUser.removeRole(muteRole2.id));

    var mutemute = new discord.RichEmbed()
    .setDescription(`${muteUser} is gemute!`)
    .setColor("#FF0000")
    .addField("Mute tijd: ", muteTime)
    .addField("Muted door: ", message.author)
    .addField("Muted speler:", muteUser)
    .setTimestamp();

    var mKanaal = message.guild.channels.find(`name`, "logs");
    if(!mKanaal) return message.channel.send("Kan het kanaal niet vinden!");

    mKanaal.send(mutemute)


    var unmute = new discord.RichEmbed()
        .setDescription(`${user} is nu unmuted!`)
        .setTimestamp();


        var mKanaal = message.guild.channels.find(`name`, "logs");
        if(!mKanaal) return message.channel.send("Kan het kanaal niet vinden!");
    
        mKanaal.send(unmute)


    setTimeout(function() {
        muteUser.removeRole(muteRole.id);
        muteUser.addRole(muteRole2.id);

        message.channel.send(unmute);


    }, ms(muteTime));


}

module.exports.help = {
    name: "mute",
    description: "Mute iemand voor een bepaalde tijd."
}