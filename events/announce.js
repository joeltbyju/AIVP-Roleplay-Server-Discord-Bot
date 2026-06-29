const {EmbedBuilder, SlashCommandBuilder} = require('discord.js');

const config = require('../config.json');
module.exports = {
	
  data: new SlashCommandBuilder()
	.setName('discordannounce')
	.setDescription('Send Announcement')
    .addStringOption(option => option.setName('title').setDescription('Enter A Title').setRequired(true))
    .addStringOption(option => option.setName('annoncement').setDescription('Enter The Annoucement').setRequired(true)),
	
execute(interaction) {
if ((!interaction.member.roles.cache.has(config.aivpserveradminrole))){
    interaction.reply(`<@${interaction.user.id}> You dont have permission exceute this command.`)
    return;
    }
const title = interaction.options.getString('title');
const mess = interaction.options.getString('annoncement')
var sdmess = (`__**${title}**__ \n\n${mess} \n||<@&${config.whitelistrole}>||`)
interaction.guild.channels.cache.get('705762816036175902').send(sdmess).then(msg => msg.react('<a:Verify1:1040197170042777650>'))
interaction.reply({content: `Discord announcement send`, ephemeral: true}) 
}
		
		







		

	



  
};


// 
		
// 	