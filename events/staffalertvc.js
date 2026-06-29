const config = require('../config.json');
const { EmbedBuilder } = require('discord.js');
const { RESTJSONErrorCodes } = require('discord.js');
const sentboterr = require('./errorreport.js');
module.exports = {
    name: "voiceStateUpdate",
    async execute(oldUser, newUser) {
 
        const channel1 = newUser.channel
        const channel2 = oldUser.channel
        const logchnl = newUser.client.channels.cache.get(config.errlog)
        const player = newUser.guild.members.cache.get(newUser.id) || await interaction.guild.members.fetch(newUser.id).catch(err => {})

    let interviewvc = newUser.client.channels.cache.get(config.interviewwaitingvcid)
    let supportvc = newUser.client.channels.cache.get(config.supportwaitingvcid)
       // aivp interview joinalert
     if((channel1 == interviewvc) && (channel2 != interviewvc)){
        const interviewjoinem = new EmbedBuilder()
        .setColor('#b8ff14')
        .setTitle('AIVP Staff Alert')
        .setDescription(`<@${newUser.id}> Waiting at interview VC. <@&${config.aivpstaffrole}> <@&${config.aivpcordinatorrole}> Take the interview. **Details about user.**\n● **Discord name:** ${player.user.username}\n● **Discord ID:** ${newUser.id}\n● **Voice Channel:** <#${config.interviewwaitingvcid}>`)
        .setTimestamp()
        .setFooter({ text: '© AIVP Roleplay' });
        const interviewuserdm = new EmbedBuilder()
        .setColor('#b8ff14')
        .setTitle('Welcome To AIVP')
        .setDescription(`**AIVP Interview Team** \n\n <@${newUser.id}> You are now connected to AIVP interview VC our staff will be with you soon. Please make sure you have read rules by that time.  \n\n ** Regards: AIVP Support System**`)
        .setFooter({ text: '© AIVP Roleplay' });
        newUser.guild.channels.cache.get(config.aivpstaffalertchnlinterview).send({content:`**Interview Calling: ** <@&${config.aivpstaffrole}> <@&${config.aivpcordinatorrole}> <@${newUser.id}> Has joined interview channel.`, embeds: [interviewjoinem]})
       player.send({content:`**Interview Alert: ** <@${newUser.id}> Kindly read all rules and regulations of server.`, embeds: [interviewuserdm]}).catch(error => console.log(error))
           
                                                                                                                                                                                                                                                                          // (await whitelistplrfun(player)).attachment]
    }
     // aivp interview left alert
    if((channel1 != interviewvc) && (channel2 == interviewvc)){
        const interviewexitem = new EmbedBuilder()
        .setColor('#b8ff14')
        .setTitle('AIVP Staff Alert')
        .setDescription(`<@${oldUser.id}> Has left interview waiting VC. <@&${config.aivpstaffrole}> <@&${config.aivpcordinatorrole}> Kindly take care of interview **Details about user.**\n● **Discord name:** ${player.user.username}\n● **Discord ID:** ${newUser.id}\n● **Voice Channel:** <#${config.interviewwaitingvcid}>`)
        .setTimestamp()
        .setFooter({ text: '© AIVP Roleplay' });
        newUser.guild.channels.cache.get(config.aivpstaffalertchnlinterview).send({content:`**Interview User Left: ** <@&${config.aivpstaffrole}> <@&${config.aivpcordinatorrole}> <@${newUser.id}> Has left interview waiting VC.`, embeds: [interviewexitem]})
    }
     // aivp support join alert
    if((channel1 == supportvc) && (channel2 != supportvc)){
        const supportjoin = new EmbedBuilder()
        .setColor('#ebbb62')
        .setTitle('AIVP Staff Alert')
        .setDescription(`<@${oldUser.id}> Has joined support waiting. <@&${config.aivpstaffrole}> <@&${config.aivpcordinatorrole}> Give assistance to user **Details about user.**\n● **Discord name:** ${player.user.username}\n● **Discord ID:** ${newUser.id}\n● **Voice Channel:** <#${config.supportwaitingvcid}>`)
        .setTimestamp()
        .setFooter({ text: '© AIVP Roleplay' });
        const supportuserdm = new EmbedBuilder()
        .setColor('#ebbb62')
        .setTitle('Welcome To AIVP')
        .setDescription(`**AIVP Support Team** \n\n <@${newUser.id}> You are now connected to AIVP support VC our staff will be with you soon for your assistance. \n\n ** Regards: AIVP Support System**`)
        .setFooter({ text: '© AIVP Roleplay' });
        newUser.guild.channels.cache.get(config.aivpstaffalertchnlsupport).send({content:`**Assistance Required: ** <@&${config.aivpstaffrole}> <@&${config.aivpcordinatorrole}> <@${newUser.id}> Has joined support waiting VC.`, embeds: [supportjoin]})
    
        player.send({content:`**Support Alert: ** <@${newUser.id}> Please wait until our staff be with you.`, embeds: [supportuserdm]}).catch(err => console.log(err))

    }
     // aivp support left alert
    if((channel1 != supportvc) && (channel2 == supportvc)){
        const supportexitem = new EmbedBuilder()
        .setColor('#ebbb62')
        .setTitle('AIVP Staff Alert')
        .setDescription(`<@${oldUser.id}> Has left support waiting VC. <@&${config.aivpstaffrole}> <@&${config.aivpcordinatorrole}> Kindly take care of support channel **Details about user.**\n● **Discord name:** ${player.user.username}\n● **Discord ID:** ${newUser.id}\n● **Voice Channel:** <#${config.supportwaitingvcid}>`)
        .setTimestamp()
        .setFooter({ text: '© AIVP Roleplay' });
        newUser.guild.channels.cache.get(config.aivpstaffalertchnlsupport).send({content:`**Support User Left: ** <@&${config.aivpstaffrole}> <@&${config.aivpcordinatorrole}> <@${newUser.id}> Has left support waiting VC.`, embeds: [supportexitem]})
    }
    }
        
}