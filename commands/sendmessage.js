const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const channel = client.channels.cache.get('id');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('sendmessage')
        .setDescription('Sends a message to a channel.')
        .addStringOption(option => option.setName('channel').setDescription('The channel to send the message to.').setRequired(true))
        .addStringOption(option => option.setName('message').setDescription('The message to send.').setRequired(true)),
}
const content = interaction.options.getString('message');
    await interaction.channel.send (content);