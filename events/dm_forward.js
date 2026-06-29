const { EmbedBuilder } = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: "messageCreate",
   async execute(message, client, Commands) {


 if((message.author.id == config.aivpbotid) || (message.channel.type !== 1)) return;

 try{

 message.reply(`<@${message.author.id}> Your message has been recived and forwarded to AIVP server. Server admins will take care of your message. NB: Only text messages supported`)

  const dmemb = new EmbedBuilder()
	.setColor('#b8ff14')
	.setTitle('DM Recived From User To AIVP Bot')
  .setThumbnail(message.author.displayAvatarURL())
  .setDescription(`● **DM Author Name:** ${message.author.username} \n● **Author ID:** ${message.author.id}\n ● **Message Content:** ${message.content}`)
  .setTimestamp()
  .setFooter({ text: '© AIVP Roleplay' });
    
message.client.channels.cache.get(config.dmlogchannel).send({embeds: [dmemb]})
}
catch(err) {
 console.log(err)
}



}
}