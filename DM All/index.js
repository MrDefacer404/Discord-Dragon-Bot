const Discord = require("discord.js");
let bot = new Discord.Client();
bot.on("ready",function(){
    console.log("Ready");
})
bot.on("message",message=>{
    if(message.author.equals(bot.user)) return;
    if (message.author.bot) return; 
    let MessageArr = message.content.split(" ");
    let cmd = MessageArr[0];
    let args = MessageArr.slice(1);
    if(cmd == "$dmall"){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("شما دسترسی لازم برای استفاده این دستور را ندارید :x:");
        let messagee = args.join(" ");
        if(!messagee) return message.channel.send("نمیتوان یک پیام خالی ارسال کرد :x:");
        else{
            message.guild.members.forEach(member=>{
                member.send(messagee).then(()=>{
                    console.log("sent mesasge to: "+member.user.tag+" Successfully");
                }).catch(function(){
                    console.log("An error occured to dm: "+member.user.tag+".");
                });
            })
        }
    }
})

bot.login("NzM2ODgzNDc0ODg3MzQ0MTMw.Xx1SNw.Wxlk4_qn0UY_PxKdfSl05rsGKtk");
