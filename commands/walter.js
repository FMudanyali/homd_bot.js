module.exports = {
	name: 'walter',
	description: 'walter of your preference',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send("Available walters: ``` sad, angry, pizza, hit ```");
		} else switch(args[0]) {
            case 'sad':
                message.channel.send('https://i.imgur.com/kwej2bb.mp4');
                break;
            case 'angry':
                message.channel.send('https://i.imgur.com/N9zqkYs.mp4');
                break;
            case 'pizza':
                message.channel.send('https://i.imgur.com/tbWoolp.mp4');
                break;
            case 'hit':
                message.channel.send('https://i.imgur.com/O8WfHh5.mp4');
                break;
            default:
                return message.channel.send("Available walters: ``` sad, angry, pizza, hit ```");
        }
	},
};