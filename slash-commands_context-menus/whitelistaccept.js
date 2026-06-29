const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const config = require('../config.json');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('whitelistaccept')
		.setDescription('Accept whitelist application')
        .addUserOption(option => option.setName('user').setDescription('Select A User From AIVP').setRequired(true)),
        

async execute(interaction) {
	if ((!interaction.member.roles.cache.has(config.aivpstaffrole))){
		interaction.reply(`<@${interaction.user.id}> You dont have permission exceute this command.`)
		return;
		}
const targetuser = interaction.options.getUser('user');
const plr = interaction.guild.members.cache.get(targetuser.id) || await interaction.guild.members.fetch(targetuser.id).catch(err => {})
const aivpacp = new EmbedBuilder()
.setDescription(`<@${plr.user.id}> **Your whitelist application has been accepted. Welcome To AIVP Roleplay**`)
.addFields(
{ name: ' Notes', value:`Join <#${config.interviewwaitingvcid}> VC for interview and further procedure`},
{ name: 'Staff/Admin Name:', value: interaction.user.username})
.setFooter({ text: '© AIVP Roleplay' })
.setTimestamp();
interaction.channel.send({content:`<@${plr.user.id}> Your whitelist application has been accepted`,embeds: [aivpacp]})
plr.send({content:`<@${plr.user.id}> Your whitelist application has been accepted`,embeds: [aivpacp]}).catch(error => console.log(error))
plr.roles.add(config.pendingrole).catch(error => console.log(error))
interaction.reply({content: `Application has accepted`, ephemeral: true})
}
};

