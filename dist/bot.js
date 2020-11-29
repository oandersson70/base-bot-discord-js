"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones
const dotenv_1 = require("dotenv");
dotenv_1.config();
const discord_js_1 = require("discord.js");
const bot = new discord_js_1.Client;
const settigs_json_1 = require("./settigs.json");
// import { settings } from 'cluster';
//it's fine
bot.on('ready', () => {
    var _a;
    console.log(`bot is: ${(_a = bot.user) === null || _a === void 0 ? void 0 : _a.tag} and it's ready`);
});
//message
bot.on('message', (message) => {
    console.log(message.content);
    if (message.content.startsWith(`${settigs_json_1.prefix}`)) {
        message.channel.send('what?');
    }
    if (message.content.includes(`bot puto`)) {
        message.channel.send(`la tuya ${message.author}`);
    }
});
//permission
// const authority = (message.member?.hasPermission(['KICK_MEMBERS']))
bot.login(process.env.TOKEN);
