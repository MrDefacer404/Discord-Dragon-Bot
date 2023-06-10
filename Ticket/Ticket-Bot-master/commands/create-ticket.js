const Discord = require(`discord.js`);

const fs = require('fs');
const util = require('util')

var current_date=new Date();

module.exports.run = async (client, message, args) => {
    const reason = message.content.split(" ").slice(1).join(" ");
    var tAuthor = message.author.tag
    if (message.guild.channels.exists("name", "ticket-" + message.author.tag)) return message.reply(`شما در حال حاظر یک تیکت باز دارید :x:`);
    message.guild.createChannel(`ticket-${message.author.tag}`, "text").then(c => {
        let role = message.guild.roles.find("name", `ticket`);
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.setParent(`566427452528787456`)
        message.reply(`:white_check_mark: تیکت شما ایجاد شد با اسم, #${c.name}.`);
        c.send(`لطفا سوال یا گزارش خود را ارسال و منتظر پاسخ باشید :white_check_mark: `);
        //client.channels.get(config.logs).send(`:white_check_mark: !!!Ticket Created ${message.author} at **${current_date}**`);
    }).catch(console.error);

}

module.exports.help = {
    name: "create-ticket"
    
}