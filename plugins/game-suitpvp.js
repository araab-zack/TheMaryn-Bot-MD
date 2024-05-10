const timeout = 60000;
const poin = 500;
const poin_lose = -100;
const poin_bot = 200;
const handler = async (m, {conn, usedPrefix, text}) => {
  conn.suit = conn.suit ? conn.suit : {};
  if (Object.values(conn.suit).find((room) => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '*[❗] تصرف خاطئ *';
  const textquien = `*هتلاعب مين ؟ منشن الشخص الي هتلاعبه*\n\n*—◉ مثلا:*\n${usedPrefix}suit @${global.suittag}`;
  if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, {mentions: conn.parseMention(textquien)});
  if (Object.values(conn.suit).find((room) => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `*[❗] الشخص الي انت بتتحداه في لعبه اخري، انتظر حتي ينتهي من اللعب`;
  const id = 'suit_' + new Date() * 1;
  const caption = `🎮 مقص - ورقه - حجره 🎮\n\n—◉ @${m.sender.split`@`[0]} بيتحداك @${m.mentionedJid[0].split`@`[0]} في لعبه حجره ورقه مقص\n◉ مثلا "موافق" للموافقه\n◉ مثلا "غير موافق" للرفض\nريبلاي للرساله عشان اعرف`;
  const imgplaygame = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`;
  conn.suit[id] = {
    chat: await conn.sendMessage(m.chat, {text: caption}, {mentions: await conn.parseMention(caption)}),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `[ ⏳ ] الوقت خلص، تم الغاء اللعبه بسبب عدم الرد`, m);

      delete conn.suit[id];
    }, timeout), poin, poin_lose, poin_bot, timeout,
  };
};
handler.command = /^تحدي|suit(pvp)?$/i;
handler.group = true;
handler.game = true;
export default handler;
