const server = require('http').createServer();
const io = require('socket.io')(server);
const port = 8081;


io.on('connection', client => {
	console.log('Client connected...');

	// Connection listener
	// Mostly just for debug purposes
	client.on('join', data => {
    console.log(data);
	});

	// Invite listener, logs out 'x has invited y'
	// Depending on what is needed, maybe send
	// an array of usernames and IDs
	client.on('invite', data => {
		console.log(data);
	})
})

server.listen(port);
console.log('ready');
