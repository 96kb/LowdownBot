// const axios = require('axios');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { getLyrics } = require('lyrics-dumper');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('findlyric')
        .setDescription('Finds a lyric!')
        .addStringOption(option => option.setName('song').setDescription('The name of the song.').setRequired(true))
        .addStringOption(option => option.setName('artist').setDescription('The name of the artist.').setRequired(true)),
    async execute(interaction) {
        // await interaction.reply('Finding a lyric...');
        const songName = interaction.options.getString('song');
        const artistName = interaction.options.getString('artist');
        // const track = await axios.get(`https://api.musixmatch.com/ws/1.1/track.search?apikey=${process.env.MUSIXMATCH_API_KEY}&q_track=${songName}&q_artist=${artistName??''}&page_size=1`);
        // const lyrics = await axios.get(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${track.data.message.body.track_list[0].track.track_id}&apikey=${process.env.MUSIXMATCH_API_KEY}`)
        const a = await getLyrics(`${artistName}, ${songName}`);
        const Embed = new EmbedBuilder().setTitle(`${artistName} - ${songName}`).setDescription(a.lyrics).setFooter({ text: 'Powered by SongLyric & lyrics-dumper' }).setColor('#2551F0');
        await interaction.reply({ content: '', embeds: [Embed] });
    },
};