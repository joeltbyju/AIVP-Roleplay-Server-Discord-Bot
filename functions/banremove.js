const { EmbedBuilder } = require('discord.js');
const config = require('../config.json');
const fs = require('fs');

module.exports = {
    name: "ready",
    async execute(interaction, client, Commands) {
        aivpdiscordsrv = client.guilds.cache.get('622736679211499532');
        setInterval(() => {
            var ToDate = new Date();
            let bandb = JSON.parse(fs.readFileSync("././JSON-Database/bandata.json", "utf8"));
           const rem = bandb.find(x => new Date(x.banrevokedate).getTime() < ToDate.getTime());
          if(rem){
            date = new Date(rem.bandate)
            let player = aivpdiscordsrv.members.cache.get(rem.id)|| aivpdiscordsrv.members.fetch(rem.id).catch(err => {})
            var time = Math.round((date).getTime() / 1000);
            const unban = new EmbedBuilder()
              .setColor('#0cf027')
              .setTitle('Player Unanned From Server')
              .setDescription(`<@${player.user.id}> ${player.user.tag} Has been Unbanned from server. **Referance No:** ${rem.refno}`)
              .addFields(
              { name: 'Banned On', value: `<t:${time}:d>`, inline: true },
              { name: 'Unanned By:', value: `<@${config.botid}>` , inline: true },
              { name: 'Unban Type:', value: `**Auto**`, inline: true },)
              .setFooter({ text: '© AIVP Roleplay'})
              .setTimestamp();
            let value = bandb.indexOf(rem);
            delete bandb[value]
            var filtered = bandb.filter(el => {
                return el != null && el != "";
              });
              bandb = filtered;
            
          
            fs.writeFile("././JSON-Database/bandata.json", JSON.stringify(bandb, null, 2), err => {
              if (err) console.log(err);
            });
            player.roles.add(config.whitelistrole).catch(err => console.log(err))
            player.roles.remove(config.banrole).catch(err => console.log(err))
aivpdiscordsrv.channels.cache.get(config.aivpunbanchannel).send({content: `<@&${config.whitelistrole}> <@${rem.id}> Has been unbanned from server.`,embeds: [unban]})
        }
            
            
            
            
            
            
        
         
                
      }, 10000);
                
                
        
        }
    }
    