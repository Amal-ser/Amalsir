const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.ibb.co/Mnc6Gqm/BotLogo.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bot Name: Red-Alpha*

*Creator number : wa.me/94740979220?text=Hi%20Red%20Alpha.%20*

 *To check update .update   To update Bot .update now*

 *Bot Chat Group : https://chat.whatsapp.com/Jx7f5x3wSU7D8a9ntdFB3j*
     
 *My Telegram: https://t.me/realredalpha*

 *Yt_PASSWORD: _________(afamk)*

 *githublink : https://github.com/MhmdMukarram/RED_ALPHA*

 *Thanks For Use Red Alpha Bot 🥰*
`}) 

}));
