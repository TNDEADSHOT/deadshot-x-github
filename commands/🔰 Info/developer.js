const {
	MessageEmbed
} = require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { MessageButton, MessageActionRow } = require('discord.js')
const { handlemsg } = require(`${process.cwd()}/handlers/functions`)
module.exports = {
	name: "developer",
	category: "🔰 Info",
	aliases: ["dev", "TNDEADSHOT"],
	description: "Shows Information about the Developer",
	usage: "developer",	
	type: "bot",
	run: async (client, message, args, cmduser, text, prefix) => {
		let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
		
		try {	
			let button_public_invite = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.invite).setURL("https://discord.com/oauth2/authorize?client_id=841186843575844885&permissions=4228906103&scope=bot")
			let button_support_dc = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.dc).setURL("https://discord.gg/2wN7p6wM")
			let button_invite = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.botlist).setURL(`https://discord.gg/2wN7p6wM`)
			const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_invite])]
			message.reply({embeds: [new MessageEmbed()
				.setColor(es.color)
				.setFooter(client.getFooter(es))
				.setTimestamp()
				.setThumbnail("https://media.discordapp.net/attachments/887988384335818782/891209413610852372/standard_1.gif")
				.setTitle(client.la[ls].cmds.info.developer.title)
				.setURL("crimexop.ml")
				.setDescription(client.la[ls].cmds.info.developer.description)],
components: allbuttons
			}).catch(error => console.log(error));
		} catch (e) {
			console.log(String(e.stack).grey.bgRed)
			return message.reply({embeds: [new MessageEmbed()
			  .setColor(es.wrongcolor)
			  .setFooter(client.getFooter(es))
			  .setTitle(client.la[ls].common.erroroccur)
			  .setDescription(eval(client.la[ls]["cmds"]["info"]["color"]["variable2"]))
			]});
		}
	}
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://discord.gg/CVRHqHV7yE
 * @INFO
 * Work for Milrato Development | crimexop.ml
 * @INFO
 * Please mention him / Milrato Development, when using this Code!
 * @INFO
 */
