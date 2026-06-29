const { EmbedBuilder } = require('discord.js');
const config = require('../config.json');


module.exports = async function sentboterr(title, descp, chnl) { 
    const erremb = new EmbedBuilder()
    .setColor('#ff0000')
    .setTitle(title)
    .setDescription("**Error Details**\n```"+descp+"```")
    .setTimestamp()
    
await chnl.send({embeds: [erremb]})
 }
