const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, ModalBuilder, TextInputBuilder, TextInputStyle, EmbedBuilder, ChannelType, PermissionsBitField, GuildEmoji } = require('discord.js');
const config = require('../config.json');
const fs = require('fs');

module.exports = {
    name: "interactionCreate",
    async execute(interaction, client, Commands) {
        var date = new Date();
   var time = Math.round((date).getTime() / 1000);
        if (!interaction.isButton()) return;

        if (interaction.customId == 'supportticket') {
            interaction.guild.channels.create({
                name: `❗support ${interaction.user.username}` ,
                type: ChannelType.GuildText,
                topic:  `support ticket of  ${interaction.user.username}`,
            parent: config.supportparentid,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionsBitField.Flags.ViewChannel],
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.UseApplicationCommands,PermissionsBitField.Flags.AttachFiles],
                },
                {
                    id: config.aivpstaffrole,
                    allow: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.UseApplicationCommands,PermissionsBitField.Flags.AttachFiles],
                },
            ]
            
        
            }).then((channel) => {
                var today  = new Date();
               let refnodb = JSON.parse(fs.readFileSync("././JSON-Database/ticketrefno.json", "utf8"));
                const ref = refnodb.find(x => x.type === 'support');
                newrf = ref.refno+1
                index = refnodb.indexOf(ref)
                refnodb[index] = {
                  type: "support",
                  refno: newrf
                }
                var Final = JSON.stringify(refnodb, null, 2);
              
                fs.writeFile("././JSON-Database/ticketrefno.json", Final, "utf8", err => {
                    if (err) {
                        console.log(err)
                    }})
                    const Banned = {
                        channelid: channel.id,
                        ticketauthorid: interaction.user.id,
                        claimstatus: false,
                        claimedby: '',
                        datetime: today.toLocaleString("en-US"),
                        ticketrefno: newrf
                    
                        
                    }
    
                    fs.readFile("././JSON-Database/ticketdata.json", 'utf8', function (err, data) {
                        var obj = JSON.parse(data)
                        obj.push(Banned)
                        var Final = JSON.stringify(obj, null, 2);
    
                        fs.writeFile("././JSON-Database/ticketdata.json", Final, "utf8", err => {
                            if (err) {
                                console.log(err)
                            }
                        })
                    })
        
                const supportjoin = new EmbedBuilder()
        .setColor('#b8ff14')
        .setAuthor({ name: 'AIVP Roleplay | Support System', iconURL: 'https://imgur.com/mlmNVZe.png'})
        .setDescription(`Welcome <@${interaction.user.id}> to AIVP Support. Please describe you issue briefly. Our staff will be with you soon. **Support may delayed during rp hours**\n\n**Ticket Reference No**: ${newrf}`)
        .setTimestamp()
        .setFooter({ text: '© AIVP Roleplay' });
        const supportembuttons = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('claim')
                .setLabel('Claim Ticket')
                .setEmoji('🔒')
                .setStyle(ButtonStyle.Secondary),
                
                new ButtonBuilder()
                .setCustomId('close')
                .setLabel('Close Ticket')
                .setEmoji('❌')
                .setStyle(ButtonStyle.Secondary),
            
            

        );
        channel.send({content: `<@${interaction.user.id}>`, embeds: [supportjoin], components:[supportembuttons]})
        interaction.reply({content:`Support channel <#${channel.id}> has been created.`, ephemeral: true})
               })
        }
        if (interaction.customId == 'claim') {
            if ((!interaction.member.roles.cache.has(config.aivpstaffrole)))  interaction.reply({content:`Only server staffs are allowed to do`, ephemeral: true})
            else{
            const supportembuttons2 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('unclaim')
                .setLabel('Transfer Ticket')
                .setEmoji('🔒')
                .setStyle(ButtonStyle.Secondary),
                
                new ButtonBuilder()
                .setCustomId('close')
                .setLabel('Close Ticket')
                .setEmoji('❌')
                .setStyle(ButtonStyle.Secondary),
            
            

        );
        let tickedb = JSON.parse(fs.readFileSync("././JSON-Database/ticketdata.json", "utf8"));
                const ref = tickedb.find(x => x.channelid === interaction.channel.id);
                 index = tickedb.indexOf(ref)
                tickedb[index] = {
                    channelid: ref.channelid,
                    ticketauthorid: ref.ticketauthorid,
                    claimstatus: true,
                    claimedby: interaction.user.id,
                    datetime: ref.datetime,
                    ticketrefno: ref.ticketrefno
                }
                var Final = JSON.stringify(tickedb, null, 2);
              
                fs.writeFile("././JSON-Database/ticketdata.json", Final, "utf8", err => {
                    if (err) {
                        console.log(err)
                    }})
                 const chnl = interaction.guild.channels.cache.get(interaction.channel.id)
                   chnl.permissionOverwrites.set([
                    {
                        id: interaction.guild.id,
                        deny: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.UseApplicationCommands,PermissionsBitField.Flags.AttachFiles],
                    },
                    {
                        id: ref.ticketauthorid,
                        allow: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.UseApplicationCommands,PermissionsBitField.Flags.AttachFiles],
                    },
                    {
                        id: interaction.user.id,
                        allow: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.UseApplicationCommands,PermissionsBitField.Flags.AttachFiles],
                    },
                    {
                        id: config.aivpstaffrole,
                        deny: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.UseApplicationCommands,PermissionsBitField.Flags.AttachFiles],
                    },
                ]);
                  
        interaction.update({components:[supportembuttons2]}).catch(err => console.log(err))
        const claim = new EmbedBuilder()
         .setTitle('Ticket Claimed')
         .setColor('#4bf542')
	     .setAuthor({ name: 'AIVP Roleplay | Support System', iconURL: 'https://imgur.com/mlmNVZe.png'})
         .setDescription(`**Ticket Claimed:** You will be now assisted by <@${interaction.user.id}>`)
         interaction.channel.send({embeds:[claim]})
                }
        }
        
        if (interaction.customId == 'unclaim') {
            if ((!interaction.member.roles.cache.has(config.aivpstaffrole)))  interaction.reply({content:`Only server staffs are allowed to do`, ephemeral: true})

            else{
            const supportembuttons3 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('claim')
                .setLabel('Claim Ticket')
                .setEmoji('🔒')
                .setStyle(ButtonStyle.Secondary),
                
                new ButtonBuilder()
                .setCustomId('close')
                .setLabel('Close Ticket')
                .setEmoji('❌')
                .setStyle(ButtonStyle.Secondary),
            
            

        );
        let tickedb = JSON.parse(fs.readFileSync("././JSON-Database/ticketdata.json", "utf8"));
        const ref = tickedb.find(x => x.channelid === interaction.channel.id);
        if(ref.claimedby != interaction.user.id){ interaction.reply({content: "You Cannot Transfer",ephemeral: true}); 
        return;
        }
         index = tickedb.indexOf(ref)
        tickedb[index] = {
            channelid: ref.channelid,
            ticketauthorid: ref.ticketauthorid,
            claimstatus: false,
            claimedby: '',
            datetime: ref.datetime,
            ticketrefno: ref.ticketrefno
        }
        var Final = JSON.stringify(tickedb, null, 2);
      
        fs.writeFile("././JSON-Database/ticketdata.json", Final, "utf8", err => {
            if (err) {
                console.log(err)
            }})
         const chnl = interaction.guild.channels.cache.get(interaction.channel.id)
            chnl.permissionOverwrites.set([
                    {
                        id: interaction.guild.id,
                        deny: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.UseApplicationCommands,PermissionsBitField.Flags.AttachFiles],
                    },
                    {
                        id: ref.ticketauthorid,
                        allow: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.UseApplicationCommands,PermissionsBitField.Flags.AttachFiles],
                    },
                    {
                        id: config.aivpstaffrole,
                        allow: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.UseApplicationCommands,PermissionsBitField.Flags.AttachFiles],
                    },
                ]);
          interaction.update({components:[supportembuttons3]}).catch(err => console.log(err))
          const unclaim = new EmbedBuilder()
          .setColor('#f5d742')
          .setTitle('Transfering Ticket')
          .setAuthor({ name: 'AIVP Roleplay | Support System', iconURL: 'https://imgur.com/mlmNVZe.png'})
          .setDescription(`**Transfering Ticket** This ticket can be claimed again by using claim button`)
          interaction.channel.send({embeds:[unclaim]})
        }
}
if (interaction.customId == 'close') {
    if ((!interaction.member.roles.cache.has(config.aivpstaffrole)))  interaction.reply({content:`Only server staffs are allowed to do`, ephemeral: true})
    else{
    let tickedb = JSON.parse(fs.readFileSync("././JSON-Database/ticketdata.json", "utf8"));
    const ref = tickedb.find(x => x.channelid === interaction.channel.id);
    const closelog = new EmbedBuilder()
    .setColor('#e60000')
    .setTitle('Ticket Closed')
    .setAuthor({ name: 'AIVP Roleplay | Support System', iconURL: 'https://imgur.com/mlmNVZe.png'})
    .setDescription(`**${interaction.user.username}** Has closed a support ticket. Ticket details are given below`)
    .addFields(
        { name: 'Ticket Author:', value: `<@${ref.ticketauthorid}>`, inline: true },
        { name: 'Closed By:', value: `<@${interaction.user.id}>`, inline: true },
        { name: 'Ticket Referance No:', value: ref.ticketrefno.toString(), inline: true }
      )

    const closedm = new EmbedBuilder()
    .setColor('#e60000')
    .setTitle('Your support ticket was closed')
    .setAuthor({ name: 'AIVP Roleplay | Support System', iconURL: 'https://imgur.com/mlmNVZe.png'})
    .setDescription(`<@${ref.ticketauthorid}> Your support ticket at AIVP roleplay was closed. Hope your issue is solved`)
    .addFields(
    { name: 'Ticket Closed By:', value: `**${interaction.user.username}**`, inline: true },
    { name: 'Ticket Referance No:', value: ref.ticketrefno.toString(), inline: true },
    { name: 'Time:', value:`<t:${time}:d>`, inline: true }
      )
interaction.guild.channels.cache.get(config.supportlog).send({embeds: [closelog]})
let player = interaction.guild.members.cache.get(ref.ticketauthorid)|| interaction.guild.members.fetch(ref.ticketauthorid).catch(err => {})
let ticketdb = JSON.parse(fs.readFileSync("././JSON-Database/ticketdata.json", "utf8"));
const rem = ticketdb.find(x => x.channelid == interaction.channel.id);
let value = ticketdb.indexOf(rem);
delete ticketdb[value]
var filtered = ticketdb.filter(el => {
    return el != null && el != "";
  });
 ticketdb2 = filtered;


fs.writeFile("././JSON-Database/ticketdata.json", JSON.stringify(ticketdb2, null, 2), err => {
  if (err) console.log(err);
});
player.send({embeds: [closedm]})
interaction.channel.delete()

}
           }       }}
    