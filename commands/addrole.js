const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addrole')
        .setDescription('Adds a role to a user.')
        .addUserOption(option =>
            option.setName('target').setDescription('The user to add the role to.').setRequired(true))
        .addRoleOption(option =>
            option.setName('role').setDescription('The role to add to the user.').setRequired(true)),

    async execute(interaction) {
        const role = interaction.options.getRole('role');
        const member = interaction.options.getUser('target');
        const guildbruv = await interaction.guild.members.fetch(member);
        await guildbruv.roles.add(role)
        await interaction.reply(`${member.username} has been given the ${role.name} role.`);
    }
}
