import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './Menu.png'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/.')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
مرحبا بك/ي معاك/ي 𝑍𝐸𝑅𝛩-𝐵𝛩𝑇
⎔ ⋅ ───━ •﹝🔮﹞• ━─── ⋅ ⎔
قسم الجروبات 🔮
⎔ ⋅ ───━ •﹝🔮﹞• ━─── ⋅ ⎔
𝑍𝐸𝑅𝛩-𝐵𝛩𝑇
⎔ ⋅ ───━ •﹝🔮﹞• ━─── ⋅ ⎔
👻|ضيف
👻|الاشباح
👻|طرد
👻|منشني
👻|ترقية
👻|اعفاء
👻|انذار
👻|حذف_انذار
👻|حذف
👻|منشن
👻|عملات
👻|مخفي
👻|المشرفين
👻|لمنشن
👻|بروفايل
👻|الجروب
👻|دعوه
👻|تغيير_اللينك
👻|لفل
👻|جروب
👻|الترحيب
👻|المغادره
👻|جروب قفل و فتح
👻|خط
👻|توب
👻|لينك
👻|يومي
👻|الماس
👻|ترتيب_البنك
👻|شراء
👻|هجوم
⎔ ⋅ ───━ •﹝🔮﹞• ━─── ⋅ ⎔
قسم الدين الاسلامي 🕋
⎔ ⋅ ───━ •﹝🔮﹞• ━─── ⋅ ⎔
🕋سورة
🕋حديث
🕋قران
🕋الله
🕋ايات
⎔ ⋅ ───━ •﹝🔮﹞• ━─── ⋅ ⎔
قسم الترفيه 🕹
⎔ ⋅ ───━ •﹝🔮﹞• ━─── ⋅ ⎔
♟️ اكس او
♟️ كت
♟️ صراحه
♟️ ذكاء
♟️ سيارات
♟️ غباء
♟️ جمال
♟️ الحب
♟️ لو
♟️ هل
♟️ رونالدو
♟️ ميسي
♟️ احزر
♟️ تفكيك
♟️ ميمز
♟️ دمج
♟️ زواج
♟️ طلاق
♟️ علم
♟️ تاج
♟️ حكمه
♟️ ميمز
♟️ سؤال
⎔ ⋅ ───━ •﹝🔮﹞• ━─── ⋅ ⎔
قسم التنزيلات 🛡
⎔ ⋅ ───━ •﹝🔮﹞• ━─── ⋅ ⎔
⛓️‍💥 انستغرام
⛓️‍💥 جوجل
⛓️‍💥 لريك
⛓️‍💥 ويكيبيديا
⛓️‍💥 انستا
⛓️‍💥 اسم_الاغنية
⛓️‍💥 فيس
⛓️‍💥 بين
⛓️‍💥 ميديافاير
⛓️‍💥 شغل
⛓️‍💥 تيكتوك
⛓️‍💥 تويتر
⛓️‍💥 اغنية
⛓️‍💥 بحث
⛓️‍💥 فيديو
⛓️‍💥 تطبيق
⛓️‍💥 صوره
⛓️‍💥 2صوره
⎔ ⋅ ───━ •﹝🔮﹞• ━─── ⋅ ⎔
قسم التحويلات 🌀
⎔ ⋅ ───━ •﹝🔮﹞• ━─── ⋅ ⎔
🌀 ملصق
🌀 سرقة
🌀 لفيديو
🌀 لصورة
🌀 دائري
🌀 لرابط
🌀 لانمي
🌀 تخيل
🌀 مكس
🌀 لجواهر
🌀 ستك
🌀 تلجراف
🌀 لكرتون
🌀 باركود
⎔ ⋅ ───━ •﹝🔮﹞• ━─── ⋅ ⎔
قسم المطور 🪭
⎔ ⋅ ───━ •﹝🔮﹞• ━─── ⋅ ⎔
🔮 ضيف_بريميام
🔮 حذف_بريميام
🔮 الحاله
🔮 ريستارت
🔮 بان
🔮 الغاء_البان
🔮 اطفاء
🔮 الحاله
🔮 تفعيل
🔮 المبندين
🔮 إعادة
🔮 أدخل
🔮 ضيف_اكس_بي
🔮 ضيف_جواهر
⎔ ⋅ ───━ •﹝🔮﹞• ━─── ⋅ ⎔
قسم الصوتيات 🎧
⎔ ⋅ ───━ •﹝🔮﹞• ━─── ⋅ ⎔
🎧 عميق
🎧 منفوخ
🎧 تخين
🎧 صاخب
🎧 سريع
🎧 تخينن
🎧 رفيع
🎧 روبوت
🎧 بطيء
🎧 ناعم
🎧 سنجاب
⎔ ⋅ ───━ •﹝🔮﹞• ━─── ⋅ ⎔
𝑍𝐸𝑅𝛩-𝐵𝛩𝑇🔮
⎔ ⋅ ───━ •﹝🔮﹞• ━─── ⋅ ⎔

