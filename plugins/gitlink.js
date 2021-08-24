const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://avatars.githubusercontent.com/u/89237109?v=4";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*•━━━━╼⤏Ꭺ𝙽𝚄Ꮇw𝙾𝙻⤎╾━━━•*
 

        ```Github link       http://github.com/Brutal-x7/Anu-mwol```
 

       ```Youtube channel link    https://youtube.com/channel/UCQtDdBO1TSWgHeu9LMQFabw```
 
 
       ```Owner number       http://Wa.me/+917356484508```
  
  
      
`}) 

})); 
