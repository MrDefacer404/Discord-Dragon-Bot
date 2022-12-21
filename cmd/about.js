const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

          .addField("__**" + "سازنده : " + "**__", ":warning:  @Valtora#7932 :warning: ", true)
          .addField("__**" + "وزژن  : " + "**__", "0.4.2 :robot: ", false)
		  .addField("__**" + "وضیت ریات : " + "**__", "آنلاین :white_check_mark: ", true)
          .addField("__**" + "چنل پشتیبانی : " + "**__", "https://discord.gg/RWYhsjC :envelope: ", true)
        
          .setColor("0x#a2f634")

  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "Dragon-Bot",
  description: "ربات سرور دراگون استودیو",
  usage: "about"
};
