const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, ModalBuilder, TextInputBuilder, TextInputStyle, ChannelType, PermissionsBitField, EmbedBuilder} = require('discord.js');

module.exports = {
    name: "interactionCreate",
    async execute(interaction) {
     if (!interaction.isButton()) return;
     var banduedate = new Date();
   var time = Math.round((banduedate).getTime() / 1000);
		const srvbutton = new EmbedBuilder()
        .setAuthor({ name: 'AIVP-AIVP Roleplay | Server Status Update ', iconURL: 'https://imgur.com/mlmNVZe.png'})
        .setDescription(`Press the below button send server status update. **NB: Dont press unnecessarily this will send server status update.** `)
        .addFields(
             { name: 'Last Updated By', value: `<@${interaction.user.id}>`, inline: true },
             { name: 'Last Updated At', value: `<t:${time}:d>`, inline: true }
           )
        const statusbutton = new ActionRowBuilder()
           .addComponents(
               new ButtonBuilder()
                   .setCustomId('online')
                   .setLabel('Online')
                   .setStyle(ButtonStyle.Secondary)
                   .setEmoji('🟢'),
                   new ButtonBuilder()
                   .setCustomId('offline')
                   .setLabel('Offline')
                   .setStyle(ButtonStyle.Secondary)
                   .setEmoji('🔴'),
                   new ButtonBuilder()
                   .setCustomId('restart')
                   .setLabel('Server Restarted')
                   .setStyle(ButtonStyle.Secondary)
                   .setEmoji('⭕'),
                   new ButtonBuilder()
                   .setCustomId('maintenance')
                   .setLabel('Maintenance')
                   .setStyle(ButtonStyle.Secondary)
                   .setEmoji('🛠️'),
               
           );     
        if (interaction.customId === 'restart') {
const srvstatusmessage = new EmbedBuilder()
       .setAuthor({ name: 'AIVP Roleplay | Server Status Update', iconURL: 'https://imgur.com/mlmNVZe.png'})
	   .setColor('#23fa60')
	   .setTitle('<a:803453797699158016:1052914955093037117> Server Restarted')
	   .setDescription(`**Server has been restarted.** You can now connect to server. Enjoy best roleplay experience`)
	   .addFields(
		{ name: '**Connect Link**', value: 'https://cfx.re/join/8z8bem', inline: true },
		)
        interaction.update({ embeds: [srvbutton], components: [statusbutton]}).catch(err => console.log(err))
	interaction.guild.channels.cache.get('1052930184967356437').send({content:'<@&782208859988295690>' ,embeds:[srvstatusmessage]}).then(msg => msg.react('<a:Verify1:1040197170042777650>')).catch(err => console.log(err))
       // await interaction.reply({content:`Server status send`, ephemeral: true}).catch(err => console.log(err))
        }
        if (interaction.customId === 'online') {
        
    const srvstatusmessage = new EmbedBuilder()
        .setAuthor({ name: 'AIVP Roleplay | Server Status Update', iconURL: 'https://imgur.com/mlmNVZe.png'})
        .setColor('#1efa22')
        .setTitle('<a:803453797699158016:1052914955093037117> Server Is Online')
        .setDescription(`**Server is now online.** You can now connect to server. Enjoy best roleplay experience`)
        .addFields(
           { name: '**Connect Link**', value: 'https://cfx.re/join/8z8bem', inline: true },
        )
        interaction.update({ embeds: [srvbutton], components: [statusbutton]}).catch(err => console.log(err))
        interaction.guild.channels.cache.get('1052930184967356437').send({content:'<@&782208859988295690>' ,embeds:[srvstatusmessage]}).then(msg => msg.react('<a:Verify1:1040197170042777650>')).catch(err => console.log(err))
       // await interaction.reply({content:`Server status send`, ephemeral: true}).catch(err => console.log(err))
        }
        if (interaction.customId === 'offline') {
            const srvstatusmessage = new EmbedBuilder()
            .setAuthor({ name: 'AIVP Roleplay | Server Status Update', iconURL: 'https://imgur.com/mlmNVZe.png'})
            .setColor('#fc0f0f')
            .setTitle('<a:verifiedred:1040197641570615296> Server Is Offline')
            .setDescription(`**Server is now offline.** You cant connect to server. Kindly wait until server becomes online`)
            interaction.update({ embeds: [srvbutton], components: [statusbutton]}).catch(err => console.log(err))
            interaction.guild.channels.cache.get('1052930184967356437').send({content:'<@&782208859988295690>' ,embeds:[srvstatusmessage]}).then(msg => msg.react('<a:Verify1:1040197170042777650>')).catch(err => console.log(err))
          //  await interaction.reply({content:`Server status send`, ephemeral: true}).catch(err => console.log(err))
        }
        if (interaction.customId === 'maintenance') {
            const srvstatusmessage = new EmbedBuilder()
            .setAuthor({ name: 'AIVP Roleplay | Server Status Update', iconURL: 'https://imgur.com/mlmNVZe.png'})
            .setColor('#fcc50f')
            .setTitle('<a:29e308d7b4a245bbb6901eeee24ad645:724518983344324640> Server undergoing maintenance')
            .setDescription(`**Server undergoing maintenance.** Dont connect to server. Server will not be responsible for issues caused for you`)
            interaction.update({ embeds: [srvbutton], components: [statusbutton]}).catch(err => console.log(err))
            interaction.guild.channels.cache.get('1052930184967356437').send({content:'<@&782208859988295690>' ,embeds:[srvstatusmessage]}).then(msg => msg.react('<a:Verify1:1040197170042777650>')).catch(err => console.log(err))
           // await interaction.reply({content:`Server status send`, ephemeral: true}).catch(err => console.log(err))
        }





        }


    }
