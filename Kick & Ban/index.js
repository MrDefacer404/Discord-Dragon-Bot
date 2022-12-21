const Discord = require('discord.js');

const client = new Discord.Client();

client.on("ready", () => {

   client.user.setActivity(`$help | v0.4.2`,{

   status: "dnd",

   type: "PLAYING"

});

})

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', (message) => {

  if (!message.guild) return;

if (message.content.startsWith('$kick')) {

  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("شما دسترسی اخراح کردن ندارید <a:738016054651125770:740118761192947755> ");

    const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member

          .kick()

          .then(() => {

            const kick = new Discord.MessageEmbed()

           .setDescription(`${user.tag} اخراح شد <a:724267373766508554:740118782055546890>  `)

            message.channel.send(kick);

          })

          .catch(err => {

            

            const kick_err_1 = new Discord.MessageEmbed()

           .setColor('#ff0000')

          .setDescription("نمیتوان این کاربر را اخراج کرد <a:738016054651125770:740118761192947755> ")

            message.channel.send(kick_err_1);

            console.error(err);

          });

      } else {

        

        const kick_err_2 = new Discord.MessageEmbed()

       .setColor('#ff0000')

      .setDescription("این کاربر در این سرور نیست! <a:738016054651125770:740118761192947755> ")

        message.channel.send(kick_err_2);

      }

    } else {

      message.reply("یک کاربر برای اخراج کردن مینشن کنید <a:738016054651125770:740118761192947755> ");

    }

  }

});

client.on('message', (message) => {

  if (!message.guild) return;

if (message.content.startsWith('$ban')) {

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("شما دسترسی محروم کردن را ندارید <a:738016054651125770:740118761192947755> ");

    const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member

          .ban()

          .then(() => {

            

            const ban = new Discord.MessageEmbed()

           .setDescription(`${user.tag} محروم شد <a:724267373766508554:740118782055546890> `)

            message.channel.send(ban);

          })

          .catch(err => {

            

            const ban_err_1 = new Discord.MessageEmbed()

           .setColor('#ff0000')

          .setDescription("نمیتوان این کاربر را محروم کرد <a:738016054651125770:740118761192947755> ")

            message.channel.send(ban_err_1);

            console.error(err);

          });

      } else {

        

        const ban_err_2 = new Discord.MessageEmbed()

       .setColor('#ff0000')

      .setDescription("این کاربر در این سرور نیست <a:738016054651125770:740118761192947755> ")

        message.channel.send(ban_err_2);

      }

    } else {

      message.reply("لطفا یک نفر را برای محروم کردن مینشن کنید <a:738016054651125770:740118761192947755> ");
    }

  }

});



client.login('NzM2ODgzNDc0ODg3MzQ0MTMw.Xx1SNw.Wxlk4_qn0UY_PxKdfSl05rsGKtk');









