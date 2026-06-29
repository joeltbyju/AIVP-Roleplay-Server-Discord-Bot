const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');
const whitelistplrfun = require('../events/whitelistfunction.js');
const config = require('../config.json');
module.exports = {
	data: new ContextMenuCommandBuilder()
		.setName('Whitelist')
		.setType(ApplicationCommandType.User),
    async execute(interaction) {
	const player = interaction.guild.members.cache.get(interaction.targetUser.id) || await interaction.guild.members.fetch(interaction.targetUser.id).catch(err => {})
	if (!interaction.member.roles.cache.has(config.aivpstaffrole))
		interaction.reply(`<@${interaction.user.id}> You dont have permission to whitelist a player.`)
		else { 
		interaction.reply({content: 'Player Whitelisted', ephemeral: true})	
		interaction.guild.channels.cache.get(config.whitelistchnl).send({content: `Congratulations <@${player.user.id}> on getting your Roleplay Pass. Enjoy the Roleplay Experience!'`,  files: [(await whitelistplrfun(player)).attachment] });
		player.roles.remove(config.pendingrole)
		player.roles.add(config.whitelistrole)
}
}
};

