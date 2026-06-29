const { ContextMenuCommandBuilder, ApplicationCommandType,ActionRowBuilder, Events, ModalBuilder,  TextInputBuilder, TextInputStyle } = require('discord.js');
const whitelistplrfun = require('../events/whitelistfunction.js');
const config = require('../config.json');
module.exports = {
	data: new ContextMenuCommandBuilder()
		.setName('Ban RP')
		.setType(ApplicationCommandType.User),
    async execute(interaction) {
	const player = interaction.guild.members.cache.get(interaction.targetUser.id) || await interaction.guild.members.fetch(interaction.targetUser.id).catch(err => {})
	if ((!interaction.member.roles.cache.has(config.aivpserveradminrole)))
		interaction.reply(`<@${interaction.user.id}> You dont have permission to ban a player.`)
		else { 
            const Ban = new ModalBuilder()
			.setCustomId('banplayer')
			.setTitle('Ban Player');
const days = new TextInputBuilder()
			.setCustomId('days')
		    .setLabel("How much days?")
		    .setStyle(TextInputStyle.Short)
			.setPlaceholder('Enter no as integer')
            .setRequired(true);
const reason = new TextInputBuilder()
			.setCustomId('reason')
			.setLabel("What is the ban reason?")
		    .setStyle(TextInputStyle.Paragraph)
			.setMaxLength(300)
            .setRequired(true);
const plrid = new TextInputBuilder()
			.setCustomId('plrid')
			.setLabel("Player ID (Auto Fill Dont Change)")
		    .setStyle(TextInputStyle.Short)
			.setValue(player.user.id)
            .setRequired(true);
const bandays = new ActionRowBuilder().addComponents(days);
const banreason = new ActionRowBuilder().addComponents(reason);
const playerid = new ActionRowBuilder().addComponents(plrid);

		// Add inputs to the modal
		Ban.addComponents(bandays, banreason, playerid);

		// Show the modal to the user
		await interaction.showModal(Ban);

        







}
}
};

