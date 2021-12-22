    const asena = require('../events');

    const {MessageType} = require('@adiwajshing/baileys');

    const OWNER = "it sends details of owner"

    const GIT = "it sends links"

    const Config = require('../config');

    if (Config.WORKTYPE == 'private') {
        
    asena.addcommand({pattern: 'owner', fromMe: true, dontAdCommandList: true, desc: 'Details For Coder'}, (async (message, match) => {
    var r_text = new Array ();
    r_text[0] = "https://i.ibb.co/vcxnxVL/IMG-20211222-WA0000.jpg";
    r_text[1] = "https://i.ibb.co/vcxnxVL/IMG-20211222-WA0000.jpg";
    var i = Math.floor(2*Math.random())
    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '     *CODED BY Mhmd Mukarram*\n\n❀Contact me: https://t.me/realredalpha\n\n\nWhatsApp Group link 👇\n\n*https://chat.whatsapp.com/Fr7j28pVwoB7GXlnaNyI9k*\n\n\n👑My Github Hub Profile👑\n\n*https://github.com/MhmdMukarram*\n\n\nMy Bot Github\n\nhttps://github.com/MhmdMukarram/RED_ALPHA\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ ᴿᴱᴰ ᴬᴸᴾᴴᴬ'})
    }));
    asena.addcommand({pattern: 'owner', fromMe: false, dontAdCommandList: true, desc: 'Details For Coder'}, (async (message, match) => {
    var r_text = new Array ();
    r_text[0] = "https://i.ibb.co/vcxnxVL/IMG-20211222-WA0000.jpg";
    r_text[1] = "https://i.ibb.co/vcxnxVL/IMG-20211222-WA0000.jpg";
    var i = Math.floor(2*Math.random())
    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '     *CODED BY Mhmd Mukarram*\n\n❀Contact me: https://t.me/realredalpha\n\n\nWhatsApp Group link 👇\n\n*https://chat.whatsapp.com/Fr7j28pVwoB7GXlnaNyI9k*\n\n\n👑My Github Hub Profile👑\n\n*https://github.com/MhmdMukarram*\n\n\nMy Bot Github\n\nhttps://github.com/MhmdMukarram/RED_ALPHA\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ ᴿᴱᴰ ᴬᴸᴾᴴᴬ'})
    }));
}
}
