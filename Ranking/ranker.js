"use strict";
const opts = require('./auths')
const fs = require('fs')
const Discord = require("discord.js")

const bot = new Discord.Client()

let guilds = {}

function main(){
  try{
    console.log("Starting...\n")
    bot.login(opts.discordToken)
  }
  catch (e) {
      bot.destroy()
      main()
  }
}

main()

function addGuildtoReg(guild) {
	var temp = {}
	var timestamp = Date.now()
	guild["members"].forEach( member => {
		temp[member.id] = {"msgs":0,"voce":0,"rctn":0,"stmp":0,"init":0,"instmp":timestamp}
	})
	fs.writeFileSync(guild.id + ".json",JSON.stringify(temp))
	guilds[guild.id] = temp
}

bot.on('ready', () => {
	
	bot.guilds.forEach( guild => {
		fs.readFile(guild.id + ".json", (err, data) => {
			try {
				guilds[guild.id] = JSON.parse(data);
			} catch (e) {
				addGuildtoReg(guild)
			}
		});
	});
	
});

function convert(score, cur) {
	
	if (score-(((5/3.0)*(cur**3))+((45/2.0)*(cur**2))+((455/6.0)*cur)) >= 0){
		return convert(score,cur+1)
	} else {
		return cur-1
	}
	
}

function getScore(guild,user){
	
	return ((guilds[guild][user]["msgs"]*15) + (guilds[guild][user]["rctn"]*5) + (guilds[guild][user]["voce"]));
	
}

async function SRTable(guildID,user,channel,detail){
	
	var exp = getScore(guildID,user.id)
	var level = convert(exp,0)
	var next = (((5/3.0)*((level+1)**3))+((45/2.0)*((level+1)**2))+((455/6.0)*(level+1)))-exp;
	let del = new Discord.RichEmbed()
		.setColor('#3377ff')
		.setAuthor(user.tag, user.avatarURL)
		.addField("لول:",level, true)
		.addField("کل امتیاز:",exp | 0, true)
		.addField("امتیاز مورد نیار سطح بعدی:",next | 0, true);
		if (detail) {
			del.addField("امتیاز پیام ها:",(guilds[guildID][user.id]["msgs"]*15) | 0, true)
			del.addField("امتیاز ری اکشن ها:",(guilds[guildID][user.id]["rctn"]*5) | 0, true)
			del.addField("امتیاز ویس:",(guilds[guildID][user.id]["voce"]*10) | 0, true)
		}
	await channel.send(del)
	
}

async function MRTable(guildID,user1,user2,channel,detail){
	
	var exp1 = getScore(guildID,user1.id)
	var exp2 = getScore(guildID,user2.id)
	var level = Math.abs(convert(exp1,0) - convert(exp2,0))
	let del = new Discord.RichEmbed()
		.setColor('#3377ff')
		.setAuthor(user1.tag + " - " + user2.tag)
		.addField("لول:",level, true)
		.addField("امتیاز کل:",Math.abs(exp1-exp2) | 0, true)
		if (detail) {
			del.addField("امتیاز پیام ها:",Math.abs((guilds[guildID][user1.id]["msgs"]*15)-(guilds[guildID][user2.id]["msgs"]*15)) | 0, true)
			del.addField("امتیاز ری اکشن ها:",Math.abs((guilds[guildID][user1.id]["rctn"]*5)-(guilds[guildID][user2.id]["rctn"]*5)) | 0, true)
			del.addField("امتیاز ویس:",Math.abs((guilds[guildID][user1.id]["voce"]*10)-(guilds[guildID][user2.id]["voce"]*10)) | 0, true)
		}
	await channel.send(del)
	
}

