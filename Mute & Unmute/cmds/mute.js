const fs = module.require("fs");

module.exports.run = async (bot, message, args) => {

    // Check perms, self, rank, etc
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("شما دسترسی لازم برای میوت کردن را ندارید <a:738016054651125770:740118761192947755> ");
    let toMute = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.send("یک کاربر را مینشن کنید <a:738016054651125770:740118761192947755> ");
    if(toMute.id === message.author.id) return message.channel.send("شما نمیتوانید خودتان را میوت کنید <a:738016054651125770:740118761192947755> ");
    if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("شما نمیتوانید رنک بالاتر خود را میوت کنید <a:738016054651125770:740118761192947755> ");

    // Check if the user has the mutedRole
    let mutedRole = message.guild.roles.find(mR => mR.name === "Muted");

    // If the mentioned user does not have the muted role execute the following
    if(!mutedRole) {
        try {
            // Create a role called "Muted"
            mutedRole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            });

            // Prevent the user from sending messages or reacting to messages
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(mutedRole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                })
            });

        } catch(e) {
            // If err print
            console.log(e.stack);
        }
    }

    // If the mentioned user already has the "mutedRole" then that can not be muted again
    if(toMute.roles.has(mutedRole.id)) return message.channel.send("این کاربر در حال حاظر میوت است! <a:738016054651125770:740118761192947755> ");

    // TODO: Check they they have entered a valid number or even entered one

    // Check current time and add muted time to it, then convert to seconds from milliseconds
    bot.muted[toMute.id] = {
        guild: message.guild.id,
        time: Date.now() + parseInt(args[1]) * 1000
    }

    // Add the mentioned user to the "mutedRole" and notify command sender
    await toMute.addRole(mutedRole);
    

    fs.writeFile("./muted.json", JSON.stringify(bot.muted, null, 4), err => {
        if(err) throw err;
        message.channel.send(` با موفقیت میوت شد <a:724267373766508554:740118782055546890>   ${toMute.user.tag}!`);
    });

}

module.exports.help = {
    name: "mute"
}