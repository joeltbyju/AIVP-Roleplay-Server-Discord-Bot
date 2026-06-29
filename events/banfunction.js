const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle, ChannelType, PermissionsBitField, EmbedBuilder} = require('discord.js');
const config = require('../config.json');
const fs = require('fs');
module.exports = {
    name: "interactionCreate",
   async execute(interaction, client, Commands) {
if (!interaction.isModalSubmit()) return;
if(interaction.customId == 'banplayer'){
    const bandays = interaction.fields.getTextInputValue('days');
	const banreason = interaction.fields.getTextInputValue('reason');
    const banplayerid = interaction.fields.getTextInputValue('plrid');
    const bandateint = parseInt(bandays);
    const banplayer = interaction.guild.members.cache.get(banplayerid) || await interaction.guild.members.fetch(banplayerid).catch(err => {})
    var bandate = new Date();
    var banduedate = new Date();
    banduedate.setDate(banduedate.getDate() + bandateint);
    
   
    var time = Math.round((banduedate).getTime() / 1000);
    if (!(bandays >= 0)) { interaction.reply({content: `Failed to Ban Player **No of Days Is Invalid**`, ephemeral: true}) 
    return;}
    
    let bandb = JSON.parse(fs.readFileSync("././JSON-Database/bandata.json", "utf8"));
    const inban = bandb.find(x => x.id === banplayer.user.id);
  if (inban) {
       interaction.reply({
            content: `**<@${banplayer.user.id}> is  already has banned from server. Cannot ban now. Use /forceunbanrp to unban.**`,ephemeral: true
        })
return;
    }
    let banrefnodb = JSON.parse(fs.readFileSync("././JSON-Database/ticketrefno.json", "utf8"));
    const refno = banrefnodb.find(x => x.type === 'banrefno');
    newrf = refno.refno+1
    index = banrefnodb.indexOf(refno)
    banrefnodb[index] = {
      type: "banrefno",
      refno: newrf
    }
    var Final = JSON.stringify(banrefnodb, null, 2);
  
    fs.writeFile("././JSON-Database/ticketrefno.json", Final, "utf8", err => {
        if (err) {
            console.log(err)
        }})
 
    const ban = new EmbedBuilder()
	.setColor('#ff0000')
    .setTitle('Player Banned From Server')
    .setDescription(`<@${banplayer.user.id}> ${banplayer.user.tag} Has been banned from server. **Ban Referance No:** ${newrf}`)
    .addFields(
		{ name: 'Ban Reason:', value: banreason, inline: true },
		{ name: 'Rejoin Date:', value: `<t:${time}:d>`, inline: true },
        { name: 'Banned By:', value: `<@${interaction.user.id}>` , inline: true },)
    .setTimestamp()
    .setFooter({ text: '© AIVP Roleplay'});
    const Banned = {
        id: banplayer.user.id,
        banrevokedate: banduedate,
        bandate: bandate,
        reason: banreason,
        refno: newrf,
        banplayerdetails: `${banplayer.user.tag} (${banplayer.user.id})`,
        admindetails: `${interaction.user.tag} (${interaction.user.id})`
    }

    fs.readFile("././JSON-Database/bandata.json", 'utf8', function (err, data) {
        var obj = JSON.parse(data)
        obj.push(Banned)
        var Final = JSON.stringify(obj, null, 2);

        fs.writeFile("././JSON-Database/bandata.json", Final, "utf8", err => {
            if (err) {
                console.log(err)
            }
        })
    })
    banplayer.roles.remove(config.whitelistrole).catch(err => console.log(err))
    banplayer.roles.add(config.banrole).catch(err => console.log(err))
   interaction.guild.channels.cache.get(config.banchannel).send({content: `<@&${config.whitelistrole}> <@${banplayer.user.id}> Has been banned from server.`,embeds: [ban]})

   interaction.reply({content: `<@${banplayer.user.id}> Has been banned from server.`, ephemeral: true}) 
   }}
}

 