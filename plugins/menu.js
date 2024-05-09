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
♟️ سوال
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
   const _0x3c7cab = _0x5a1d;

        function _0x5a1d(_0x1b92fa, _0x42ca62) {
            const _0x5a1d39 = _0x42ca();
            _0x5a1d = function (_0x28d0f5, _0x342e36) {
                _0x28d0f5 = _0x28d0f5 - 0x0;
                let _0x4abc25 = _0x5a1d39[_0x28d0f5];
                return _0x4abc25;
            };
            return _0x5a1d(_0x1b92fa, _0x42ca62);
        }

        function _0x42ca() {
            const _0xe1e20e = ['2409147cMTtvV', '70SxKSwY', 'trim', '2708027tOnEUS', '831853GQAjyu', '6ZrUjVF', '⁨𝐻𝐴𝑅𝐿𝐸𝑌 𝐿𝐼𝐺𝐻𝑇⁩👑', '406070MLYaeB', 'https://www.atom.bio/harley_light', '4YbGMkZ', '840496IPJeXP', '322835aPaRGc', 'VIDEO', '3639410cLSfPv', 'sender', '9LtUyCF'];
            _0x42ca = function () {
                return _0xe1e20e;
            };
            return _0x42ca();
        }(function (_0x2979d9, _0x233f8f) {
            const _0x32315e = _0x5a1d;
            const _0x3b1890 = _0x2979d9();
            while (!![]) {
                try {
                    const _0x2cc4d6 = parseInt(_0x32315e(0x5)) / 0x1 + parseInt(_0x32315e(0x1)) / 0x2 + -parseInt(_0x32315e(0xa)) / 0x3 * (parseInt(_0x32315e(0x3)) / 0x4) + parseInt(_0x32315e(0x7)) / 0x5 + -parseInt(_0x32315e(0xf)) / 0x6 * (parseInt(_0x32315e(0xd)) / 0x7) + parseInt(_0x32315e(0x4)) / 0x8 * (-parseInt(_0x32315e(0x9)) / 0x9) + -parseInt(_0x32315e(0xb)) / 0xa * (-parseInt(_0x32315e(0xe)) / 0xb);
                    if (_0x2cc4d6 === _0x233f8f) {
                        break;
                    } else {
                        _0x3b1890['push'](_0x3b1890['shift']());
                    }
                } catch (_0x3284ad) {
                    _0x3b1890['push'](_0x3b1890['shift']());
                }
            }
        }(_0x42ca, 0x772cd));
        let buttonMessage = {
            'image': pp,
            'caption': str[_0x3c7cab(0xc)](),
            'mentions': [m[_0x3c7cab(0x8)]],
            'footer': '' + wm,
            'headerType': 0x4,
            'contextInfo': {
                'mentionedJid': [m['sender']],
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'mediaType': _0x3c7cab(0x6),
                    'mediaUrl': null,
                    'title': _0x3c7cab(0x0),
                    'body': null,
                    'thumbnail': img,
                    'sourceUrl': _0x3c7cab(0x2)
                }
            }
        };
        conn.sendMessage(m.chat, buttonMessage, {
            quoted: m
        })

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
