const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

          .addField("__**" + "<a:724267373766508554:740118782055546890>  پشتیبانی : " + "**__", "https://discord.gg/RWYhsjC", true)
          .addField("__**" + "<a:724267373766508554:740118782055546890>  لینک  دعوت ربات : " + "**__", "https://discordapp.com/oauth2/authorize?client_id=736883474887344130&scope=bot&permissions=8", false)


          .setColor("0x#FF0000")

  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "invite",
  description: "دریافت لینک پشتیبانی و لینک دعوت ربات",
  usage: "invite"
};
