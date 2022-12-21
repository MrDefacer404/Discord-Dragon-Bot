const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

          .addField("**" + "دستورات ابزار ها <a:738016111886336050:740134307204563045> : " + "**", " <a:737628504040144936:740130327371972658> $tools", true)
          .addField("**" + "ماشین حساب :iphone: : " + "**", " <a:737628504040144936:740130327371972658> به زودی...", true)
		  
          .setColor("0x#295d7f")

  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "tools",
  description: "دریافت دستورات",
  usage: "tools"
};
