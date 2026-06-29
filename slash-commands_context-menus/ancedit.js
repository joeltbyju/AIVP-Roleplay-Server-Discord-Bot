const {EmbedBuilder, SlashCommandBuilder} = require('discord.js');

const config = require('../config.json');
module.exports = {
	
  data: new SlashCommandBuilder()
	.setName('discordannounceedit')
	.setDescription('Edit Announcement')
    .addStringOption(option => option.setName('title').setDescription('Enter A Title').setRequired(true))
    .addStringOption(option => option.setName('annoncement').setDescription('Enter The Annoucement').setRequired(true))
    .addStringOption(option => option.setName('id').setDescription('Enter The Message ID').setRequired(true)),
	
execute(interaction) {
if ((!interaction.member.roles.cache.has(config.aivpserveradminrole))){
    interaction.reply(`<@${interaction.user.id}> You dont have permission exceute this command.`)
    return;
    }
const id = interaction.options.getString('id');

const title = interaction.options.getString('title');
const mess = interaction.options.getString('annoncement')
var sdmess = (`__**${title}**__ \n\n${mess} \n||<@&${config.whitelistrole}>||`)
interaction.guild.channels.cache.get('705762816036175902').messages.fetch(id).then(message => message.edit(sdmess)).catch(err => console.log(err))

interaction.reply({content: `Updated Announcement`, ephemeral: true}) 
}
		
		


}