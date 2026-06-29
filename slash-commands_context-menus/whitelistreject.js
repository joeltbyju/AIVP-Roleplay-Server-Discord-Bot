const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const config = require('../config.json');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('whitelistreject')
		.setDescription('Reject whitelist application')
        .addUserOption(option => option.setName('user').setDescription('Select A User From AIVP').setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Reason of rejection')
                .setRequired(true)
                .addChoices(
                    { name: 'Invalid Steam ID', value: 'Invalid steam url. You must give proper a steam url to get whitelisted in server' },
                    { name: 'No Minimum Score', value: 'You must have atleast 50/70 in whitelist application. Kindly fill after reading server rules' },
                    { name: 'Other (Kindly type in others)', value: 'other' },
                ).setRequired(true))
                .addStringOption(option => option.setName('other').setDescription('Type reason if choose other')),

async execute(interaction) {
    if ((!interaction.member.roles.cache.has(config.aivpstaffrole))){
		interaction.reply(`<@${interaction.user.id}> You dont have permission exceute this command.`)
		return;
		}
const targetuser = interaction.options.getUser('user');
var reason = interaction.options.getString('reason');
if(reason === 'other'){
var reason = interaction.options.getString('other');
if(!reason) { interaction.reply({content: `You must provide a reason`, ephemeral: true}) 
return;
}}
const plr = interaction.guild.members.cache.get(targetuser.id) || await interaction.guild.members.fetch(targetuser.id).catch(err => {})
const rejectem = new EmbedBuilder()

.setDescription(`<@${plr.user.id}> **Your whitelist application has been rejected**`)
.addFields(
    { name: 'Rejection Reason:', value: reason},
    { name: 'Staff/Admin Name:', value: interaction.user.username})
.setFooter({ text: '© AIVP Roleplay' })
.setTimestamp();
interaction.channel.send({content:`<@${plr.user.id}> Your whitelist application has been rejected`,embeds: [rejectem]})
plr.send({content:`<@${plr.user.id}> Your whitelist application has been rejected`,embeds: [rejectem]}).catch(error => console.log(error))
interaction.reply({content: `Application has rejected`, ephemeral: true})
}
};

