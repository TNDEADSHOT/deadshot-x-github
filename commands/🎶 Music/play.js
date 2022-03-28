const Discord = require(`discord.js`);
const {
  MessageEmbed
} = require(`discord.js`);
const config = require(`${process.cwd()}/botconfig/config.json`);
const ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const playermanager = require(`../../handlers/playermanager`);
const { handlemsg } = require(`${process.cwd()}/handlers/functions`);
    module.exports = {
  name: `playsc`,
  category: `🎶 Music`,
  aliases: [`psc`],
  description: `Plays a song from youtube`,
  usage: `playsc <Song / URL>`,
  parameters: {
    "type": "music",
    "activeplayer": true,
    "previoussong": false
  },
  type: "queuesong",
  run: async (client, message, args, cmduser, text, prefix, player) => {
    
    let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
    if (!client.settings.get(message.guild.id, "MUSIC")) {
      return message.reply({embeds : [new MessageEmbed()
        .setColor(es.wrongcolor)
        .setFooter(client.getFooter(es))
        .setTitle(client.la[ls].common.disabled.title)
        .setDescription(handlemsg(client.la[ls].common.disabled.description, {prefix: prefix}))
      ]});
    }
    try {
      //if no args return error
      if (!args[0])
        return message.reply({embeds : [new MessageEmbed()
          .setColor(es.wrongcolor)
          .setTitle(eval(client.la[ls]["cmds"]["music"]["play"]["variable1"]))
        ]});

      message.react("🔎").catch(()=>{})
      message.react("840260133686870036").catch(()=>{})
      //play the SONG from YOUTUBE
      playermanager(client, message, args, `song:youtube`);
    } catch (e) {
      console.log(String(e.stack).dim.bgRed)
      return message.reply({embeds : [new MessageEmbed()
        .setColor(es.wrongcolor)
        .setTitle(client.la[ls].common.erroroccur)
        .setDescription(eval(client.la[ls]["cmds"]["music"]["play"]["variable2"]))
      ]});
    }
  }
};
/**
 * @INFO
 * Bot Coded by TN DEADSHOT#8167 | https://github?.com/TN DEADSHOT#8167/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for DEADSHOT X Development | https://DEADSHOT X.eu
 * @INFO
 * Please mention Him / DEADSHOT X Development, when using this Code!
 * @INFO
 */
