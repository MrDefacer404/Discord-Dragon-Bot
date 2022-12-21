const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

          .addField("**" + "دستورات تیکت <a:737627738185138176:740131574636609538> : " + "**", " <a:737628504040144936:740130327371972658> $ticket", true)
          .addField("**" + "ارسال درخواست تیکت :inbox_tray: : " + "**", " <a:737628504040144936:740130327371972658> $create-ticket", false)
          .addField("**" + "بستن تیکت :no_entry_sign: : " + "**", " <a:737628504040144936:740130327371972658> $close-ticket", false)
		  
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
  name: "ticket",
  description: "دریافت دستورات",
  usage: "ticket"
};