`.trim()
  function _0x271e(_0x585e31,_0x5be62a){const _0x5285bf=_0x5285();return _0x271e=function(_0x271eeb,_0x546fa1){_0x271eeb=_0x271eeb-0x14b;let _0x3a62ef=_0x5285bf[_0x271eeb];return _0x3a62ef;},_0x271e(_0x585e31,_0x5be62a);}const _0x4e30f3=_0x271e;(function(_0x45d301,_0x249f86){const _0x299f42=_0x271e,_0xa6dc11=_0x45d301();while(!![]){try{const _0x43980d=-parseInt(_0x299f42(0x152))/0x1*(-parseInt(_0x299f42(0x15a))/0x2)+-parseInt(_0x299f42(0x165))/0x3+-parseInt(_0x299f42(0x155))/0x4+-parseInt(_0x299f42(0x159))/0x5+-parseInt(_0x299f42(0x15f))/0x6+parseInt(_0x299f42(0x153))/0x7+-parseInt(_0x299f42(0x151))/0x8*(-parseInt(_0x299f42(0x162))/0x9);if(_0x43980d===_0x249f86)break;else _0xa6dc11['push'](_0xa6dc11['shift']());}catch(_0x155753){_0xa6dc11['push'](_0xa6dc11['shift']());}}}(_0x5285,0x80ad5));const _0x3c7cab=_0x5a1d;function _0x5a1d(_0x127219,_0x8164d8){const _0x2a2cb9=_0x42ca();return _0x5a1d=function(_0x216d2a,_0x4a9d9e){_0x216d2a=_0x216d2a-0x0;let _0x378819=_0x2a2cb9[_0x216d2a];return _0x378819;},_0x5a1d(_0x127219,_0x8164d8);}function _0x42ca(){const _0x2645eb=_0x271e,_0x6999d=['2409147cMTtvV',_0x2645eb(0x163),_0x2645eb(0x160),_0x2645eb(0x14b),_0x2645eb(0x14f),_0x2645eb(0x14e),'⁨𝐻𝐴𝑅𝐿𝐸𝑌\x20𝐿𝐼𝐺𝐻𝑇⁩👑',_0x2645eb(0x164),_0x2645eb(0x150),_0x2645eb(0x15e),_0x2645eb(0x158),_0x2645eb(0x154),_0x2645eb(0x161),_0x2645eb(0x14d),_0x2645eb(0x156),_0x2645eb(0x157)];return _0x42ca=function(){return _0x6999d;},_0x42ca();}(function(_0x3635b6,_0x3b32bc){const _0x192e57=_0x271e,_0x205d11=_0x5a1d,_0x1d713b=_0x3635b6();while(!![]){try{const _0x1b3ba5=parseInt(_0x205d11(0x5))/0x1+parseInt(_0x205d11(0x1))/0x2+-parseInt(_0x205d11(0xa))/0x3*(parseInt(_0x205d11(0x3))/0x4)+parseInt(_0x205d11(0x7))/0x5+-parseInt(_0x205d11(0xf))/0x6*(parseInt(_0x205d11(0xd))/0x7)+parseInt(_0x205d11(0x4))/0x8*(-parseInt(_0x205d11(0x9))/0x9)+-parseInt(_0x205d11(0xb))/0xa*(-parseInt(_0x205d11(0xe))/0xb);if(_0x1b3ba5===_0x3b32bc)break;else _0x1d713b['push'](_0x1d713b['shift']());}catch(_0x253319){_0x1d713b[_0x192e57(0x15d)](_0x1d713b[_0x192e57(0x15b)]());}}}(_0x42ca,0x772cd));let buttonMessage={'image':pp,'caption':str[_0x3c7cab(0xc)](),'mentions':[m[_0x3c7cab(0x8)]],'footer':''+wm,'headerType':0x4,'contextInfo':{'mentionedJid':[m['sender']],'externalAdReply':{'showAdAttribution':!![],'mediaType':_0x3c7cab(0x6),'mediaUrl':null,'title':_0x3c7cab(0x0),'body':null,'thumbnail':img,'sourceUrl':_0x3c7cab(0x2)}}};function _0x5285(){const _0x457c75=['8pGFtzC','shift','chat','push','4YbGMkZ','2173458sUjSul','trim','VIDEO','13419tEdVbu','70SxKSwY','406070MLYaeB','807702uYHems','2708027tOnEUS','sendMessage','3639410cLSfPv','6ZrUjVF','831853GQAjyu','https://www.atom.bio/harley_light','11256nSjlJp','18771cxbKaJ','2235688AIemto','322835aPaRGc','3153408uACRhj','sender','9LtUyCF','840496IPJeXP','2727075qoqzJt'];_0x5285=function(){return _0x457c75;};return _0x5285();}conn[_0x4e30f3(0x14c)](m[_0x4e30f3(0x15c)],buttonMessage,{'quoted':m});

    } catch {
        conn.reply(m.chat, '[❗خطاء❗]', m)
    }
}
handler.command = /^(اوامر|الاوامر)$/i
handler.exp = 20
handler.fail = null
export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
