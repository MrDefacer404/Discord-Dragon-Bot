const Discord = require('discord.js');

const agree    = "✅";
const disagree = "❎";

exports.run = async (bot, msg, params) => {

  let VOTE_TEXT = await msg.channel.send("نظر سنجی ایجاد شد و 60 ثانیه دیگر به پایان میرسد <a:724267373766508554:740118782055546890> ");
  await VOTE_TEXT.react(agree);
  await VOTE_TEXT.react(disagree);

  const reactions = await VOTE_TEXT.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 30000});
  VOTE_TEXT.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.RichEmbed()
  
            .addField("نظر سنجی به پایان رسید:", "----------------------------------------\n" +
                                          "خیر: " + `${NO_Count-1}\n` +
                                          "بله: " + `${YES_Count-1}\n` +
                                          "----------------------------------------", true)

            .setColor("0x#FF0000")

  await msg.channel.send({embed: sumsum});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "vote",
  description: "ایجاد یک نظرسنجی",
  usage: "vote"
};
