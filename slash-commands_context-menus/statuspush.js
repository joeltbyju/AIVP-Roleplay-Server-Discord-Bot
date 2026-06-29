const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, SlashCommandBuilder} = require('discord.js');


module.exports = {
	
  data: new SlashCommandBuilder()
	.setName('statusbutton')
	.setDescription('Get info about a user or a server!'),
	
execute(interaction) {
const srvbutton = new EmbedBuilder()
	     .setAuthor({ name: 'AIVP-AIVP Roleplay | Server Status Update ', iconURL: 'https://imgur.com/mlmNVZe.png'})
	     .setDescription(`Press the below button send server status update. **NB: Dont press unnecessarily this will send server status update.** `)
	     .addFields(
			  { name: 'Last Updated By', value: `<@${interaction.user.id}>`, inline: true },
			  { name: 'Last Updated At', value: `Undefined`, inline: true }
			)
		 const statusbutton = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('online')
					.setLabel('Online')
					.setStyle(ButtonStyle.Secondary)
					.setEmoji('🟢'),
					new ButtonBuilder()
					.setCustomId('offline')
					.setLabel('Offline')
					.setStyle(ButtonStyle.Secondary)
					.setEmoji('🔴'),
					new ButtonBuilder()
					.setCustomId('restart')
					.setLabel('Server Restarted')
					.setStyle(ButtonStyle.Secondary)
					.setEmoji('⭕'),
					new ButtonBuilder()
					.setCustomId('maintenance')
					.setLabel('Maintenance')
					.setStyle(ButtonStyle.Secondary)
					.setEmoji('🛠️'),
				
			);
		
		
interaction.channel.send({embeds:[srvbutton], components: [statusbutton]})
		
		
		
	}
		
	};


