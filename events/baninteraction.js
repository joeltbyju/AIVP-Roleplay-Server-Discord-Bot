module.exports = {
    name: "interactionCreate",
    async execute(interaction) {
     


        if (!interaction.isModalSubmit()) return;
        if (interaction.customId === 'Ban Player') {
            await interaction.reply({ content: 'Player has banned!' });
        }


        }


    }
