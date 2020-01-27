const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    // !warn gebruiker reden

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Jij kunt dit niet doen!");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.reply("de speler is niet gevonden!");

    if (user.hasPermission("MANAGE_MESSAGES")) return message.reply("deze speler kunt u niet waarschuwen!");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.reply("geef een reden!");

    if(!warns[user.id]) warns[user.id] = {
        warns:0
    };

    warns[user.id].warns++;

fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if(err) console.log(err)
});

var warnEmbed = new discord.RichEmbed()
.setDescription("**__Warn__**")
.setColor("#ffa500")
.addField("Warned speler:", user)
.addField("Warned door:", message.author)
.addField("Aantal warns:", warns[user.id].warns)
.addField("Reden:", reason);

var warnChannel = message.guild.channels.find(`name`, "logs");
if(!warnChannel) return message.reply("ik kan het logs kanaal niet vinden");

warnChannel.send(warnEmbed);

if(warns[user.id].warns == 3){
    var warnbericht = new discord.RichEmbed()
    .setDescription("**__PAS OP__** " + user)
    .setColor("#ffa500")
    .addField("Bericht:", "Nog één warn en je krijgt een kick!");

    message.channel.send(warnbericht);

} else if(warns[user.id].warns == 4){

    message.guild.member(user).kick(reason);
    message.channel.send(`${user} heeft ${warns[user.id].warns} warns, dus hij is gekicked!`);

} else if(warns[user.id].warns == 5){
    var warnbericht = new discord.RichEmbed()
    .setDescription("**__PAS OP__** " + user)
    .setColor("#ffa500")
    .addField("Bericht:", "Nog één warn en je krijgt een ban!");

    message.channel.send(warnbericht);

}else if(warns[user.id].warns == 6){

    message.guild.member(user).ban(reason);
    message.channel.send(`${user} heeft ${warns[user.id].warns} warns, dus hij is gebanned!`);
}
}

module.exports.help = {
    name: "warn",
    description: "Waarschuw iemand"
}