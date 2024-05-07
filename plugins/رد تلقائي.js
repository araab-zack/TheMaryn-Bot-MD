let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 
  
 if (/^احا$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,`*بل التكت بتاعها 🐧*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  }

   if (/^زيرو|زيرو/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*تكلم ياقلب زيرو من جوا 🥺*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
   }
   
   if (/^منور|منوره$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*بنوري 🥺💔*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
   }
    if (/^مين عمك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*عمي هو لايت طبعا 🫶🏻💗*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
    } 

    if (/^بوت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*اسمي زيرو يانجم 💗*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
      
    }
 } 
 return !0 } 
 export default handler
