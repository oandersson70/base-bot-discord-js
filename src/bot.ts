//importaciones
import {config} from 'dotenv';
config();

import {Client, Message} from 'discord.js';
const bot: Client = new Client;

import {prefix} from './settigs.json';

// import { settings } from 'cluster';



//it's fine
bot.on('ready', () => {
    console.log(`bot is: ${bot.user?.tag} and it's ready`)
})

//message

bot.on('message', (message: Message) => {
    console.log(message.content);
        if (message.content.startsWith(`${prefix}`)) {
            message.channel.send('what?');
        }

        if (message.content.includes(`bot puto`)) {
            message.channel.send(`la tuya ${message.author}`);
        }
});
//permission
  // const authority = (message.member?.hasPermission(['KICK_MEMBERS']))
   
bot.login(process.env.TOKEN);