const { AttachmentBuilder, SlashCommandBuilder, Attachment } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { GlobalFonts } = require('@napi-rs/canvas');
const config = require('../config.json');
const Canvas  = require('@napi-rs/canvas');
const stringnormilize = require('normalize-strings');
module.exports = {
    name: "guildMemberAdd",
   async execute(member) {
    let name = member.user.username;
    let playername = stringnormilize(name)
    let playernamecaps = playername.toUpperCase()
    var firstName = playernamecaps.split(' ').slice(0, 1).join(' ');
    var lastName = playernamecaps.split(' ').slice(1).join(' ');
    GlobalFonts.registerFromPath('././assets/Gilroy-ExtraBold.ttf', 'Gilroy-ExtraBold')
const canvas = Canvas.createCanvas(1573, 740);
const context = canvas.getContext('2d');
const background = await Canvas.loadImage('././assets/aivpwel.png');
context.drawImage(background, 0, 0, canvas.width, canvas.height);
    GlobalFonts.registerFromPath('././assets/Gilroy-ExtraBold.ttf', 'Gilroy-ExtraBold')
context.font = '60px Gilroy-ExtraBold';
context.fillStyle = '#ffffff';
if(!(playernamecaps.length > 13)){
  context.fillText(firstName+" "+lastName, 1049, 377)

}
else{
context.fillText(firstName, 1049, 377)
context.fillText(lastName, 1049, 452)
}
const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
context.drawImage(avatar, 723, 203, 284, 336)
const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'welcome.png' });
const welcomeembd = new EmbedBuilder()
	.setColor('#b8ff14')
	.setTitle('Welcome To AIVP')
	.setDescription(`● Welcome ${member.user.username} To **AIVP Roleplay Server**\n ● Kindly Read Discord Rules Before Get Verfied\n● Get Verified <#712167352279498792>`)
  .setImage('attachment://welcome.png');
member.guild.channels.cache.get(config.welcomechnl).send({content: `Welcome <@${member.user.id}> To AIVP Roleplay Server. Thank You For Being Part Of AIVP Community`, embeds: [welcomeembd],  files: [attachment] }).catch(err => console.log(err))
  // awamember.user.send({content: `Welcome <@${member.user.id}> To AIVP Roleplay Server. Thank You For Being Part Of AIVP Community`, embeds: [welcomeembd],  files: [attachment] });
    


       }
    }