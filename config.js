//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaf5x0eHFxP7JvSRRn1g";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaf5x0eHFxP7JvSRRn1g";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "27747815326";
global.sudo = process.env.SUDO || "27747815326";
global.owner = process.env.OWNER_NUMBER || "27747815326";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 2;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUtRcEh2SDhIdlVXOUFENDlGSHdmZDJETjM5dUVqQXZyNXNtMUFab3lIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2I3OEkvcEQ4eUVjVFQ2Nkx0Yno5MjlZdEtPWTlxazJpN2VVRDd3VThFMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRlRWait1aEg5SVJKbUFId0M0MmFZRTErb21IUVNqUSt4d0J0c2hwUWtjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJReDBZTzZHZ05jYjFzSWdWNEtNOXluSERKTTd5Y3VZREJtcGdIcE9KT1IwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtQSmg2cXN1T3A3bjBnRm5tcHJiTHBVZVphYjdZQmMvWWZIWlZ4ZFE2WGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFEaG5vbWM5WGxtRFV1UTB0WFBadm1wWkRib0lDR29ybkxDS1hNR0ZiRW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0Y5RFZxcStoUXFKdXJqRE1WSjZ5SUtFWlVzRG4vRzFmN2wxUUpPQ0dVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialZOVnJhOGpXNThrNUQ5WTFsS3RNSkpHV3pmTTU2UUN6U2VDSmo3MkNrQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVVTmNpZ3lOS3BtTWFnMGpWWmk0UWN5b3d6N2pNRGtkUWxORmRrYWxSTUdjUmtUazc2NTVidExoT3RicWkwUjFVN3BTOC8wb1h3UU0yblFKZHVzS0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgsImFkdlNlY3JldEtleSI6Ik5yQ1JkejhOKzdHSjdzMmlLcHh0MnlLeXY2QUZ3cHM4Z2ltTE1sck9RNjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkF2YWIwS0h1UzdDc2t0RTRSUDhCZFEiLCJwaG9uZUlkIjoiZWU3NjllODYtN2NhZS00OGNhLTk2OTQtN2QyZWY5MzQ5NDI1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik92SWRlbzUvRExzbHdJbXJXZEk2elZyS1NEOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5bmdHaGRXbTFURVUvVk5ZZWZQdUNpL2JOdWs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRUFMRUtWWTgiLCJtZSI6eyJpZCI6IjI3NzQ3ODE1MzI2OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiaXRzY3JhZnRlZTM2MCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTG1tK040R0VKMjh2YllHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieGIvd0s0UTg4NWp0cytWSGc3YllJUHFmMHZIZUN4R1FPVU5McDdDNStqYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiN3dBWnFkKys1a01xRTBYU1hEWXdFT3FNTDVCT3lzUS9EOHhwZ29peEhUU1ZNVmNxaURjTmg5V2lHcGg5RWc3OTlpQzBzblVWOHBXMHpraVYrakZ6Q2c9PSIsImRldmljZVNpZ25hdHVyZSI6InhNbXFvYTF1RzkzNU51L3BlT0NzaVpIS2ZCMmF2WGd5Y1Y1Z1kvbjUzbUcvMTdDMU04bFF0TWoydmwrVlRYSU9Iblg5MU0vYmtReE96MVQvcmpMUUJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc3NDc4MTUzMjY6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjVy84Q3VFUFBPWTdiUGxSNE8yMkNENm45THgzZ3NSa0RsRFM2ZXd1Zm8zIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0ODY2MDkxfQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "0",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "katakuri",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
