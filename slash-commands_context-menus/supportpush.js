const { AttachmentBuilder, SlashCommandBuilder, Attachment, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('supportbuttonpush')
		.setDescription('support Button Push (Admin command).'),
async execute(interaction) {
    const support = new EmbedBuilder()

        .setColor('#8bf52f')
	     .setAuthor({ name: 'AIVP Roleplay | Support System', iconURL: 'https://imgur.com/mlmNVZe.png'})
         .setTitle('<:4673ticket:1053578965702430720> Support Ticket')
		 .setDescription(`Press the button to create a support ticket. Dont create support ticket for fail rp report\n\n**Remember: Support may delayed during rp hours.**`)
		 const statusbutton = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('supportticket')
					.setLabel('Create Ticket')
					.setStyle(ButtonStyle.Secondary)
                    .setEmoji('🎫')
					
	
				
			);
		

interaction.channel.send({embeds: [support], components: [statusbutton]})


    }
};
