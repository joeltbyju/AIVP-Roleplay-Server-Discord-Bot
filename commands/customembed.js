const config = require("../config.json")
const { EmbedBuilder } = require('discord.js');


module.exports = {
    name: 'customembed',
    description: 'Say Command',
   
    usage: '+say [Message]',
    execute: async (message, args) => {
        if(message.member.roles.cache.has(config.aivpserveradminrole)){
            var text = message.content.split(' ').slice(1).join(' ')
            
            const cutomembed = new EmbedBuilder()
            .setColor('#b8ff14')
            .setDescription(text)
            
          if (!text) return message.reply({
                content: 'Please give me some text to say! :)',
                allowedMentions: { repliedUser: false }
            }).then((msg) => {
                setTimeout(async () => msg.delete(), 10000);
                setTimeout(async () => message.delete(), 10000);
            })

           message.channel.send({embeds: [cutomembed]})
            await message.delete()
        }
            else
            message.reply("You dont have permmison to execute this command")
        },
};