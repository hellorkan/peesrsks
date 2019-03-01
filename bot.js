const Discord = require('discord.js');
const client = new Discord.Client();
const DiscordRvs = ["460606140666085378"];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 // client.user.setStatus('dnd')
 // client.user.setGame(`with sexy yaman.`)
  client.user.setActivity("our Codes",{type: 'WATCHING'});
  console.log('')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Iss Online ')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on('message', message => {
    if (message.content.startsWith('$js')) {
      var rank = "``☆ • JavaScript``";
  if(!message.channel.guild) return message.reply('هاذا الكوماند فقط للسيرفرات');
  let staff = message.guild.member(message.author).roles.find('name' , '☆ • JavaScript');
  if(!staff) return message.reply(`You not have ${rank} Rank`)
      let jscodes = message.guild.channels.find(`name`, "📘-discordjs");
    if(!jscodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر الاكواد");
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send(':pencil: **| من فضلك اكتب الكود الأن... :pencil2: **').then(message => {
  
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 90000,
        errors: ['time']
      })
            .then(collected => {
              collected.first().delete();
              thisMessage = collected.first().content;
              let boi4;
              message.edit(':man_in_tuxedo: **| من فضلك اكتب اسمك الأن... :pencil2: **').then(message => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
      .then(collected => {
        collected.first().delete();
        boi4 = collected.first().content;
        let boi;
        message.edit(':scroll: **| من فضلك اكتب وصف الكود الأن... :pencil2: **').then(message => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              boi = collected.first().content;
              let boi2;
              message.edit(':man_in_tuxedo: **| من فضلك اكتب من صنع هذا الكود الأن... :pencil2: **').then(message => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
        message.edit(':shield: **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');
   message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            message.delete();
            message.delete();
            thisFalse = false;
          }
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
            message.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**');
            collected.first().delete();
            jscodes.send(`@everyone | @here
ــــــــــــــــــــــــ
**${message.guild.name}© :arrow_down:**            
\`\`\`js
${thisMessage}\`\`\`
ــــــــــــــــــــــــ
**وصف الكود**: 
${boi}
ــــــــــــــــــــــــ
**تم النشر بواسطة**: 
${boi4}
ــــــــــــــــــــــــ
**المصدر / الشخص الذي صنع الكود**: 
${boi2}
ــــــــــــــــــــــــ
`); 
}})
})
})
})
})
})
})
})
});
};
});




client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('#970101')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | اطلق من دخل' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)

                  .addField("Name:",`<@` + `${member.id}` + `>`, true)

                                     .addField(' الـسيرفر', `${member.guild.name}`,true)

     .setFooter(`${member.guild.name}`)
        .setTimestamp()

      channel.sendEmbed(embed);
    });





client.on('message', message => {
    if (message.content.startsWith('$java')) {
      var rank = "``☆ • Java``";
  if(!message.channel.guild) return message.reply('هاذا الكوماند فقط للسيرفرات');
  let staff = message.guild.member(message.author).roles.find('name' , '☆ • Java');
  if(!staff) return message.reply(`You not have ${rank} Rank`)
      let jscodes = message.guild.channels.find(`name`, "📘-discordjava");
    if(!jscodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر الاكواد");
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send(':pencil: **| من فضلك اكتب الكود الأن... :pencil2: **').then(message => {
  
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 90000,
        errors: ['time']
      })
            .then(collected => {
              collected.first().delete();
              thisMessage = collected.first().content;
              let boi4;
              message.edit(':man_in_tuxedo: **| من فضلك اكتب اسمك الأن... :pencil2: **').then(message => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
      .then(collected => {
        collected.first().delete();
        boi4 = collected.first().content;
        let boi;
        message.edit(':scroll: **| من فضلك اكتب وصف الكود الأن... :pencil2: **').then(message => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              boi = collected.first().content;
              let boi2;
              message.edit(':man_in_tuxedo: **| من فضلك اكتب من صنع هذا الكود الأن... :pencil2: **').then(message => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
        message.edit(':shield: **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');
   message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            message.delete();
            message.delete();
            thisFalse = false;
          }
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
            message.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**');
            collected.first().delete();
            jscodes.send(`@everyone | @here
ــــــــــــــــــــــــ
**${message.guild.name}© :arrow_down:**            
\`\`\`java
${thisMessage}\`\`\`
ــــــــــــــــــــــــ
**وصف الكود**: 
${boi}
ــــــــــــــــــــــــ
**تم النشر بواسطة**: 
${boi4}
ــــــــــــــــــــــــ
**المصدر / الشخص الذي صنع الكود**: 
${boi2}
ــــــــــــــــــــــــ
`); 
}})
})
})
})
})
})
})
})
});
};
});



