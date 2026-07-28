/*
 YANG SEBAR YATIM 
    AWOKAWOK
    
 # SCRIPT ORI ZYNXZO V12/XII
 - DI LARANG RENAME
 - DI LARANG MEMPERJUAL
 - DI LARANG MEMPER SEBAR
 - DI LARANG MEREBUT ISTRI TETANGGA
 
 # THANK YOU
    ES TEAMS
    
 # NOTE
    SEMOGA KALIAN MEMAHAMI LARANGAN DI ATAS
*/
require("./database/global")

const func = require("./database/place")
const http = require("http")
const readline = require("readline");
const usePairingCode = true
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
const resetSession = () => {
try { fs.rmSync('./session', { recursive: true, force: true }) } catch (e) {}
}

const PORT = process.env.PORT || 3000
http.createServer((req, res) => {
res.writeHead(200, { "Content-Type": "text/plain" })
res.end("STINGER-V4 is running")
}).listen(PORT, () => console.log(chalk.green(`Keep-alive server listening on port ${PORT}`)))

if (process.env.SELF_URL) {
setInterval(() => {
axios.get(process.env.SELF_URL).catch(() => {})
}, 10 * 60 * 1000)
}

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()
    console.log(chalk.red.bold('S꙲    T꙲    I꙲    N꙲    G꙲    E꙲    R꙲    -V꙲    4꙲    \n\nSTINGER-V4\n\nCreated By : ES TEAMS\nTelegram : @esteams24\nSubscribe Youtube : @esteams'))
const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "fatal" }),
auth: state,
browser: Browsers.ubuntu('Chrome')
}
const zyn = func.makeWASocket(connectionOptions)
store.bind(zyn.ev)
zyn.ev.on('creds.update', saveCreds)

if(usePairingCode && !zyn.authState.creds.registered) {
		const rawNumber = process.env.PHONE_NUMBER
			? process.env.PHONE_NUMBER
			: await question(chalk.green('\nEs Teams said you should Enter Your Number\nNumber : '));
		const phoneNumber = rawNumber.replace(/[^0-9]/g, '')
		await sleep(5000)
		const code = await zyn.requestPairingCode(phoneNumber)
		console.log(chalk.green(`Stinger-V4 Pairing Code : ${code} `))

	}

zyn.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (reason === DisconnectReason.badSession || reason === DisconnectReason.loggedOut) {
console.log(color(`Session rejected by WhatsApp. Clearing session files.`, 'deeppink'))
try { zyn.logout().catch(() => {}) } catch (e) {}
resetSession()
console.log(color(`Not auto-retrying, to avoid WhatsApp rate limits. Redeploy when ready to pair again.`, 'deeppink'))
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
try { zyn.logout().catch(() => {}) } catch (e) {}
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (zyn.authState.creds.registered) {
console.log(color('[SYSTEM]', 'white'), color(`Connection closed (${reason}), reconnecting...`, 'deeppink'))
await sleep(3000)
startSesi()
} else {
console.log(color(`Connection closed (${reason}) before pairing completed. Redeploy to request a new code.`, 'deeppink'))
}
} else if (connection === "connecting") {
start(`1`, `Connecting...`)
} else if (connection === "open") {
success(`1`, `STINGER V4 HAS BEEN SUCCESSFULLY CONNECTED`)
zyn.sendMessage(`${global.owner}@s.whatsapp.net`, { text: `\`💫𝐇𝐢 𝐄𝐒 𝐓𝐄𝐀𝐌𝐒💫\`
  💥𝐒𝐭𝐢𝐧𝐠𝐞𝐫-𝐕𝟒 𝐡𝐚𝐬 𝐣𝐮𝐬𝐭 𝐛𝐞𝐞𝐧 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝 𝐭𝐨 𝐦𝐲 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐀𝐜𝐜𝐨𝐮𝐧𝐭💥`})
if (autoJoin) {
zyn.groupAcceptInvite(codeInvite)
}
}
})

zyn.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return zyn.readMessages([m.key])
if (!zyn.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = func.smsg(zyn, m, store)
require("./STINGER-V4")(zyn, m, store)
} catch (err) {
console.log(err)
}
})

zyn.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = zyn.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

zyn.public = true

return zyn
}

startSesi()

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err)
})