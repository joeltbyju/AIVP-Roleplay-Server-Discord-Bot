const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, ModalBuilder, TextInputBuilder, TextInputStyle, ChannelType, PermissionsBitField, EmbedBuilder} = require('discord.js');
const config = require('../config.json');
module.exports = {
    name: "interactionCreate",
    async execute(interaction) {
     
  
if (interaction.customId === 'whitelistapplication') {
            const wlist = new ModalBuilder()
			.setCustomId('wlistmodal')
			.setTitle('Whitelist Application');
            const name = new TextInputBuilder()
			.setCustomId('name')
		    .setLabel("Whats your name (Real Name)")
            
            .setMaxLength(100)
		    .setStyle(TextInputStyle.Short);
            const dob = new TextInputBuilder()
			.setCustomId('dob')
            
            .setMaxLength(100)

			.setLabel("Enter your DOB")
		    .setStyle(TextInputStyle.Short);
            const steam = new TextInputBuilder()
			.setCustomId('steam')
            
            .setMaxLength(100)

			.setLabel("Enter your steam name")
		    .setStyle(TextInputStyle.Short)
            .setPlaceholder('Eg: https://steamcommunity.com/id/blackfalcon124/');
          
            const exp = new TextInputBuilder()
			.setCustomId('exp')
            
            .setMaxLength(100)
            .setPlaceholder('Eg: 12 Months')

			.setLabel("Your roleplay experiance (In months) ?")
		    .setStyle(TextInputStyle.Short);
            const cname = new TextInputBuilder()
			.setCustomId('cname')
            
            .setMaxLength(100)
            .setPlaceholder('Name of ingame character')
			.setLabel("What is your character name?")
		    .setStyle(TextInputStyle.Short);


		const first = new ActionRowBuilder().addComponents(name);
		const second = new ActionRowBuilder().addComponents(dob);
        const third = new ActionRowBuilder().addComponents(steam);
		const four = new ActionRowBuilder().addComponents(exp);
        const five = new ActionRowBuilder().addComponents(cname);
		


		wlist.addComponents(first, second, third, four, five);

		await interaction.showModal(wlist);
}
const notinguild = new EmbedBuilder()
.setAuthor({ name: 'AIVP Roleplay | Whitelist System', iconURL: 'https://imgur.com/mlmNVZe.png'})
.setColor('#8bf52f')
.setTitle(`Unable To Process Application`)
.setDescription('Bot is unable to process application this may due user is not in this server. For more details contact <@756403897735708722> <@&1031908543701450882>')
.setFooter({ text: '© AIVP Roleplay Server'});    
        
if (interaction.customId === 'wlistmodal') {
      var name = interaction.fields.getTextInputValue('name')
      var dob = interaction.fields.getTextInputValue('dob')
      var steam = interaction.fields.getTextInputValue('steam')
      var exp = interaction.fields.getTextInputValue('exp')
      var cname = interaction.fields.getTextInputValue('cname')

        
    const dm = new EmbedBuilder()
        .setAuthor({ name: 'AIVP Roleplay | Whitelist System', iconURL: 'https://imgur.com/mlmNVZe.png'})
        .setColor('#8bf52f')
        .setTitle(`Whitelist Application Submitted`)
        .setDescription('Your whitlist application has been submitted. Application status will be updated to both your DM and <#1042466254130257987> after reviewd by server staff.')
        .setFooter({ text: '© AIVP Roleplay Server'});
        time = parseInt( interaction.member.joinedTimestamp / 1000, 10);
        const servermessage = new EmbedBuilder()
        .setAuthor({ name: 'AIVP Roleplay | Whitelist Responds', iconURL: 'https://imgur.com/mlmNVZe.png'})
        .setColor('#ff6738')
        .setTitle(`${interaction.user.tag}'s Whitelist Application`)
        // .setDescription(`<@&1042466246584705058> <@&1042466246584705059> Kindly Check Whitelist Application Of <@${interaction.user.id}> ASAP.`)        
        .addFields(
            { name: '**Name **', value: name, inline: true },
            { name: '**Steam Name **', value: steam, inline: true },
            { name: '**DOB **', value: dob, inline: true },
            { name: '**RP Experince **', value: exp, inline: true },
            { name: '**Character Name **', value: cname, inline: true },
           { name: '**Discord ID **', value: '`'+interaction.user.id+'`', inline: true },
           { name: '**Discord Mention **', value: `<@${interaction.user.id}>`, inline: true },
           { name: '**AIVP Member Since**', value: `<t:${time}:d>`, inline: true },
           { name: '**Application Status**', value: `**Pending**`, inline: true }
        )
        .setFooter({ text: '© AIVP Roleplay Server'});

        const respondbutton = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('accept')
                .setLabel('Accept')
                .setStyle(ButtonStyle.Success)
               )
               .addComponents(
                new ButtonBuilder()
                    .setCustomId('reject')
                    .setLabel('Reject')
                    .setStyle(ButtonStyle.Danger)
            );
interaction.guild.channels.cache.get('1077220774483603526').send({content:'<@&821800762060570705> <@&719155863734059018> <@&1071348358721048627> <@&1031908543701450882>', embeds:[servermessage], components: [respondbutton]})
interaction.user.send({content: `<@${interaction.user.id}>`, embeds:[dm]}).catch(err => console.log(err))
await interaction.reply({content: `<@${interaction.user.id}>`, embeds:[dm], ephemeral: true})
}
        

if (interaction.customId === 'accept') {
    var id = interaction.message.embeds[0].data.fields[5].value.slice(1, -1)     

           const servermessageedit = new EmbedBuilder()
        .setAuthor({ name: 'AIVP Roleplay | Whitelist Responds', iconURL: 'https://imgur.com/mlmNVZe.png'})
        .setColor('#45f538')
        .setTitle(interaction.message.embeds[0].data.title)
               
        .addFields(
            { name: '**Name **', value: interaction.message.embeds[0].data.fields[0].value, inline: true },
            { name: '**Steam Name **', value: interaction.message.embeds[0].data.fields[1].value, inline: true },
            { name: '**DOB **', value: interaction.message.embeds[0].data.fields[2].value, inline: true },
            { name: '**RP Experince **', value: interaction.message.embeds[0].data.fields[3].value, inline: true },
            { name: '**Character Name **', value: interaction.message.embeds[0].data.fields[4].value, inline: true },
            { name: '**Discord ID **', value: interaction.message.embeds[0].data.fields[5].value, inline: true },
            { name: '**Discord Mention **', value: interaction.message.embeds[0].data.fields[6].value, inline: true },
            { name: '**AIVP Member Since**', value: interaction.message.embeds[0].data.fields[7].value, inline: true },
            { name: '**Application Status**', value: `**Accepted By <@${interaction.user.id}>**`, inline: true }
         )
         .setFooter({ text: '© AIVP Roleplay Server'});

         const respondbutton2 = new ActionRowBuilder()
         .addComponents(
             new ButtonBuilder()
                 .setCustomId('accepted')
                 .setLabel(`Accepted By ${interaction.user.username}`)
                 .setStyle(ButtonStyle.Success)
                 .setDisabled()
                )
const player = interaction.guild.members.cache.get(id) || await interaction.guild.members.fetch(id).catch(err => {})
if(player) {
const aivpacp = new EmbedBuilder()
.setAuthor({ name: 'AIVP Roleplay | Whitelist Responds', iconURL: 'https://imgur.com/mlmNVZe.png'})

.setDescription(`<@${id}> **Your whitelist application has been accepted. Welcome To AIVP Roleplay**`)
.addFields(
{ name: ' Notes', value:`Join <#${config.interviewwaitingvcid}> VC for interview and further procedure`},
{ name: 'Staff/Admin Name:', value: interaction.user.username})
.setFooter({ text: '© AIVP Roleplay' })
.setTimestamp();
player.send({content:`<@${id}> Your whitelist application has been accepted`,embeds: [aivpacp]}).catch(error => console.log(error))
player.roles.add(config.pendingrole).catch(error => console.log(error))
interaction.guild.channels.cache.get('782197505152647188').send({content:`<@${id}> Your whitelist application has been accepted`,embeds: [aivpacp]})
interaction.update({content:'<@&821800762060570705> <@&719155863734059018> <@&1071348358721048627> <@&1031908543701450882>', embeds:[servermessageedit], components: [respondbutton2]})
}
else
interaction.reply({content: `<@${interaction.user.id}>`, embeds:[notinguild], ephemeral: true})
}
if (interaction.customId === 'reject') {
    var id = interaction.message.embeds[0].data.fields[5].value.slice(1, -1)     

    const servermessageedit = new EmbedBuilder()
 .setAuthor({ name: 'AIVP Roleplay | Whitelist Responds', iconURL: 'https://imgur.com/mlmNVZe.png'})
 .setColor('#ff0000')
 .setTitle(interaction.message.embeds[0].data.title)
//  .setDescription(`Whitelist Application Of <@${id}> Was Rejected By <@${interaction.user.id}>`)        

 .addFields(
    { name: '**Name **', value: interaction.message.embeds[0].data.fields[0].value, inline: true },
    { name: '**Steam Name **', value: interaction.message.embeds[0].data.fields[1].value, inline: true },
    { name: '**DOB **', value: interaction.message.embeds[0].data.fields[2].value, inline: true },
    { name: '**RP Experince **', value: interaction.message.embeds[0].data.fields[3].value, inline: true },
    { name: '**Character Name **', value: interaction.message.embeds[0].data.fields[4].value, inline: true },
    { name: '**Discord ID **', value: interaction.message.embeds[0].data.fields[5].value, inline: true },
    { name: '**Discord Mention **', value: interaction.message.embeds[0].data.fields[6].value, inline: true },
    { name: '**AIVP Member Since**', value: interaction.message.embeds[0].data.fields[7].value, inline: true },
     { name: '**Application Status**', value: `**Rejected By <@${interaction.user.id}>**`, inline: true }
  )
  .setFooter({ text: '© AIVP Roleplay Server'});

  const respondbutton2 = new ActionRowBuilder()
  .addComponents(
      new ButtonBuilder()
          .setCustomId('rejected')
          .setLabel(`Rejected By ${interaction.user.username}`)
          .setStyle(ButtonStyle.Danger)
          .setDisabled()
         )
const player = interaction.guild.members.cache.get(id) || await interaction.guild.members.fetch(id).catch(err => {})
if(player){
const aivpacp = new EmbedBuilder()
.setAuthor({ name: 'AIVP Roleplay | Whitelist Responds', iconURL: 'https://imgur.com/mlmNVZe.png'})
.setDescription(`<@${player.user.id}> **Your whitelist application has been rejected. Kindly apply again.**`)
.addFields(
    { name: 'Rejection Reason:', value: 'Kindly join support vc for more details'},
    { name: 'Staff/Admin Name:', value: interaction.user.username})
.setFooter({ text: '© AIVP Roleplay' })
.setTimestamp();
player.send({content:`<@${id}> Your whitelist application has been rejected`,embeds: [aivpacp]}).catch(error => console.log(error))
interaction.guild.channels.cache.get('782197505152647188').send({content:`<@${id}> Your our whitelist application has been rejected`,embeds: [aivpacp]})
interaction.update({content:'<@&821800762060570705> <@&719155863734059018> <@&1071348358721048627> <@&1031908543701450882>', embeds:[servermessageedit], components: [respondbutton2]})
}
else
interaction.reply({content: `<@${interaction.user.id}>`, embeds:[notinguild], ephemeral: true})
}
}
}
