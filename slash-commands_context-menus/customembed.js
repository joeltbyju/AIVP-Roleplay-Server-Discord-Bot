const { EmbedBuilder, SlashCommandBuilder} = require('discord.js');
const config = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('customembed')
		.setDescription('support Button Push (Admin command).')
        .addBooleanOption(option => option.setName('mention').setDescription('Mention Whitelisted').setRequired(true))
        .addBooleanOption(option => option.setName('timestamp').setDescription('Timestamp').setRequired(true))
        .addStringOption(option => option.setName('color').setDescription('Enter Color Must Be Hex (Optional)'))
        .addStringOption(option => option.setName('title').setDescription('Enter Title (Optional)'))
        .addStringOption(option => option.setName('description').setDescription('Enter Description (Optional)'))
        .addStringOption(option => option.setName('image').setDescription('Enter Image Url (Optional)'))
        .addStringOption(option => option.setName('thumbnail').setDescription('Enter Image Url (Optional)'))
        .addStringOption(option => option.setName('footer').setDescription('Enter A Message (Optional)')),
        
     
     
async execute(interaction) {
    var error = false
const mention = interaction.options.getBoolean('mention')
const timestamp = interaction.options.getBoolean('timestamp')
const color = interaction.options.getString('color');
const title = interaction.options.getString('title');
const description = interaction.options.getString('description');
const image = interaction.options.getString('image');
const thumbnail = interaction.options.getString('thumbnail');
const footer = interaction.options.getString('footer');
const customembed = new EmbedBuilder()
if(color)  if (/^#[0-9A-F]{6}$/i.test(color)) customembed.setColor(color);
else return interaction.reply({ content: "Color is invalid. Provide a hex value (example: #ff22cc)", ephemeral: true });
if(title) customembed.setTitle(title)
if(description) customembed.setDescription(description)
if(image)   if (/^(http[s]?:\/\/.*\.(?:png|jpg|gif|jpeg))/i.test(image)) customembed.setImage(image)
else return interaction.reply({ content: "Image link seems to be invalid", ephemeral: true });
if(thumbnail)  if (/^(http[s]?:\/\/.*\.(?:png|jpg|gif|jpeg))/i.test(thumbnail)) customembed.setThumbnail(thumbnail)
else return interaction.reply({ content: "Thumbnail link seems to be invalid", ephemeral: true });
if(footer) customembed.setFooter({ text: footer});
if(timestamp) customembed.setTimestamp()

		
					
	
				
		
		
if(!mention) await interaction.channel.send({embeds: [customembed]}).catch(error => {if(error) error = true })
else await interaction.channel.send({content:`<@&${config.whitelistrole}>`, embeds: [customembed]}).catch(error => {if(error) error = true })

 interaction.reply({content: `Custom embed send`, ephemeral: true})
}
};
