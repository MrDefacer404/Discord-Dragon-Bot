var ms = require('ms')

exports.run = (bot, msg, params) => {

  let Timer = params[0];

  if(!params[0]){
    return msg.channel.send("<a:738016054651125770:740118761192947755> " + "| خطا! لطفا مانند رو به رو عمل کنید $timer [1s/1m/1h/1d]");
  }

  if(params[0] <= 0){
    return msg.channel.send("<a:738016054651125770:740118761192947755>  " + "| خطا! لطفا مانند رو به رو عمل کنید $timer [1s/1m/1h/1d]");
  }

  msg.channel.send("<a:724267373766508554:740118782055546890>  " + "| تایمر با موفقیت کوک شد: " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){
    msg.channel.send(msg.author.toString() + `<a:724267373766508554:740118782055546890>    دینگ دینگ: ${ms(ms(Timer), {long: true})}`)

  }, ms(Timer));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "timer",
  description: "تایمر",
  usage: "timer [1s/1m/1h/1d]"
};
