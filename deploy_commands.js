const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
require('dotenv').config();


const commands = [];

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());
}


const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

//Local Push
rest.put(Routes.applicationGuildCommands(process.env.APPLICATION_ID, "1008711383354978424"), { body: commands })
    .then(() => console.log('Successfully registered application commands.'));

// Global Push
// rest.put(Routes.applicationCommands(process.env.APPLICATION_ID), { body: commands })
//     .then(() => console.log('Successfully registered application commands.'));