const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/w89FHm7.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bot Name: Amalser*

*Creator number : Wa.me/+919656813724?text=*Hey👀🖤**

 *To check update .update   To update Bot .update now*

 *YT CHANNEL : https://www.youtube.com/channel/UC0C4MiybHKd2vB26EylS-5A*
     
 *Instagram id: https://www.instagram.com/toxic_juggru/*

 *githublink : https://github.com/AK-JUGGRU/JUGGRUSERr*

 *JUGGRUSER New Acoount Git Link Old Account Is Flagged Hope you Enjoy This Thanku 🥰*
`})
}));
  


