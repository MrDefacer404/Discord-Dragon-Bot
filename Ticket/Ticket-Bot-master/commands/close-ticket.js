const Discord = require(`discord.js`);
const fs = require('fs');
const {tAuthor} = require("./create-ticket.js");
const util = require('util')

module.exports.run = async (client, message, args) => {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`شما نمیتوانید خارج از تیکت از این دستور استفاده کنید :x:`);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${message.author} شما دسترسی بستن تیکت را ندارید :x:`);
        var current_date=new Date();
        var cName=message.channel
        

    
        // Confirm delete - with timeout (Not command)
        message.channel.send(`اگر میخواهید تیکت را ببندید باید تابپ  کنید $confirm :x:`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '$confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })
                    .then((channel) => {
//                    var string1= message.channel.name;
//                    string1 = string1.split('-')[1];
//                    
//                    let user = client.users.find("username", string1);
//                    user.send("test");
//                    console.log(`${user.id}`);
                    
                    
                    
    
                        client.channels.get(`569979206344376320`).send(`تیکت بسته شد  :white_check_mark: `);
                    })
                    .then((collected) => {
                        message.channel.delete();
                    })
                    .catch(() => {
                        m.edit('تایم تاییذ پایان یافت و تیکت بسته نشد :x:')
                    });
            });
    
        

        
    
    
//        message.channel.send(``)
//            .then((m) => {
//                message.channel.awaitMessages(response => response.content, {
//                        max: 1,
//                        time: 300000000,
//                        errors: ['time'],
//                    })
//                    .then((collected) => {
//                        message.author.send(`Your ticket on **NodePVP** has been closed.`)
//                        message.author.send(`**Closing information:**  ${collected.first().content}`)
//	                   })
//                    
//                    .catch(() => {
//                        m.edit('تایم تاییذ پایان یافت و تیکت بسته نشد :x:').then(m2 => {
//                            m2.delete();
//                        }, 3000);
//                    });
//            
//        })
}


module.exports.help = {
    name: "close-ticket"
    
}