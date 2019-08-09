const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`ML Group`);
});
const prefix = '#'

const moment = require('moment')
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 

client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  |  تم ارسال الرابط على الخاص  ")
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
-[${message.guild.name}]  هذا هو رابط سيرفر
- هاذ الرابط صالح لمدة 24 ساعة
**`)
      message.author.sendEmbed(Embed11)
    }
});





client.on('message', message => {
if (message.author.id === client.user.id) return;
if (message.guild) {
let embed = new Discord.RichEmbed()
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if (!args[1]) {
return;
}
  message.guild.members.forEach(m => {
if(!message.member.hasPermission('ADMINISTRATOR')) return;
      var bc = new Discord.RichEmbed()
      .addField('# | الرسالة ', args)
      .setThumbnail(message.guild.iconURL)
      .setColor('RANDOM')
      m.sendMessage(args)
  });
         if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(":x: **ليس لديك صلاحية للنشر هنا**");
  const AziRo = new Discord.RichEmbed()   
  .setColor('RANDOM')
  message.channel.sendEmbed(AziRo);          
}
} else {
  return;
}
});

client.login('NjA5NTE2ODcwMjQ4MTY5NDc3.XU33Fg.8tXCEgmaI1Q1j-3_9LndmPsuK5E');
