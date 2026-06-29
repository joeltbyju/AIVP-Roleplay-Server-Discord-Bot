const {WebhookClient, SlashCommandBuilder} = require('discord.js');

const config = require('../config.json');
module.exports = {
	
  data: new SlashCommandBuilder()
	.setName('policebrodcast')
	.setDescription('Police Discord Broadcast')
    .addStringOption(option => option.setName('title').setDescription('Enter A Title').setRequired(true))
    .addStringOption(option => option.setName('broadcastmessage').setDescription('Enter The Broadcast Message').setRequired(true))
    .addAttachmentOption(option => option.setName('file').setDescription('Select A File To Upload')),
	
execute(interaction) {
    const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1059085197355798548/Xo_Qk3AhjxkM3xFu1lbOIqORqyp_JMFD-HqFduPHWcFK4dIgg81gsUZoYIvJ_KXWu9nR' });
    const policeusr = interaction.guild.members.cache.get(interaction.user.id) || interaction.guild.members.fetch(interaction.user.id).catch(err => {})

const title = interaction.options.getString('title');
const mess = interaction.options.getString('broadcastmessage')
const attach = interaction.options.getAttachment('file');
var sdmess = (`__**${title}**__ \n\n${mess}\n<@&${config.whitelistrole}>`)
if(!attach) webhookClient.send(sdmess);
else webhookClient.send({content: sdmess, files: [attach]});
interaction.reply({content: `Police Broadcast Send`, ephemeral: true}) 
}
		
		







		

	



  
};


// 
		
// 	