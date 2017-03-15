const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login('MjkxMDU2NDA3OTA4OTc0NTky.C6p_4Q.IkSPds322b3oQmuxUjSuFY6pGog');
