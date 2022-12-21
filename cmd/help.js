const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

          .addField("**" + "دستورات مدیریتی <a:737627726722236447:740130369507950653> : " + "**", " <a:737628504040144936:740130327371972658> $mod", true)
          .addField("**" + "دستورات سرگرمی <a:737627731356811344:740130355599638590> : " + "**", " <a:737628504040144936:740130327371972658> $fun", false)
          .addField("**" + "دستورات تیکت <a:737627738185138176:740131574636609538> : " + "**", " <a:737628504040144936:740130327371972658> $ticket", false)
		  .addField("**" + "دستورات ابزار ها <a:738016111886336050:740134307204563045> : " + "**", " <a:737628504040144936:740130327371972658> $tools", false)
		  
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
  name: "help",
  description: "دریافت دستورات",
  usage: "help"
};
