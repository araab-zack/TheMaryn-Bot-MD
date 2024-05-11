let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^مارين$/i.test(m.text)) { 
 responses = [ 
 '*قلب مارين 🥹💗*'
 ]; 
 } else if (/^بوووت|بموووووووووت|بوت$/i.test(m.text)) { 
     responses = [ 
'*اسمي مارين ياحتة 🥹💗*'
     ]; 
   } else if (/^سلام عليكم$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام ورحمت الله وبركاته 🐦*',  
     ];
 }else if (/^تست$/i.test(m.text)) { 
     responses = [ 
       '*شغالة شغالة تست خلص انت بس 🐦*',  
     ];
 }
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
