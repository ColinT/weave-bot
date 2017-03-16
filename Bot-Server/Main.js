const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
	var msg = message.content.split(" ");
	if (msg[0] === '!ping') {
		var arr = message.mentions.users.array();
		message.reply('pong');
		console.log(arr);
		console.log(arr[0].id);
		
	} else if (msg[0] === "!invite") {
		var invitee = msg[1];
		console.log(message.author.username + ' has invited ' + invitee);
	}
});

client.login('MjkxMDU2NDA3OTA4OTc0NTky.C6p_4Q.IkSPds322b3oQmuxUjSuFY6pGog');
