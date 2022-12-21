var hd = [
  " <:436677933977960478:740135791140929545> خط",
  " <:436677926398853120:740135783507296257> شیر"
];

exports.run = (bot, msg, params) => {

  msg.channel.send(msg.author.toString() + (hd[Math.floor(Math.random() * hd.length)]));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['flip'],
  permLevel: 0
};

exports.help = {
  name: "coin",
  description: "شیر یا خط",
  usage: "coin"
};
