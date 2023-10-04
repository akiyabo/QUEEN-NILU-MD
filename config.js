/*
WHATSAPP BOT BY HATHI SEEYA 
WHATSAPP - 94779848097
SUPPORT GROUP - https://chat.whatsapp.com/BUnJqGZMD6VD9H34o7WG77
YOUTUBE - https://youtube.com/@gaming_ben_yt?si=8kBAxJC0yuDT8N6M
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;N3IAGB6Q#do5qv-NY7ilzJEkfyjP8iKcYn33Au-hA0JI0hX4X4mA' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://akiaki_user:9EZswtVdBqf6NDzM3YYpEBL6eBzH3UQl@dpg-ckeonsdtj22c738tjg00-a.frankfurt-postgres.render.com/akiaki'



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94779848097'

global.OWNER_NAME = 'seeya_X'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'true' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'HATHI SEEYA'
 
global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@hathi_seeya 🤹‍♂️' //sticker

global.FOOTER = 'HATHI SEEYA 2023 '

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'HATHI SEEYA  © 2023' // Caption

global.ALIVELOGO = 'https://drive.google.com/file/d/1YePWoPNn3d_zgZ_BLODwWPIvplLrsvut/view?usp=drive_link' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'BOT INNAWOO...MARILA NATHOOO...' // Set Alive Message

global.MAX_SIZE = '400' // Bot Uloading Max size 

global.ANTI_BAD = 'true' // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = 'false' //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/BUnJqGZMD6VD9H34o7WG77' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'false' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: HATHI SEEYA" //ur yt chanel name
global.socialm = "GitHub: SNOOPA" //ur github or insta name
global.location = "Srilanka, colombo" //ur location

