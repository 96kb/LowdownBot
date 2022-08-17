const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kickuser')
        .setDescription('Kicks a user from the server.')
        .addUserOption(option =>
            option.setName('user').setDescription('The user to kick.').setRequired(true))
        .addStringOption(option =>
            option.setName('reason').setDescription('The reason for the kick.').setRequired(false)),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason');
        interaction.guild.members.kick(user);
        await interaction.reply(`${user.username} has been kick for ${reason}.`);
    }
}