bot.on('message', async (Message) => {
	
	if (Message.cleanContent.startsWith(opts.prefix + "rank")) {
		
		if (Message.cleanContent.startsWith(opts.prefix + "rank -d")) {
			SRTable(Message.guild.id, Message.author, Message.channel, true)
		} else {
			SRTable(Message.guild.id, Message.author, Message.channel, false)
		}
		
	} else if (Message.cleanContent.startsWith(opts.prefix + "dist")) {
		
		await Message.channel.send("Feature not implemented yet. Here's a fake for now:", {
			files: [
				"./graph.png"
			]
		});
		
	} else if (Message.content.match(/!gap\s*<@!(\d*)>\s*<@!(\d*)>/)) {
		
		var temp = Message.content.match(/!gap\s*<@!(\d*)>\s*<@!(\d*)>/);
		var user1 = Message.guild.members.get(temp[1])
		var user2 = Message.guild.members.get(temp[2])
		MRTable(Message.guild.id,user1,user2,Message.channel,false)
		
	} else if (Message.cleanContent.startsWith(opts.prefix + "restamp")){
		
		guilds[Message.guild.id][Message.author.id]["init"] = getScore(Message.guild.id,Message.author.id);
		guilds[Message.guild.id][Message.author.id]["instmp"] = Date.now();
		await Message.channel.send("تایم استمپ شما ریست شد :white_check_mark: ");
		
	} else if (Message.content.match(/!estimate\s*lv(\d*)>/)) {
		
		await Message.channel.send("You are X exp away from level ");
		
	} else if (Message.cleanContent.startsWith(opts.prefix + "clear-rank")) {
		
		guilds[Message.guild.id][Message.author.id]["msgs"] = 0;
		guilds[Message.guild.id][Message.author.id]["rctn"] = 0;
		guilds[Message.guild.id][Message.author.id]["voce"] = 0;
		guilds[Message.guild.id][Message.author.id]["init"] = 0;
		guilds[Message.guild.id][Message.author.id]["instmp"] = Date.now();
		await Message.channel.send("رنک شما با موفقیت ریست شد :white_check_mark: ");
		
	} else {
		
		if (Message.author.id in guilds[Message.guild.id]) {
			var level = convert(getScore(Message.guild.id,Message.author.id),0)
			guilds[Message.guild.id][Message.author.id]["msgs"] += 1;
			if (level != convert(getScore(Message.guild.id,Message.author.id),0)) {
				var r = await Message.author.createDM()
				await r.send("سطح شما افزایش یافت ! تبریک :tada:" + (level+1) + "!");
			}
		} else {
			guilds[Message.guild.id][Message.author.id] = {"msgs":1,"rctn":0,"voce":0,"stmp":0,"init":0,"instmp":Date.now()}
		}
		fs.writeFileSync(Message.guild.id + ".json",JSON.stringify(guilds[Message.guild.id]))
		
	}
})

bot.on("messageReactionAdd", async (messageReaction, user) => {
	if (user.id in guilds[messageReaction.message.guild.id]) {
		guilds[messageReaction.message.guild.id][user.id]["rctn"] += 1;
	} else {
		guilds[messageReaction.message.guild.id][Message.author.id] = {"msgs":0,"rctn":1,"voce":0,"stmp":0,"init":0,"instmp":Date.now()}
	}
	fs.writeFileSync(messageReaction.message.guild.id + ".json",JSON.stringify(guilds[messageReaction.message.guild.id]))
})

bot.on('voiceStateUpdate', async (oldState, newState) => {

	if ((oldState.voiceChannelID === null || oldState.voiceChannelID === undefined) && newState.voiceChannelID !== null) {
		guilds[oldState.guild.id][newState.user.id]["stmp"] = Date.now()
		fs.writeFileSync(newState.guild.id + ".json",JSON.stringify(guilds[newState.guild.id]))
	} else if (oldState.voiceChannelID !== null && newState.voiceChannelID === null) {
		guilds[oldState.guild.id][oldState.user.id]["voce"] += Math.floor((Date.now() - guilds[oldState.guild.id][oldState.user.id]["stmp"]) / 60000);
		fs.writeFileSync(oldState.guild.id + ".json",JSON.stringify(guilds[oldState.guild.id]))
	}
})

bot.on("guildCreate", (guild) => {
	
    addGuildtoReg(guild)
	
})

bot.on("guildMemberAdd", (guildMember) => {
	
	guilds[guildMember.guild.id][guildMember.id] = {"msgs":0,"voce":0,"rctn":0,"stmp":0,"init":0,"instmp":Date.now()}
	fs.writeFileSync(guildMember.guild.id + ".json",JSON.stringify(guilds[guildMember.guild.id]))
	
})
