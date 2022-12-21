exports.run = (bot, msg, params) => {

  msg.delete();

  if(!params.join(" ")){
    return msg.channel.send("<a:738016054651125770:740118761192947755>  " + "| خطا! لطفا یک متن برای های لایت بنویسید")
  }
  msg.channel.send("```" + params.join(" ") + "```");

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hl'],
  permLevel: 0
};

exports.help = {
  name: "highlight",
  description: "های لایت کردن متن",
  usage: "highlight [TEXT]"
};
