const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('banuser')
        .setDescription('Bans a user from the server.')
        .addUserOption(option =>
            option.setName('user').setDescription('The user to ban.').setRequired(true))
        .addStringOption(option =>
            option.setName('reason').setDescription('The reason for the ban.').setRequired(false)),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason');
        interaction.guild.members.ban(user);
        await interaction.reply(`${user.username} has been banned for ${reason}.`);
    }
}
