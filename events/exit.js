const { EmbedBuilder } = require('discord.js');
const config = require('../config.json');
module.exports = {
    name: "guildMemberRemove",
   async execute(member) {
 
    const exitembd = new EmbedBuilder()
	.setColor('#b8ff14')
	.setTitle('Bye! User Left AIVP')
    .setThumbnail(member.displayAvatarURL())
	.setDescription(`● **Player Name:** ${member.user.username}\n ● **Player Discord ID:** ${member.user.id} \n● **Player Discord Roles:** ${member.roles.cache.filter((roles)  => roles.id !== member.guild.id).map(r => `${r}`).join(' ')}`)
    .setTimestamp()
    .setFooter({ text: '© AIVP Roleplay' });
    
member.guild.channels.cache.get('713922268971139073').send({content: `<@${member.user.id}> Has Left AIVP Roleplay Server.`, embeds: [exitembd] });
// member.user.send({content: `Bye <@${member.user.id}>. Thank You For Being Part Of AIVP Family. Hope You See Again`});


}
}