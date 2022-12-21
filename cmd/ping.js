exports.run = (bot, msg, params) => {

  msg.channel.send(msg.author.toString() + " " + "<a:724267373766508554:740118782055546890>  ربات آنلاین است.");

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ping",
  description: "تست روشن یا خاموش بودن ربات",
  usage: "ping"
};
