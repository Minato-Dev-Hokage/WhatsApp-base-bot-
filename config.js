/*
Base Script Bot Whatsapp By Minato official
*/

//Settings
global.owner = ["242068906671"] 
global.bot = "Base bot" 
global.namebot = "Base bot" 
global.nameown = "Minato Dev" 

//Log
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
