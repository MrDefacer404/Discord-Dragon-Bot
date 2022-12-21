var Responses = [
  "آره <a:724267373766508554:740118782055546890>  ",
  "نه <a:738016054651125770:740118761192947755> ",
  "عاشقشی <a:724267373766508554:740118782055546890> ",
  "متنقری ازش <a:738016054651125770:740118761192947755> ",
];

exports.run = (bot, msg, params) => {

  if(!params[0]){
    return msg.channel.send("<a:738016054651125770:740118761192947755>  " + "| خطا! لطفا یک شخض یا یک جسم نام ببرید")
}

if (params[0]) {
  msg.channel.send(Responses[Math.floor(Math.random() * Responses.length)]);
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "love",
  description: "تست درصد دوست داشتن شما به یک جسم یا یک شخص",
  usage: "love [جسم یا یک شخص]"
};
