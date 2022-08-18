const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('sendmessage')
        .setDescription('Sends a message to a channel.')
        .addChannelOption(option => option.setName('sendto').setDescription('The channel to send the message to.').setRequired(true))
        .addStringOption(option => option.setName('message').setDescription('The message to send.').setRequired(true)),
async execute(interaction)
{
    const channel = interaction.options.getChannel('sendto');

    const content = interaction.options.getString('message');
    // await interaction.client.channels.get(channel).send(content);
    channel.send(content);
    interaction.reply(`Message sent to ${channel}`);
}
}
