const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Commands And Help'),
    async execute(interaction) {
        const Embed = new EmbedBuilder()
            .setTitle('About the server')
            .setDescription('Here you can find useful information about the server!')
            .setFooter({ text: 'LowdownBot | Made by 96kb', iconURL: 'https://cdn.discordapp.com/attachments/996108064426049698/1009492142974046269/lowdownrx_4.png' })
            .setColor('#3335E2')
            .setThumbnail('https://cdn.discordapp.com/attachments/996108064426049698/1009492142974046269/lowdownrx_4.png')
            .setAuthor({ name: 'LowdownBot | Made by 96kb', iconURL: 'https://cdn.discordapp.com/attachments/996108064426049698/1009492142974046269/lowdownrx_4.png' })
            .addFields(
                { name: '`Who are we?', value: 'This is a british traffic Assetto Corsa server' },
                { name: 'Where is the server based?', value: 'The server map is based in the north of the UK, around a real life area, Teesdale' },
                { name: 'When was the server founded?', value: 'The server was first founded in may of 2022, being a free roam server. We then switched to a traffic server in July.' },
                { name: 'Who made the server?', value: 'The server was made and founded by LowdownRX in 2022' },
            )
        interaction.reply({embeds: [Embed]});
    }
}