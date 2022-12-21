exports.run = (bot, msg, params) => {

  msg.delete();

  if(!params.join(" ")){
    return msg.channel.send("<a:738016054651125770:740118761192947755>  " + "| خطا! لطفا یک متن نیز بگویید")
  }
  msg.channel.send(params.join(" "));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['speak', 'say'],
  permLevel: 0
};

exports.help = {
  name: "speak",
  description: "حرف زدن از طریق ربات",
  usage: "speak [TEXT]"
};
