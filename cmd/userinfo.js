const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  let memberInfo = msg.mentions.members.first();

  if(!memberInfo){
    var userinfo = new Discord.RichEmbed()
        .addField("<a:724267373766508554:740118782055546890>  -----اطلاعات کاربر----- <a:724267373766508554:740118782055546890>   ",
                  "**<a:724267373766508554:740118782055546890>  اسم کامل: **" + `${memberInfo.user.username}#${memberInfo.user.discriminator}` + "\n" +
                  "**<a:724267373766508554:740118782055546890>  آیدی عددی: **" + memberInfo.id + "\n" +
                  "**<a:724267373766508554:740118782055546890>  ورود به دیسکورد در: **" + memberInfo.user.createdAt, true)

        .setThumbnail(msg.author.avatarURL)

        msg.channel.send(userinfo);

  }else{

    var userinfoo = new Discord.RichEmbed()
        .addField("<a:724267373766508554:740118782055546890>  -----اطلاعات کاربر----- <a:724267373766508554:740118782055546890> ",
                  "** <a:724267373766508554:740118782055546890>  اسم کامل: **" + `${memberInfo.user.username}#${memberInfo.user.discriminator}` + "\n" +
                  "** <a:724267373766508554:740118782055546890>  آیدی عددی: **" + memberInfo.id + "\n" +
                  "** <a:724267373766508554:740118782055546890>  ورود به دیسکورد در: **" + memberInfo.user.createdAt, true)

        .setThumbnail(memberInfo.user.avatarURL)

        msg.channel.send(userinfoo);
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['info'],
  permLevel: 0
};

exports.help = {
  name: "userinfo",
  description: "دریافت اطلاعات یک کاربر",
  usage: "userinfo [@MENTION]"
};
