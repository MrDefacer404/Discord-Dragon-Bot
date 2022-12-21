const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

          .addField("**" + "دستورات مدیریتی :gear: : " + "**", "$mod", true)
          .addField("**" + "بن :no_entry_sign: : " + "**", "$ban", false)
          .addField("**" + "کیک :warning: : " + "**", "$kick", false)
		  .addField("**" + "میوت :zipper_mouth: : " + "**", "$mute", false)
		  .addField("**" + "آن میوت :grin: : " + "**", "$unmute", false)
		  .addField("**" + "نظر سنجی :bar_chart: : " + "**", "$vote", false)
		  .addField("**" + "اطلاعات یک کاربر :desktop: : " + "**", "$userinfo", false)
		  .addField("**" + "تایمر :clock: : " + "**", "$timer", false)
		  .addField("**" + "آواتار :motorway: : " + "**", "$avatar", false)
		  .addField("**" + "قوانین :scales: : " + "**", "$rules", false)
          .addField("**" + "رول های چنل :chart_with_upwards_trend: : " + "**", "$roles", false)
		  .addField("**" + "قرعه کشی  :tada: : " + "**", "$giveaway", false)
		  .addField("**" + "درباره ربات :robot: : " + "**", "$about", false)
		  
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
  name: "mod",
  description: "دریافت دستورات",
  usage: "mod"
};
