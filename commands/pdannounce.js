const config = require("../config.json")
const {WebhookClient} = require('discord.js');

module.exports = {
    name: 'pdannounce',
    description: 'Police Broadcast',
   
    usage: '+pdannounce [Message]',
    execute: async (message, args) => {
        if(message.member.roles.cache.has(config.aivpserveradminrole)){
            const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1059085197355798548/Xo_Qk3AhjxkM3xFu1lbOIqORqyp_JMFD-HqFduPHWcFK4dIgg81gsUZoYIvJ_KXWu9nR'});
            var text = message.content.split(' ').slice(1).join(' ')
            if (!text) return message.reply({
                content: 'Please give me some text to say! :)',
                allowedMentions: { repliedUser: false }
            }).then((msg) => {
                setTimeout(async () => msg.delete(), 10000);
                setTimeout(async () => message.delete(), 10000);
            })
            webhookClient.send(text)
            await message.delete()
        }
            else
            message.reply("You dont have permmison to execute this command")
        
    },
};