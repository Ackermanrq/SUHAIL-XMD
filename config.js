const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250545402996";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_10_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MixcbiAgICAgICAgNTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDUxLFxuICAgICAgICA3MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4LFxuICAgICAgICA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNixcbiAgICAgICAgMTczLFxuICAgICAgICA1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjExLFxuICAgICAgICA0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA5OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDMxLFxuICAgICAgICA2MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0OSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA3MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NixcbiAgICAgICAgNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkwLFxuICAgICAgICAxOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDUsXG4gICAgICAgIDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI4LFxuICAgICAgICA0LFxuICAgICAgICA5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDksXG4gICAgICAgIDUxLFxuICAgICAgICA2NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5LFxuICAgICAgICAxOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDIsXG4gICAgICAgIDg3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM0LFxuICAgICAgICA0MixcbiAgICAgICAgMTEyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgODMsXG4gICAgICAgIDI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDM3LFxuICAgICAgICA2MixcbiAgICAgICAgMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAxLFxuICAgICAgICAyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYUJOSUxKeW1GUkhFa0lVNWU1WSt5eFc2QTArWElPZHlEWnlDMEV2cXBnQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYlZyY0RxR1hRcmVwdkE3eXRTaDBPQVwiLFxuICBcInBob25lSWRcIjogXCJiZjU2YjViYS0xZGY5LTQyYzQtYmY3NS01YmY3MmQ5ZjQyNWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgOTAsXG4gICAgICA3NyxcbiAgICAgIDIyOCxcbiAgICAgIDgsXG4gICAgICAxMTEsXG4gICAgICAyMTksXG4gICAgICAyMTQsXG4gICAgICAxNzIsXG4gICAgICAxMzcsXG4gICAgICAxOCxcbiAgICAgIDE4NSxcbiAgICAgIDkwLFxuICAgICAgMTkyLFxuICAgICAgNTAsXG4gICAgICAyNDgsXG4gICAgICAxOTUsXG4gICAgICAxOTUsXG4gICAgICAxMyxcbiAgICAgIDEwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDE1NixcbiAgICAgIDUsXG4gICAgICAxMzAsXG4gICAgICAxOTMsXG4gICAgICAzNixcbiAgICAgIDIwOSxcbiAgICAgIDEwOCxcbiAgICAgIDEwOCxcbiAgICAgIDE3OSxcbiAgICAgIDEwMixcbiAgICAgIDIxOSxcbiAgICAgIDE3OSxcbiAgICAgIDcwLFxuICAgICAgOTksXG4gICAgICA3OSxcbiAgICAgIDI0NixcbiAgICAgIDc4LFxuICAgICAgMTIyLFxuICAgICAgMTQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldOQVRNVFZCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU0NTQwMjk5NjozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc1OTMwNTE3NDk1OTIxOjM0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0plU2xOTUhFSTdzNExzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ3AzdHhWdGJac3BKRVJCSVk4cWkvdzE0Q2NIRHJLRW9mRjNESlY1THdBZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkNkRZVXBsdE95ZTZDanRUUmMyMkRVeDdiR0N0alJaNS9vMmFqYlJaYUluelFDRVpzTllocFFCWU1salV0cmFrNmlNZkxodXVxbFM4U21hN0I5WnBEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzYlRtSDFSY2VWVlNTTnZMQi9sMTN0M0hJR3VaRDdYdFNvUDc1a0ZEWmpFaDlpVlJBaFc2aHRoTmZDcVlWSTQrL3YzRDdHaWdaTmszazdiUjk3MUVDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU0NTQwMjk5NjozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTkzMTQxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhweVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSHB5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiK1FXY2F2RFZaaldyL29XNWh6YmEvemR6bE9ZT01DSFFWaGVHQmI3T0oydz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDUzNDQxODE1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU5MzE0MTU0MjFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
