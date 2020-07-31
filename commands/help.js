module.exports = {
	name: 'help',
	description: 'list gifs',
	execute(message, args) {
		message.channel.send("Available commands: ``` crip, dead, gus, iron, jokar, rick, riot, wall, walter, weirdchamp ```");
	},
};