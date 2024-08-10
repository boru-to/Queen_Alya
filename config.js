//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
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
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "27747815326";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0d4UkR2Ui95amEyWXEvUUVjeU9zcUI3WGE5UGt6V1l6UEpBZk80ekVGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3VibE1SaEd3SFNzcjBkQjY4T3IwSnV6YWVsK1BCTEVqYU1meWo4eEhGVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTCs2R1R0cUJpa083Sk1QRGRzaVJSdG4zNE9tbitodk1waE1WUFJYQ0ZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvMDNBRnpXcUl6NXdIZGxLZFEzSWI5R3NZTkpobitNMUNQRmtNQTJSNDI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklKeVRXS0hEcTlKeFdnNEJwYkptdkMyNGdqVE9adlhodkRqdktDeUtlMUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InIyNExGeFM2K1lZMG90dStaM0hkcGVGdmt4UlBGZUZZZEhGVFpXYkdEVDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0gzZjBFZDJOWnhNNTdUNmFiTTdnektGYWhNd2t6K2hvUmkzUzFGQXoyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVhEWkswRjJoZzZaNXdCOWNXMnNUSmxpcnJyZzVhbVJCUUJOeG5SeE5SZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhhZ0lWTjEvc2lUM2YzY05rN2wwZTJPanRscGE2d0dLTElobWlIZXNFbHoxZHlsLzNOMXVSZkVNenhNMVRqQURCN3EwOVgrSlpLZzNNOEJtNDhCaUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6InRZQnR2ZDJRc0Fyb3hLTDFHMEZXdjlMNXhiR1lvQ0dLTytDeldVWlRjcnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkpFTHJGc0tjVDdTekY3NlNxamdmMmciLCJwaG9uZUlkIjoiYTJjNTZkN2UtNmU4NS00NGFlLWFkMmItM2JhNGExODRhZmVmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5sdi9xNVlEd0VVK0lTRFcxVkVJNm1PTm04TT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZaCthQjJJajZveW5HUHpnRHBYcXN3eUIxbDg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiODFFTDFDQlEiLCJtZSI6eyJpZCI6IjI3NzQ3ODE1MzI2OjU4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPKzY1NUFDRUptaTBiVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBMmhSd080QjkxZ2Y1M0ZUQkR6Q21VZVN4dFpmZnhRVTl2V2liQzQyWEcwPSIsImFjY291bnRTaWduYXR1cmUiOiJSTmxpdjJlYmIzdFE3OXp4b043M1pNRTFUaDJkZHlyMEJHMVI3cmF5NjkycjQ2ZjJUanBrRktZYTM2YjJwa0VldS9LbVlPakZjMjVwVG5kOFpaeUxBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSXlES3RQMkdRWmVWNUV1L3pxSHJZZGo0NGNQaEZHaDcwRlRab1Q3UXljc1VMTHpicE5oUG81dmxsd21EMmRxY0ZHRVRMc1JCRG5nelBUUXVSeHF6Q0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzc0NzgxNTMyNjo1OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRTm9VY0R1QWZkWUgrZHhVd1E4d3BsSGtzYldYMzhVRlBiMW9td3VObHh0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzMDkzMjg2fQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "Katakuri Rengoku",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
