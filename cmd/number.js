exports.run = (bot, msg, params) => {

  let min = parseInt(params[0]);
  let max = parseInt(params[1]);

  if(min > max){
      let temp = max;
      max = min;
      min = temp;
  }

  var Result = Math.floor(Math.random() * (max - min + 1)) + min;

  if(isNaN(Result)){
      return msg.channel.send("خطا! مانند رو به رو عمل کنید $number [min] [max] <a:738016054651125770:740118761192947755> ")
  }else{
      msg.channel.send(Result);
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['num'],
  permLevel: 0
};

exports.help = {
  name: "number",
  description: "یک عدد رندوم",
  usage: "number [MIN] [MAX]"
};
