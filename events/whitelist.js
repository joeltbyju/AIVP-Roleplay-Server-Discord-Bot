const { EmbedBuilder } = require('discord.js');
const whitelistplrfun = require('.././events/whitelistfunction.js');
const config = require('../config.json');
module.exports = {
    name: "messageCreate",
   async execute(message, client, Commands) {
if (message.channel.id !== config.whitelistingchnl || message.author.id == config.aivpbotid) return;
 let player = message.mentions.members.first();
 message.delete()
try{
message.guild.channels.cache.get(config.whitelistchnl).send({content:'Congratulations <@'+player.id+'> on getting your Roleplay Pass. Enjoy the Roleplay Experience!', files: [(await whitelistplrfun(player)).attachment] })
player.roles.remove(config.pendingrole)
		player.roles.add(config.whitelistrole)
}
catch(err) {
console.log(err)
message.reply(`An error occured when issuing the Roleplay Pass. Please contact ${config.botdevid} if this continues to happen.`)
}
}
}