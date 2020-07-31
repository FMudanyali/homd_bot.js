const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, yarra } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if ((!message.content.startsWith(prefix) && message.content != yarra) || message.author.bot) return;
    if (message.content == yarra) {
        try {
            message.channel.send('https://i.imgur.com/7D84Wm8.mp4');
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
        return;
    }
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

client.login(token);