client.on('message', message => {
    if (message.content.startsWith('$py')) {
      var rank = "``☆ • Python``";
  if(!message.channel.guild) return message.reply('هاذا الكوماند فقط للسيرفرات');
  let staff = message.guild.member(message.author).roles.find('name' , '☆ • Python');
  if(!staff) return message.reply(`You not have ${rank} Rank`)
      let jscodes = message.guild.channels.find(`name`, "📘-discordpy");
    if(!jscodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر الاكواد");
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send(':pencil: **| من فضلك اكتب الكود الأن... :pencil2: **').then(message => {
  
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 90000,
        errors: ['time']
      })
            .then(collected => {
              collected.first().delete();
              thisMessage = collected.first().content;
              let boi4;
              message.edit(':man_in_tuxedo: **| من فضلك اكتب اسمك الأن... :pencil2: **').then(message => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
      .then(collected => {
        collected.first().delete();
        boi4 = collected.first().content;
        let boi;
        message.edit(':scroll: **| من فضلك اكتب وصف الكود الأن... :pencil2: **').then(message => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              boi = collected.first().content;
              let boi2;
              message.edit(':man_in_tuxedo: **| من فضلك اكتب من صنع هذا الكود الأن... :pencil2: **').then(message => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
        message.edit(':shield: **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');
   message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            message.delete();
            message.delete();
            thisFalse = false;
          }
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
            message.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**');
            collected.first().delete();
            jscodes.send(`@everyone | @here
ــــــــــــــــــــــــ
**${message.guild.name}© :arrow_down:**            
\`\`\`py
${thisMessage}\`\`\`
ــــــــــــــــــــــــ
**وصف الكود**: 
${boi}
ــــــــــــــــــــــــ
**تم النشر بواسطة**: 
${boi4}
ــــــــــــــــــــــــ
**المصدر / الشخص الذي صنع الكود**: 
${boi2}
ــــــــــــــــــــــــ
`); 
}})
})
})
})
})
})
})
})
});
};
});


client.on('message', message => {
    if (message.content.startsWith('$sumbit')) {
      var rank = "``☆ • Perk Student``";
  if(!message.channel.guild) return message.reply('هاذا الكوماند فقط للسيرفرات');
  let staff = message.guild.member(message.author).roles.find('name' , '☆ • Perk Student');
  if(!staff) return message.reply(`You not have ${rank} Rank`)
      let jscodes = message.guild.channels.find(`name`, "submissions");
    if(!jscodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر التقديمات ");
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send(':pencil: **| اكتب أسمك الآن ... :pencil2: **').then(message => {
  
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 90000,
        errors: ['time']
      })
            .then(collected => {
              collected.first().delete();
              thisMessage = collected.first().content;
              let boi4;
              message.edit(':man_in_tuxedo: **| اكتب عمرك... :pencil2: **').then(message => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
      .then(collected => {
        collected.first().delete();
        boi4 = collected.first().content;
        let boi;
        message.edit(':scroll: **| اكتب ما اللغة التي تعرفها... :pencil2: **').then(message => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              boi = collected.first().content;
              let boi2;
              message.edit(':man_in_tuxedo: **| و أخيراً اكتب من متى و انت تتعلم هذه اللغة... :pencil2: **').then(message => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
        message.edit(':shield: **| [ هل انت متأكد من التقديم؟ [ نعم ] او [ لا**');
   message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            message.delete();
            message.delete();
            thisFalse = false;
          }
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
            message.edit(':dove: **| Done :white_check_mark:, سيصلك الرد قريباً من الإدارة**');
            collected.first().delete();
            jscodes.send(`@everyone | @here
ــــــــــــــــــــ
**اسم المقدم** :      
${thisMessage}
ــــــــــــــــــــ
**عمر المقدم**: 
${boi4}
ــــــــــــــــــــ
**اللغة التي يعرفها المقدم**: 
${boi}
ــــــــــــــــــــ
**مدة تعلمه للغة التي يعرفها**: 
${boi2}
ــــــــــــــــــــ
`); 
}})
})
})
})
})
})
})
})
});
};
});



client.on("message", message => {
 if (message.content === "<@548879927492214809>") {
  const embed = new Discord.RichEmbed()
      .setColor("#970101")
     // .setThumbnail(message.author.avatarURL)
      .setDescription(`
 **
» Public Commands Menu :

» $sumbit : للتقديم على رتبة مبرمج

ـــــــــــــــــــــــــــــــ

» Support Commands Menu :

» $js : بنشر اكواد جافا سكربت


» $java : بنشر اكواد جافا


» $py : لنشر اكواد بايثون

**
`)


message.channel.sendEmbed(embed)

}
});




 client.on('message', message => {
    if (message.content === "$js" ) {

      let jscodes = message.guild.channels.find(`name`, "reports");

      jscodes.send(` ` + message.author + ` will send code: **JavaScript**`); 

 // message.channel.sendMessage("Pong!");
   }
  });

  client.on('message', message => {
    if (message.content === "$py" ) {

      let jscodes = message.guild.channels.find(`name`, "reports");

      jscodes.send(` ` + message.author + ` will send code: **Python**`); 

 // message.channel.sendMessage("Pong!");
   }
  });

  client.on('message', message => {
    if (message.content === "$java" ) {

      let jscodes = message.guild.channels.find(`name`, "reports");

      jscodes.send(` ` + message.author + ` will send code: **Java**`); 

 // message.channel.sendMessage("Pong!");
   }
  });






















client.login(process.env.BOT_TOKEN);
