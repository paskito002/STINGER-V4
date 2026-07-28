require("./global")

const mess = {
   wait: "`[ # ] Processing`",
   success: "`[ # ] Successfu, very good`",
   on: "*`[ On Feature ]` - Already active*", 
   off: "*`[ Off Feature ]` - Already off*",
   query: {
       text: "`[ # ] Where is the text?`",
       link: "`[ # ] Where is the Link?`",
   },
   error: {
       fitur: "`[ # ] This feature is encountring error, chat developer so it csn be fixed`",
   },
   only: {
       group: "`[ # ] This feature can only work in groups`",
       private: "`[ # ] This feature can only be accessed in chats`",
       owner: "`[ # ] Acting Cool`",
       admin: "`[ # ] This feature can only be accessed by admin`",
       badmin: "`[ # ] Can't do that, make the bot an admin first`",
       premium: "`[ # ] Contact ES TEAMS for premium usage`",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})