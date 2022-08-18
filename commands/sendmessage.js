const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('sendmessage')
        .setDescription('Sends a message to a channel.')
        .addStringOption(option => option.setName('channel').setDescription('The channel to send the message to.').setRequired(true)
            .addChoices(
                {name: 'general', value: '980098389620424707'},
                {name: 'announcements', value: '980099771689730098'},
                {name: 'achelp', value: '980099669025751111'},
            ))
        .addStringOption(option => option.setName('message').setDescription('The message to send.').setRequired(true)),
async execute(interaction)
{
    const channel = client.channels.cache.get('id');

    const content = interaction.options.getString('message');
    await interaction.channel.send(content);
}
}
