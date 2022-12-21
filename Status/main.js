const request = require('request');
const chalk = require('chalk');
const Discord = require('discord.js');
const bot = new Discord.Client();
const title = require('console-title');
const fs = require('fs');

let configfile = fs.readFileSync('config.json');
config = JSON.parse(configfile);
token = config.token
type = config.Type
status = config.Status

console.log("Starting Advanced Status...")

bot.on("ready", () => {
    console.log(`Logged in as: ${chalk.yellow(bot.user.tag)}\nEmail: ${chalk.bold(bot.user.email)}\nID: ${chalk.bold(bot.user.id)}`);
    title(`${bot.user.tag} | ${bot.guilds.size} guilds | ${bot.user.friends.size} friends`);
    let user = bot.user;
    console.log(type);
    console.log(status);

    function Watch() {
        console.log('WATCHING ENABLED')

        user.setActivity(status, { type: 'WATCHING' })
        .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
        .catch(console.error);
    }

    function Listen() {
        console.log('LISTENING ENABLED')

        user.setActivity(status, { type: 'LISTENING' })
        .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
        .catch(console.error);
    }

    function Play() {
        console.log('PLAYING ENABLED')

        user.setActivity(status, { type: 'PLAYING' })
        .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
        .catch(console.error);
    }
    
    if (type == "WATCHING") {
        Watch()
    } else if (type == "LISTENING") {
        Listen()
    } else if (type == "PLAYING") {
        Play()
    }
});

bot.login(token).catch(function (error) {
    console.log(error.message);
});