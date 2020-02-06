const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, arguments) => {

    // !mute gebruiker tijd
    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(arguments[0]));

    var Role = message.guild.roles.find("name", "Muted");
    var Role2 = message.guild.roles.find("name", "Speler");

    setTimeout(function() {
        user.removeRole(Role.id);
        user.addRole(Role2.id);

        message.channel.send(`${user} is volledig ge-unmute!`);


        var unmute = new discord.RichEmbed()
        .setDescription(`${user} is ge-unmute!`)
        .setColor("#00ee00")
        .setTimestamp();


        var mKanaal = message.guild.channels.find(`name`, "logs");
        if(!mKanaal) return message.channel.send("Kan het kanaal niet vinden!");
    
        mKanaal.send(unmute)

});
}

module.exports.help = {
    name: "unmute",
    description: "unMute iemand voor een bepaalde tijd."
}