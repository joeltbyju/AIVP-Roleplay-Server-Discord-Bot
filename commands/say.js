const config = require("../config.json")


module.exports = {
    name: 'say',
    description: 'Say Command',
   
    usage: '+say [Message]',
    execute: async (message, args) => {
        
        if(message.member.roles.cache.has(config.aivpserveradminrole)){
            var text = message.content.split(' ').slice(1).join(' ')
            var text2 = message.content.split(' ').slice(2).join(' ')
            
            console.log(text2)
            if (!text) return message.reply({
                content: 'Please give me some text to say! :)',
                allowedMentions: { repliedUser: false }
            }).then((msg) => {
                setTimeout(async () => msg.delete(), 10000);
                setTimeout(async () => message.delete(), 10000);
            })
            message.channel.send(text)
            await message.delete()
        }
        else
        message.reply("You dont have permmison to execute this command")
    },

};