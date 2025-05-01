/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'ALPHA;;;H4sIAAAAAAAAA61V246qSBT9lqlX7SN30KSTQQTBOyraOpmHAgoo5WZRiHjiT0wyz/OL8wkTtDvdyZlzTk8yPFWKqrXW3nvtXV9BmuECjVENel9BTvAZUtQsaZ0j0AP9MggQAW3gQwpBDwwNWxS86rCPQ9xxY3Y6qHmm3k8NtNye8QLXMeE6V6IaXPYMbm2Ql26MvR8AGo7KWTKPzWoBB+6J7aj9FZslZh9FVIkniipuBHKV5f1SfQa3BhFigtNQzyOUIALjMaoXEJPPyWfUudsNxclI37WC8BS09JZ+lTZanyWSJ5bdLTs/zAwSBonzOfljL8ro5eBGw8DX98h3RJuPmTwyNuQsGMN+N1Mn0GX7huM85Bc4TJFv+SilmNafzrs+xPFa5hd2P9h37F2k66NWsj2vL10zTMzNxKrcizCLO3ZcfU54J+9wnFX5hDX2e79zHNnRQbdXOzjPpuw11s2Dgw1l68sX66PwBXnzyvG/5F0ZqIfN/Kh159dDqMw7+Wb8wuGXJPMyzokvrNiyMKkOG53xPid/szbMrqDNFqa4pJarisHqMphWZ552Wtfl9EAU67iI/Utpe+/yIS3Jj1S+eMiaH9cHG+deuJW6fhHxYrlYuzkxwqTOAlVnl9x6iSt3ROmynGFOp9fMdg6BncRlP9ZjW8GtS2cisBfxRVtPRCa0n+8RHVFt+aDH3tqAoBAXlECKs7TZ4ximDaB/XiGPIHpPLzgL0ZGuR/WkrnzNna3jhdqypeplHw6gWyktPqyX9Tbb5Xn4DNogJ5mHigL5Ji5oRuopKgoYogL0frtXqgmaoCSjaIR90AMcL8iMKCiSoHDsr8WXKoK0gHn+JUUUtEFAsmSKQI+SErXB/QavqnKXURhGlDhFkXlD1oQmruTBtMYJKihMctBjZUFiWUlkmVv7fyOXpIEuGxzPD1RO4A1OVX5CLtx+b4MUXejDsU2eebYNAkwK6qRlHmfQf7Pz20/oeVmZ0lWdelqzQAT0PmwjSnEaFk04ZQqJF+Ez0hrtoBfAuEC3NvDRGXuowQN26ab+ivWXLvL3roQcdvlyDptaRVn6OMLIHie7gfTkS13+SZCl4EnheeaJR0oXeqIsuiICTQoew6K5813vprY3952rr6CNZmD1dJhNx4VUYF4p7v57mA4R5L9l1oXesczX2RGlP8CFzuw4jdOq4pTFubWS+DU7ZOZJLtQfcR9mBr2v7wNay/w73mA42OujHWiq1fB8a4Ge/K0JUticBhosovqXX/7+648/G7LXSjQwPqIQx0VzZsEhVrYtfYFa10IdDlU9VLVQBe+Ve+v9R29pK2uXq+Hkssfjbbo/D/vhi1ahTdqfS7qXhPZm4LonXx4l6vO/gIAeqFOuBU10MmfLeJttypk6GbFUsNncbTnD6byi5tUUMkP2NetYe1OJOez8en82L1Gqj1RXEAw6fomCDXT0FSuQkT5xouq5YXs46COZHdm1Kjh0e+IoF6u23N2NO9rWEvpcebCYhVSf8iBeZedMsfk+8VYtvS5L1Y/UCxwmfRPHZ45TjxSeeE6YaOxlPFtE4WMq3adi/Poa4dd58fBbgNF9uL9W4qcVe7c+c2t/wHh9Lr5jr759xMOxbWnKdofjnHMv4c6oCjPeV+syMkeZbtgcJ6Wo3ofg1vR0HkMaZCQBPYDvrQTaIIYFVd+b99t5IChCGyS1mucrCulbzwO1+fqiDW7/ALonGfUICQAA';

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const antibot = process.env.ANTIBOT || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'true';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'true';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'true';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'true';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'true';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'false';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported

const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
