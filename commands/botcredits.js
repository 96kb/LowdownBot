const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('botcredits')
        .setDescription('About the bot and the creator'),
    async execute(interaction) {
        const button = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    // .setCustomId('github')
                    .setLabel('Learn More!')
                    .setURL('https://github.com/96kb')
                    .setStyle(ButtonStyle.Link)
                    .setEmoji('🧠'),
                new ButtonBuilder()
                    .setLabel('View My Code!')
                    .setURL('https://github.com/96kb/KiloBot')
                    .setStyle(ButtonStyle.Link)
                    .setEmoji('🧑‍💻'),
                new ButtonBuilder()
                    .setLabel('Invite me to your server!')
                    .setURL('https://discord.com/api/oauth2/authorize?client_id=1008811174801977494&permissions=2147534912&scope=bot%20applications.commands')
                    .setStyle(ButtonStyle.Link)
                    .setEmoji('🔗'))
        const Embed = new EmbedBuilder()
            .setTitle('About Me!')
            // .setDescription('About me and the bot!')
            .setDescription('I am a bot made by 96kb, you can find more information about me on my github, and by clicking the buttons below.\n I have a few different commands, you can find them by using the command `/help`.')
            .setFooter({ text: 'Made by 96kb' })
            .setColor('#2551F0')
            .addFields(
                { name: 'About Me And The Bot!', value: '[Click Me!](https://github.com/96kb/KiloBot)', inline: true },
                { name: 'Github', value: '[Click Me!](https://github.com/96kb)', inline: true },
                { name: 'Twitter', value: '[Click Me!](https://twitter.com/96kilobytes)', inline: true},
                { name: 'Discord', value: '96kb#8403', inline: true } )
            .setThumbnail('https://cdn.discordapp.com/avatars/236830231367778304/f86361e610c33e7479112877160135a4.png?size=2048')
            .setAuthor({ name: '96kb', iconURL: 'https://cdn.discordapp.com/avatars/236830231367778304/f86361e610c33e7479112877160135a4.png', url: 'https://github.com/96kilobytes' })
        await interaction.reply({ content: '', embeds: [Embed], components: [button] });
    },
}

