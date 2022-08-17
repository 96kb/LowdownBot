const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('translate')
        .setDescription('Translates any text of your choice')
        .addStringOption(option =>
            option.setName('text')
                .setDescription('The text to translate')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('languages')
                .setDescription('The language you want to translate to')
                .setRequired(true)
                .addChoices(
                    { name:'Bulgarian', value: 'BG' },
                    { name: 'Czech', value: 'CS' },
                    { name: 'Danish', value: 'DA' },
                    { name: 'German', value: 'DE' },
                    { name: 'Greek', value: 'EL' },
                    { name: 'English', value: 'EN-GB' },
                    { name: 'English (US)', value: 'EN-US' },
                    { name: 'Spanish', value: 'ES' },
                    { name: 'Estonian', value: 'ET' },
                    { name: 'Finnish', value: 'FI' },
                    { name: 'French', value: 'FR' },
                    { name: 'Hungarian', value: 'HU' },
                    { name: 'Indonesian', value: 'ID' },
                    { name: 'Italian', value: 'IT' },
                    { name: 'Japanese', value: 'JA' },
                    { name: 'Dutch', value: 'NL' },
                    { name: 'Polish', value: 'PL' },
                    { name: 'Portuguese', value: 'PT-PT' },
                    { name: 'Portuguese (Brazilian)', value: 'PT-BR' },
                    { name: 'Romanian', value: 'RO' },
                    { name: 'Russian', value: 'RU' },
                    { name: 'Slovak', value: 'SK' },
                    { name: 'Slovenian', value: 'SL' },
                    { name: 'Swedish', value: 'SV' },
                    { name: 'Turkish', value: 'TR' },
                ),
        ),
    async execute(interaction) {
        const text = interaction.options.getString('text');
        const target_lang = interaction.options.getString('languages');

        const a = await axios.get('https://api-free.deepl.com/v2/translate', {
            params: {
                auth_key: process.env.DEEPL_API_KEY,
                text: text,
                target_lang: target_lang,
            },
            headers: {
                'Content-Type': 'x-www-formurl-encoded',
            },
        });
        // console.log(a.data.translations[0].text);
        console.log(a.data.translations);
        // const button = new ActionRowBuilder()
        //     .addComponents(
        //         new ButtonBuilder()
        //             // .setCustomId('github')
        //             .setLabel('Learn More!')
        //             .setURL('https://github.com/96kb')
        //             .setStyle(ButtonStyle.Link)
        //             .setEmoji('🧠'),
        //         new ButtonBuilder()
        //             .setLabel('View My Code!')
        //             .setURL('https://github.com/96kb/translatorbot')
        //             .setStyle(ButtonStyle.Link)
        //             .setEmoji('🧑‍💻'),
        //     );
        const Embed = new EmbedBuilder()
            .setTitle('Translated Text')
            .setDescription('This is your translated text.\nWith the top being the original text and the bottom being the translated text')
            .setColor('#6494FF')
            .setFooter({ text: 'LowdownBot | Made by 96kb' })
            .addFields(
                { name: 'Original', value: text },
                { name: 'Translated', value: a.data.translations[0].text },
            );

        await interaction.reply({ embeds: [Embed], components: [button] });
    },
};

// Translated Text
// Translated from - Danish
// Translation - Translated Text