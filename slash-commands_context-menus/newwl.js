const { AttachmentBuilder, SlashCommandBuilder, Attachment, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('whitelistpush')
		.setDescription('wlpush'),
async execute(interaction) {
    const wl = new EmbedBuilder()

        .setColor('#8bf52f')
	     .setAuthor({ name: 'AIVP Roleplay | Whitelist  Application', iconURL: 'https://imgur.com/mlmNVZe.png'})
         .setTitle('Whitelist Application')
		 .setDescription(`Click the button to get whitelist in the server. **Remember: You must read rules before applying.**`)
         
         .setFooter({ text: '© AIVP Roleplay Server'});
		 const whitelistbutton = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('whitelistapplication')
					.setLabel('Whitelist Apply')
					.setStyle(ButtonStyle.Success)
                    
				)
				.addComponents(
					
					new ButtonBuilder()
						
						.setLabel('Not Working ? Click Here')
						.setStyle(ButtonStyle.Link)
						.setURL('https://forms.gle/zQd5MrH2dAW7drcS6')
						
	
					
				);
interaction.channel.send({embeds: [wl], components: [whitelistbutton]})


    }
};
