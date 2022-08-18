const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Commands And Help'),
    async execute(interaction) {
        const Embed = new EmbedBuilder()
            .setTitle('Commands And Help')
            .setDescription('Here you can find useful information about the bot, as well as the commands that you can use.')
            .setFooter({ text: 'LowdownBot | Made by 96kb', iconURL: 'https://cdn.discordapp.com/attachments/996108064426049698/1009492142974046269/lowdownrx_4.png' })
            .setColor('#3335E2')
            .setThumbnail('https://cdn.discordapp.com/attachments/996108064426049698/1009492142974046269/lowdownrx_4.png')
            .setAuthor({ name: 'LowdownBot | Made by 96kb', iconURL: 'https://cdn.discordapp.com/attachments/996108064426049698/1009492142974046269/lowdownrx_4.png' })
            .addFields(
                { name: '`/help`', value: 'Displays this message.' },
                { name: '`/findlyric`', value: 'Finds the lyrics of any song, using the song name and artist' },
                { name: '`/translate`', value: 'Translates any phrase/text of your choosing.' },
                { name: '`/credits`', value: 'Displays server and bot credits' },
                { name: 'Staff Commands',  value: 'Commands for staff only!'},
                { name: '`/ban`', value: 'Bans a user from the server' },
                { name: '`/kick`', value: 'Kicks a user from the server' }
              )
    }
}