const fs = module.require("fs");

module.exports.run = async (bot, message, args) => {

    // Check perms, self, rank, etc
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("شما دسترسی آن میوت را ندارید <a:738016054651125770:740118761192947755> ");
    let toMute = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.send("یک کاربر را مینشن کنید <a:738016054651125770:740118761192947755> ");
    if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("شما نمیتوانید رنک بالاتر خود را آن میوت کنید <a:738016054651125770:740118761192947755> ");

    // Check if the user has the mutedRole
    let mutedRole = message.guild.roles.find(mR => mR.name === "Muted");

    // If the mentioned user or ID does not have the "mutedRole" return a message
    if(!mutedRole || !toMute.roles.has(mutedRole.id)) return message.channel.send("این کاربر میوت نیست <a:738016054651125770:740118761192947755> ");

    // Remove the mentioned users role "mutedRole", "muted.json", and notify command sender
    await toMute.removeRole(mutedRole);

    member.removeRole(mutedRole);
    delete bot.muted[toMute.id];

    fs.writeFile("./muted.json", JSON.stringify(bot.muted), err => {
        if(err) throw err;
        message.channel.send(`با موفقیت آن میوت شد <a:724267373766508554:740118782055546890>   ${toMute.user.tag}!`);
    });
    
}

module.exports.help = {
    name: "unmute"
}