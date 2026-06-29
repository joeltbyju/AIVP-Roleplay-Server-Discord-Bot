const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const config = require('../config.json');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('About AIVP Server'),
async execute(interaction) {
	const about = new EmbedBuilder()
	.setColor('#8bf52f')
    .setTitle('AIVP Roleplay Server')
    .setDescription(`AIVP roleplay server is a GTA V FiveM roleplay server. This server was started on May 19, 2020`)
    .addFields(
		{ name: 'Founder:', value: `<@622736383248826389>`, inline: true },
		{ name: 'Developer:', value: `<@756403897735708722>`, inline: true },
        { name: 'Base:', value: `**FiveM**` , inline: true },)
    .setFooter({ text: '© AIVP Roleplay'});

	await interaction.reply({embeds:[about], ephemeral: true})
		return;
		}
	}