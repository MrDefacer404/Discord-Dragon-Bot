const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

          .addField("**" + "دستورات سرگرمی <a:737627731356811344:740130355599638590> : " + "**", " <a:737628504040144936:740130327371972658> $fun", true)
          .addField("**" + "حرف زدن از طریق ربات <a:737627724411043851:740144265228845057> : " + "**", " <a:737628504040144936:740130327371972658> $speak", false)
          .addField("**" + "شیر یا خط <a:436677458339823636:740135780575477871> : " + "**", " <a:737628504040144936:740130327371972658> $coin", false)
		  .addField("**" + "نسبت دوست داشتن <a:665626030345551891:739840005119279126> : " + "**", " <a:737628504040144936:740130327371972658> $love", false)
		  .addField("**" + "مشاهده رنک :page_facing_up: : " + "**", " <a:737628504040144936:740130327371972658> $rank", false)
		  .addField("**" + "مشاهده رنک با جزعیات :bookmark_tabs: : " + "**", " <a:737628504040144936:740130327371972658> $rank -d", false)
		  
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
  name: "fun",
  description: "دریافت دستورات",
  usage: "fun"
};
