const config = require('../config.json');
const FiveM = require("fivem")
const srv = new FiveM.Server('35.200.236.204:30120')
module.exports = {
    name: "ready",
    async execute(interaction, client, Commands) {
        aivpdiscordsrv = client.guilds.cache.get(config.discordserverid);
        const onchnl = aivpdiscordsrv.channels.cache.get('1052548584068886568')
        const offchnl = aivpdiscordsrv.channels.cache.get('1053726432720867439')
        setInterval(() => {
            srv.getServerStatus().then(data => {var srvstat = data 
                if (data.online) { 
                    onchnl.permissionOverwrites.edit(config.discordserverid, { ViewChannel: true });
                    offchnl.permissionOverwrites.edit(config.discordserverid, { ViewChannel: false });
}
else{
    onchnl.permissionOverwrites.edit(config.discordserverid, { ViewChannel: false });
    offchnl.permissionOverwrites.edit(config.discordserverid, { ViewChannel: true });
}
        })
}, 10000);  
}}