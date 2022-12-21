exports.run = (bot, msg, params) => {

    let messagecount = parseInt(params[0]);
  
    if(isNaN(messagecount)) return msg.channel.send("<a:738016054651125770:740118761192947755>  " + "|خطا! لطفا یک تعداد وارد کنید");
  
    if(messagecount > 100){
      msg.channel.send("<a:738016054651125770:740118761192947755>  " + "| خطا! حداکثر پاک کردن پیام ها هر دفعه 100 پیام است")
    }else if(messagecount < 2 ) {
      msg.channel.send("<a:738016054651125770:740118761192947755>  " + "| خطا! حداکثر پاک کردن پیام ها هر دفعه 100 پیام است")
    } else {
  
    }{
      msg.channel.fetchMessages({limit: messagecount}).then(messages => msg.channel.bulkDelete(messages, true));
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['purge', 'delete'],
  permLevel: 3
};

exports.help = {
  name: "clear",
  description: "پاک کردن تعداد مشخصی از پیام ها",
  usage: "clear [NUMBER]"
};
