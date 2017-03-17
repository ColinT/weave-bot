const Discord = require('discord.js');
const client = new Discord.Client();
const io = require('socket.io-client');
const port = 8080;
const prefix = "!";
var socket = io.connect('http://localhost:' + port);

// Connection listener, sends confirmation string
// Mostly just used for debugging
socket.on('connect', function(data) {
  socket.emit('join', 'Incoming connection from bot');
});



client.on('message', message => {
	// Check if message starts with prefix
	// before performing any parsing
	if (message.content.charAt(0) === "!") {
		console.log("Got prefix");
		// Split message by " " to parse command
		// and possible arguments
		var msg = message.content.split(" ");

		// Standard ping
		if (msg[0] === prefix+'ping') {

			message.reply('pong');

		} else if (msg[0] === prefix+"invite") {
			// Get array of mentioned users (ordered by ID)
			// Should be able to invite as many as mentioned
			var arr = message.mentions.users.array();
			// Retrieve first mentioned user's username
			// for debugging for now
			let invitee = arr[0].username;
			console.log(message.author.username + ' has invited ' + invitee);
			socket.emit('invite', message.author.username + ' has invited ' + invitee);
		}
	}
});

client.on('ready', () => {
  console.log('I am ready!');
});


client.login('MjkxMDU2NDA3OTA4OTc0NTky.C6p_4Q.IkSPds322b3oQmuxUjSuFY6pGog');
