//base by DGXeon (Xeon Bot Inc.)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "2347015667458"
global.ownername = "𝞛𝞓𝙎𝙏𝞢𝞒  𝞗𝞗𝙂𝙒𝞓𝙔 🕊"
global.ytname = "YT: Xeon"
global.socialm = "GitHub: Oogway106"
global.location = "nigeria, lagos, abuja"

global.ownernumber = '2347015667458'  //creator number
global.ownername = '𝞛𝞓𝙎𝙏𝞢𝞒  𝞗𝞗𝙂𝙒𝞓𝙔 🕊' //owner name
global.botname = '𝞗𝞗𝙂𝙒𝞓𝙔 𝞑𝞗𝙏' //name of the bot

//sticker details
global.packname = '𝞛𝞓𝙎𝙏𝞢𝞒 '
global.author = '𝞗𝞗𝙂𝙒𝞓𝙔 🕊️'

//console view/theme
global.themeemoji = '🕊️'
global.wm = "Oogway Bot Inc."

//theme link
global.link = ''

//custom prefix
global.prefa = ['!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = false //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v4'

//text bug
global.xbugtex = {
xtxt: '🕊️𝞗𝞗𝙂𝙒𝞓𝙔 𝞑𝞗𝙏🕊️',
}
global.bimg = '//https://telegra.ph/file/5f27cae925aed4283c867.jpg
//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./AstaMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
