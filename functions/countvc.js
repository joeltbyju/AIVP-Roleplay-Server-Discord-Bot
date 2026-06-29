const config = require('../config.json');
module.exports = {
    name: "ready",
    async execute(interaction, client, Commands) {
        aivpdiscordsrv = client.guilds.cache.get(config.discordserverid);
        const channel = aivpdiscordsrv.channels.cache.get('1012361133346279494')
        var count = aivpdiscordsrv.memberCount
        setInterval(() => {
            channel.edit({
                name:'🔔║ᴍᴇᴍʙᴇʀꜱ: '+count
            })
}, 600000);  
}}