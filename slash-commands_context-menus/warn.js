const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const config = require('../config.json');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('warn')
		.setDescription('Warn a')
        .addUserOption(option => option.setName('user').setDescription('Select A User From AIVP').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Warn Reason').setRequired(true)),
   
        async execute(interaction) {
    if ((!interaction.member.roles.cache.has(config.aivpserveradminrole))){
		interaction.reply(`<@${interaction.user.id}> You dont have permission exceute this command.`)
		return;
		}
const targetuser = interaction.options.getUser('user');
const warnres = interaction.options.getString('reason');
const warn = new EmbedBuilder()
.setColor('#f5ec42')
.setTitle('Player Warned From Server')
.setDescription(`<@${targetuser.id}> ${targetuser.tag} Has been warned from server. **Warn Details**`)
.addFields(
    { name: 'Warn Reason:', value: warnres, inline: true },
    { name: 'Warned By:', value: `<@${interaction.user.id}>` , inline: true },)
.setTimestamp()
.setFooter({ text: '© AIVP Roleplay'});
interaction.channel.send({content: `<@&${config.whitelistrole}> <@${targetuser.id}> Has been warned from server.`,embeds: [warn]})

interaction.reply({content: `<@${targetuser.id}> Has been warned from server.`, ephemeral: true}) 

}
};

