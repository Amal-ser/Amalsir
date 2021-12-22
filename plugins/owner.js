const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════🔴💎RED ALPHA💎🔴═════╗*\n           \n*RED-ALPHA*\n\n*owner MHMD MUKARRAM - https://wa.me/message/5CCUQ6RG7BKBN1*\n* *\n🔰WHATSAPP SUPPORT GROUP :- *https://chat.whatsapp.com/Jx7f5x3wSU7D8a9ntdFB3j            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷CREATOR: MHMD MUKARRAM*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n🔴💎═RED ALPHA OWNER MHMD MUKARRAM═💎🔴*\n\n*💘 https://github.com/MhmdMukarram/Red-Alpha*\n*     *\nMY BOT DEVOLOPER*\n\n*⚜https://github.com/mhmdmukrim/mhmdmukrim*    *\n\n⚜WHATSAPP CHAT GROUP LINK 2:- https://chat.whatsapp.com/Jx7f5x3wSU7D8a9ntdFB3j*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════🔴💎RED ALPHA💎🔴═════╗*\n           \n*⚜═RED ALPHA═⚜*\n\n*owner MHMD MUKARRAM - https://wa.me/message/5CCUQ6RG7BKBN1*\n* *\n🔰WHATSAPP CHAT GROUP: https://chat.whatsapp.com/Jx7f5x3wSU7D8a9ntdFB3j*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷CREATOR: MHMD MUKARRAM*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n🔴💎═RED ALPHA OWNER MHMD MUKARRAM═💎🔴*\n\n*💘 https://github.com/MhmdMukarram/Red-Alpha*\n*     *\n💓MY BOT DEVOLOPER*\n\n*⚜https://github.com/mhmdmukrim/mhmdmukrim*    *\n\n⚜WHATSAPP CHAT GROUP LINK 2:- https://chat.whatsapp.com/Jx7f5x3wSU7D8a9ntdFB3j*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }
