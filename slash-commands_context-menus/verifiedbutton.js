const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const config = require('../config.json');
module.exports = {
	
  data: new SlashCommandBuilder()
	.setName('verifiedbutton')
	.setDescription('Get info about a user or a server!'),
	execute(interaction) {

	const srvstatusmessage = new EmbedBuilder()
        .setColor('#b8ff14')
	    .setAuthor({ name: 'AIVP Verification Department', iconURL: 'https://imgur.com/mlmNVZe.png'})
		.setDescription(`**Do you agree with our discord rules**`)
		
		.setFooter({ text: '© AIVP Roleplay'});
		interaction.channel.send({embeds:[srvstatusmessage]})
		
		
		
	}
		
		







		

	



  }



// 
		
// 	