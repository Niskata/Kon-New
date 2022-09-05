let { telegraphUp } = require("../library/upload");
const fs = require('fs')
module.exports = anuplug = async(m, {anubis, text, command, args, usedPrefix }) => {
  const mquo = m.quoted || m;
  const quoted = mquo.mtype == "buttonsMessage"
      ? mquo[Object.keys(mquo)[1]]
      : mquo.mtype == "templateMessage"
      ? mquo.hydratedTemplate[Object.keys(mquo.hydratedTemplate)[1]]
      : mquo.mtype == "product"
      ? mquo[Object.keys(mquo)[0]]
      : m.quoted
      ? m.quoted
      : m;
  const mime = (quoted.msg || quoted).mimetype || "";
  const qmsg = quoted.msg || quoted;
  if (!/image/.test(mime) || !text) return m.reply(`Kirim/reply image/sticker dengan caption ${usedPrefix + command} text atas|text bawah`)
  atas = text.split("|")[0] ? text.split("|")[0] : "-";
  bawah = text.split("|")[1] ? text.split("|")[1] : "-";
  m.reply(mess.wait);
  let dwnld = await anubis.downloadAndSaveMediaMessage(qmsg, 'anubiskun');
  let json = await telegraphUp(dwnld);
  let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${json}`;
  let encmedia = await anubis.sendImageAsSticker(m.chat, smeme, m, {
    packname: global.packname,
    author: global.author,
  });
  await fs.unlinkSync(encmedia);
  await fs.unlinkSync(dwnld);
}
anuplug.help = ['stickermeme']
anuplug.tags = ['sticker']
anuplug.command = /^(stickermeme|smeme)/i