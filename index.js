const Discord = require('discord.js')
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`the bot is ready as ${bot.user.tag}`);
    bot.user.setStatus('');

})

bot.on('message', message => {
    console.log(message.content);

    if (message.content.includes(`yes`)) {
        message.channel.send(`no ${message.author}`)
    }
    if (message.content.includes(`test`)) {
        message.channel.send(`your tester ${message.author}`)
    }


});

bot.login(/*insertar tu token*/);