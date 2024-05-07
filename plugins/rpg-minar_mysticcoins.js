const handler = async (m, {conn, isPrems}) => { // lastmiming
  const user = global.db.data.users[m.sender];
  const premium = user.premium;
  const minar = `${pickRandom(['يا له من محترف 😎 لقد استخرجت',
    '🌟✨ باهِر!! لقد حصلت',
    'رائع!! أنت عامل منجم عظيم ⛏️ تحصل عليه',
    'لقد قمت بالتعدين!!',
    '😲 لقد تمكنت من استخراج كمية من',
    'سوف يزيد دخلك بفضل حقيقة أنك قمت بالتعدين',
    '⛏️⛏️⛏️⛏️⛏️ التعدين',
    '🤩 نعم!!! الآن لديك',
    'المئذنة على جانبك، ولهذا السبب تحصل عليها',
    '😻 حظ ميناr',
    '♻️ لقد تم إنجاز مهمتك، وتمكنت من مهمتي',
    '⛏️ لقد أفادك التعدين',
    '🛣️ لقد عثرت على مكان ومن خلال التعدين قال المكان الذي تحصل عليه',
    '👾 بفضل حقيقة أنك قمت بتعدين دخلك يزيد',
    'تهانينا!! الآن لديك', '⛏️⛏️⛏️ لقد حصلت'])}`;
  const pp = 'https://png.pngtree.com/thumb_back/fw800/background/20220428/pngtree-cartoon-mining-game-design-composition-with-different-mining-equipment-inside-the-image_1108471.jpg';
  const aqua = `${pickRandom([0, 2, 3, 1, 5])}` * 1;
  const aquapremium = `${pickRandom([2, 4, 6, 7, 5, 9])}` * 1;
  const rock = `${pickRandom([6, 9, 0, 12, 2])}` * 1;
  const rockpremium = `${pickRandom([13, 9, 17, 20, 25])}` * 1;
  const pancingan = `${pickRandom([1, 0, 2, 1, 0, 0, 0])}` * 1;
  const pancinganpremium = `${pickRandom([1, 3, 4, 9, 2, 5, 8])}` * 1;
  const recompensas = {aqua: premium ? aquapremium : aqua, rock: premium ? rockpremium : rock, pancingan: premium ? pancinganpremium : pancingan};
  const money = `${pickRandom([100, 200, 250, 300, 370, 400, 450, 480, 500, 510, 640, 680, 704, 760, 800, 840, 880, 900, 1000, 1059, 1080, 1100, 1190, 1230, 1380, 1399, 1290, 1300, 1340, 1350, 1590, 1400, 1450, 1700, 1800, 1900, 2000, 0, 0, 10, 1, 99, 999, 1789, 1430])}` * 1;
  const moneypremium = `${pickRandom([500, 600, 700, 800, 900, 1000, 1050, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1950, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3400, 3500, 3600, 3700, 3800, 3850, 3900, 3950, 4000])}` * 1;
  const time = user.lastcoins + 600000; // 10 min
  if (new Date - user.lastcoins < 600000) return await conn.reply(m.chat, `*⏱️ انتظر ${msToTime(time - new Date())} لمواصلة التعدين ${global.rpgshopp.emoticon('money')}⛏️*`, m);
  user.money += premium ? moneypremium : money;
  let texto = '';
  for (const reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue;
    user[reward] += recompensas[reward];
    texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`;
  }
  function _0x5adb(_0x54b7e3,_0x17e035){const _0x5adb77=_0x17e0();_0x5adb=function(_0x4dd60,_0x4da4b9){_0x4dd60=_0x4dd60-0x0;let _0x55362c=_0x5adb77[_0x4dd60];return _0x55362c;};return _0x5adb(_0x54b7e3,_0x17e035);}function _0x17e0(){const _0x4e4f71=['\x32\x39\x37\x39\x32\x36\x31\x48\x4f\x77\x4f\x4d\x49','\ud83c\udf9f\ufe0f\x20\u0645\u0645\u064a\u0632','\x34\x37\x33\x39\x36\x32\x34\x72\x77\x6b\x64\x6f\x6b','\x36\x37\x32\x34\x38\x34\x48\x75\x71\x67\x6b\x53','\x0a\x0a\ud83c\udf9f\ufe0f\x20\ud835\udde3\x20\ud835\udde5\x20\ud835\uddd8\x20\ud835\udde0\x20\ud835\udddc\x20\ud835\udde8\x20\ud835\udde0\x20\u21e2\x20','\x39\x78\x51\x46\x57\x75\x71','\x6d\x79\x73\x74\x69\x63\x2e\x6a\x70\x67','\x31\x30\x36\x38\x36\x31\x35\x73\x46\x46\x63\x67\x54','\x39\x31\x35\x32\x32\x32\x30\x71\x4e\x45\x49\x64\x67','\x6d\x6f\x6e\x65\x79','\x2a\x0a\x0a\ud83c\udf41\u062e\u0631\u0641\u064a\x0a','\x33\x36\x31\x4f\x6a\x44\x43\x75\x45','\x65\x6d\x6f\x74\x69\x63\x6f\x6e','\x2a\x0a\x2a','\x33\x37\x36\x34\x69\x76\x70\x79\x70\x62','\x37\x4c\x70\x44\x41\x6c\x76','\x31\x30\x50\x4a\x5a\x66\x6a\x42','\x63\x68\x61\x74','\x32\x38\x33\x39\x32\x34\x38\x73\x4e\x77\x61\x4d\x62','\x0a\u1d0b\u1d00\u0274\u1d07\u1d0b\u026a\x20\u0299\u1d0f\u1d1b\u00b2\u2070\u00b9\u2075\u2075\u2074\u2075\u2078\u00b2\u2078\u2075\u00b9','\x73\x65\x6e\x64\x46\x69\x6c\x65'];_0x17e0=function(){return _0x4e4f71;};return _0x17e0();}const _0x19dad7=_0x5adb;(function(_0x32454b,_0x56fe75){const _0x6b3dcb=_0x5adb;const _0x35fbce=_0x32454b();while(!![]){try{const _0x2b7f1c=parseInt(_0x6b3dcb(0x13))/0x1*(parseInt(_0x6b3dcb(0x1))/0x2)+-parseInt(_0x6b3dcb(0xd))/0x3*(-parseInt(_0x6b3dcb(0xb))/0x4)+-parseInt(_0x6b3dcb(0xf))/0x5+-parseInt(_0x6b3dcb(0x5))/0x6*(-parseInt(_0x6b3dcb(0x2))/0x7)+-parseInt(_0x6b3dcb(0xa))/0x8+-parseInt(_0x6b3dcb(0x8))/0x9*(-parseInt(_0x6b3dcb(0x3))/0xa)+-parseInt(_0x6b3dcb(0x10))/0xb;if(_0x2b7f1c===_0x56fe75){break;}else{_0x35fbce['push'](_0x35fbce['shift']());}}catch(_0x2689cb){_0x35fbce['push'](_0x35fbce['shift']());}}}(_0x17e0,0x5566e));const text='\x2a'+(premium?_0x19dad7(0x9):'\ud83c\udd93\x20\u0645\u0633\u062a\u062e\u062c\u0645\x20\u0639\u0627\u062f\u064a')+_0x19dad7(0x0)+minar+'\x2a\x0a\x2a'+money+'\x20'+global['\x72\x70\x67\x73\x68\x6f\x70'][_0x19dad7(0x14)](_0x19dad7(0x11))+_0x19dad7(0x12)+texto+_0x19dad7(0xc)+(premium?'\u2705':'\u274c')+'\x0a'+wm+_0x19dad7(0x6);await conn[_0x19dad7(0x7)](m[_0x19dad7(0x4)],pp,_0x19dad7(0xe),text);
  /* conn.sendButton(m.chat, `*${premium ? '🎟️ Recompensa Premium' : '🆓 Recompensa Gratis'}*\n*${minar}*\n*${money} ${global.rpgshop.emoticon('money')}*`, `🍁 𝗕 𝗢 𝗡 𝗢\n` + texto + `\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, pp, [
['𝙼𝙸𝙽𝙰𝚁 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 💎', `#minar`],
['𝚅𝙾𝙻𝚅𝙴𝚁 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 ☘️', `#menu`]
], m,)*/
  user.lastcoins = new Date * 1;
};
handler.help = ['minar2'];
handler.tags = ['gata'];
handler.command = ['كوينز', 'miming2', 'تعدين 2', '2تعدين', 'minarcoins', 'minarmystic'];
handler.fail = null;
handler.exp = 0;
export default handler;
function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return minutes + ' m y ' + seconds + ' s ';
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
