require("./database/module")

//GLOBAL PAYMENT
global.storename = "STINGER-V4"
global.dana = "2347047787798"
global.qris = "https://i.ibb.co/BnYRXcw/STINGER-V4.jpg"


// GLOBAL SETTING
global.owner = "2347047787798"
global.namabot = " S҉ T҉ I҉ N҉ G҉ E҉ R҉- V҉ 4҉"
global.nomorbot = "2349037524605"
global.namaCreator = "ES TEAMS"
global.linkyt = "https://youtube.com/@esteams"
global.autoJoin = false
global.antilink = false
global.versisc = '4.0.1'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://i.ibb.co/BnYRXcw/STINGER-V4.jpg'
global.isLink = 'https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y'
global.packname = "ES TEAMS"
global.author = "ES TEAMS"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
