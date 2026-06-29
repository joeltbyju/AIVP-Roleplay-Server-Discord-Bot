const config = require('../config.json');
module.exports = {
    name: "interactionCreate",
   async execute(interaction, client, Commands) {
if (!interaction.isButton()) return;
if(interaction.customId == "pancardagree"){
    if(interaction.member.roles.cache.has(config.verifiedrole)) await interaction.reply({ content: 'You Are Already Verified', ephemeral: true })
    else {
        await interaction.reply({ content: 'You Are Now Verified', ephemeral: true });
        interaction.member.roles.add(config.verifiedrole)
    }}}}

 