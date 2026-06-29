const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const config = require('../config.json');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('dmuser')
		.setDescription('Send direct message to a uesr with file option')
        .addUserOption(option => option.setName('user').setDescription('Select A User From AIVP').setRequired(true))
        .addStringOption(option => option.setName('msg').setDescription('Enter A Message').setRequired(true))
        .addAttachmentOption(option => option.setName('file').setDescription('Select A File To Upload')),
async execute(interaction) {
    if ((!interaction.member.roles.cache.has(config.aivpserveradminrole))){
		interaction.reply(`<@${interaction.user.id}> You dont have permission exceute this command.`)
		return;
		}
const targetuser = interaction.options.getUser('user');
const msg = interaction.options.getString('msg');
const attach = interaction.options.getAttachment('file');
const plr = interaction.guild.members.cache.get(targetuser.id) || await interaction.guild.members.fetch(targetuser.id).catch(err => {})
messsent = false
const dmcontent = new EmbedBuilder()
.setAuthor({ name: `Message Sent By: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL()})
.setColor('#b8ff14')
.setTitle('AIVP User DM')
.setDescription(`**Message Content:**   ${msg}`)
.setFooter({ text: '© AIVP Roleplay' });
if(!attach){ plr.send({content:`<@${plr.user.id}>`,embeds: [dmcontent]}).catch(error => {
    if(error){
    interaction.reply({content: `Failed to send message **User blocked DM**`, ephemeral: true})
	messsent = true
}
});}
else {
    plr.send({content:`<@${plr.user.id}>`,embeds: [dmcontent], files: [attach]}).catch(error => {
        if(error){
        interaction.reply({content: `Failed to send message **User blocked DM**`, ephemeral: true})
        messsent = true
    }
    });
}
function reply(){
if(!messsent) interaction.reply({content: `Direct message has been sent to user`, ephemeral: true})
}
setTimeout(reply, 2000)
}
};

