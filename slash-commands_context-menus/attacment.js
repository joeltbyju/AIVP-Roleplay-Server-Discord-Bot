const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const config = require('../config.json');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('uploadfile')
		.setDescription('Upload a file with text')
        .addAttachmentOption(option => option.setName('file').setDescription('Select A File To Upload').setRequired(true))
        .addStringOption(option => option.setName('msg').setDescription('Enter A Message (Optional)')),
async execute(interaction) {
	if ((!interaction.member.roles.cache.has(config.aivpserveradminrole))){
		interaction.reply(`<@${interaction.user.id}> You dont have permission exceute this command.`)
		return;
		}
const msg = interaction.options.getString('msg');
const attach = interaction.options.getAttachment('file');
if(!msg) interaction.channel.send({files: [attach]}) 
else interaction.channel.send({content: msg, files: [attach]})
await interaction.reply({content:`File Uploaded`, ephemeral: true})
}}