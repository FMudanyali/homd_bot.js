module.exports = {
	name: 'dead',
	description: 'man fucking dying',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send("Available deaths: ``` fast, slow, loop, monky ```");
		} else switch(args[0]) {
            case 'fast':
                message.channel.send('https://i.imgur.com/wUECgDb.mp4');
                break;
            case 'slow':
                message.channel.send('https://i.imgur.com/dCKybCP.mp4');
                break;
            case 'loop':
                message.channel.send('https://i.imgur.com/hecnjie.mp4');
                break;
            case 'monky':
                message.channel.send('https://i.imgur.com/g7n62bY.mp4');
                break;
            default:
                return message.channel.send("Available deaths: ``` fast, slow, loop, monky ```");
        }
	},
};