const {EmbedBuilder, SlashCommandBuilder} = require('discord.js');

const config = require('../config.json');
module.exports = {
	
  data: new SlashCommandBuilder()
	.setName('patchnotes')
	.setDescription('Send Patch Notes')
    .addStringOption(option => option.setName('title').setDescription('Enter A Title (Optional)').setRequired(true))
    .addStringOption(option => option.setName('note').setDescription('Enter Patch Notes').setRequired(true)),
	
execute(interaction) {
if ((!interaction.member.roles.cache.has(config.aivpserveradminrole))){
    interaction.reply(`<@${interaction.user.id}> You dont have permission exceute this command.`)
    return;
    }
const title = interaction.options.getString('title');
const note = interaction.options.getString('note');

const patchnotes = new EmbedBuilder()
.setAuthor({ name: 'AIVP Roleplay | Patch & Update Notes ', iconURL: 'https://imgur.com/mlmNVZe.png'})
.setColor('#b8ff14')
    
if(title) patchnotes.setTitle(title)
if(note)  patchnotes.setDescription('```'+note+'```')
		
		
		
interaction.channel.send({embeds:[patchnotes]})
		
		
		
	}
		
		







		

	



  
};


// 
		
// 	