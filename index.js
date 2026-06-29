require("dotenv").config();
const fs = require('node:fs');
const path = require('node:path');
const config = require('./config.json');
const { Client, Events, GatewayIntentBits, Collection, REST, Partials, ActivityType, Routes } = require('discord.js');
const client = new Client({ 
    intents: [
		GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessages,
		GatewayIntentBits.GuildPresences,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessageTyping,
		GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessageReactions,

    
       
],
partials: [
    Partials.Message, 
    Partials.Channel, 
    Partials.Reaction]

});
client.on(Events.ClientReady, c => {
    aivpdiscordsrv = c.guilds.cache.get('622736679211499532');
    console.log(`Bot Started ${c.user.tag}`);
    aivpdiscordsrv.channels.cache.get('1034833481756311632').send({content: `AIVP Discord Bot Started/Restarted Logged In As AIVP#9889
    
**Developed By**: BlackFalcon#0864`})
        setInterval(() => {

    client.user.setPresence({
      
        activities: [{ name: `Black Falcon`, type: ActivityType.Listening }],
        status: 'online',
      });
    }, 60000);

});
const globalcommandFiles = fs.readdirSync('./globalcommands').filter(file => file.endsWith('.js'));
const globalcommands = [];
client.globalcommands = new Collection();
for (const file of globalcommandFiles) {
	const globalcommand = require(`./globalcommands/${file}`);
	globalcommands.push(globalcommand.data.toJSON());
    client.globalcommands.set(globalcommand.data.name, globalcommand);
}
const commandFiles = fs.readdirSync('./slash-commands_context-menus').filter(file => file.endsWith('.js'));
const commands = [];
client.commands = new Collection();
for (const file of commandFiles) {
	const command = require(`./slash-commands_context-menus/${file}`);
	commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
}

const rest = new REST({ version: '10' }).setToken(process.env.AIVP_BOT_TOKEN);


(async () => {
	try {
		const data = await rest.put(
			Routes.applicationGuildCommands(process.env.AIVP_BOT_ID, process.env.AIVP_SERVER_ID),
			{ body: commands },
		);
        const dataglobal = await rest.put(
            Routes.applicationCommands(process.env.AIVP_BOT_ID),
            { body: globalcommands },
        );
		console.log(`Slash Commands Loaded`);
	} catch (error) {

		console.error(error);
	}
})();
const eventFiles = fs
    .readdirSync("./events")
    .filter(file => file.endsWith(".js"));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, commands, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, commands, client));
    }
}
const bckfunctionFiles = fs
    .readdirSync("./functions")
    .filter(file => file.endsWith(".js"));

for (const file of bckfunctionFiles) {
    const bckfunction = require(`./functions/${file}`);
    if (bckfunction.once) {
        client.once(bckfunction.name, (client, ...args) => bckfunction.execute(...args, commands, client));
    } else {
        client.on(bckfunction.name, (client, ...args) => bckfunction.execute(...args, commands, client));
    }
}
client.messcommands = new Collection();
const messagecommandFiles = fs
    .readdirSync("./commands")
    .filter((file) => file.endsWith(".js"));

for (const file of messagecommandFiles) {
    const cmd = require(`./commands/${file}`);
    client.messcommands.set(cmd.name, cmd);
}
client.on("messageCreate", async (message) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const messcommandName = args.shift().toLowerCase();
    const messcommand =
        client.messcommands.get(messcommandName) ||
        client.messcommands.find(
            (cmd) => cmd.aliases && cmd.aliases.includes(messcommandName)
        );

    if (!messcommand) return;
    if (message.channel.type == "1" ) {
        return message.reply("Cannot Execute Command In DM");
    }
try {
        messcommand.execute(message, args, client);
    } catch (error) {
        console.error(error);
        return;
    }
})

client.login(process.env.AIVP_BOT_TOKEN);
