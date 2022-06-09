const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/w89FHm7.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bot Name: TINSON SIR*

*Creator number : wa.me/917994088426?text=Hii%20TINSON%20SIR.%20*

 *To check update .update   To update Bot .update now*

 *TELEGRAM SUPPORT  : https://t.me/cinemapranthangroup*
     
 *TELEGRAM id: t.me/TinsonThomas_22*

 *BOT MAKING + Yt_PASSWORD: _________( https://youtube.com/channel/UCT7x7a4HJ72bbMNx49Z9DTA ) WATCH THIS VIDEO CREFULLY FOR GRTTING BOT MAKING PASSWORD*

 *githublink : BIRIYANI SHOP CLOSED *

 *TINSON SIR New Acoount Git Link Old Account Is Flagged Hope you Enjoy This Thanku 🥰*
`}) 

}));
