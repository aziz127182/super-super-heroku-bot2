const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', function(message) {
    if(message.content.startsWith(='support')) {
        let guild = message.mentions.members.first();
                          let ZmA = new Discord.RichEmbed()
                  .setColor('3fcf24')
                  .setDescription('**__:white_check_mark: تم إضافة رتبة الدعم الفني لك__**')
        message.member.addRole(message.guild.roles.find('name', 'Support'));
                    message.channel.send({embed:ZmA});
    }
});
client.login(process.env.BOT_TOKEN);
