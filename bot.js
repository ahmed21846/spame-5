const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});







client.on("ready", () => {
let channel =     client.channels.get("500438836078182401")
setInterval(function() {
channel.send(`gfgffffffffffffhdl,fgbkl;jgl;kjhk;;;lfdfhlmاحلا مسااااااااااااااااااااا :joy:`);
}, 25)
})






// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
