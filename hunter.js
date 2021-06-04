var aoi = require('aoi.js')
var fs = require('fs')
var bot = new aoi.Bot({
	token:process.env.token,
	prefix:"PREFİX",
})
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {	
	const command = require(`./komutlar/${file}`)
	bot.command({
		name: command.name,
		code: command.code
	})
}
bot.command({
  name:"ping",
  code:`**Pingim $pingms **`
})
bot.status({
  text: "OYNUYOR BÖLÜMÜ",
  type: "WATCHING",//ŞU AN İZLİYOR AYARLI  | PLAYING = OYNUYOR  | LISTENING  =  DİNLİYOR
  status: "dnd",//ŞU AN RAHATSIZ ETMEYİNDE  | onlıne | ıdle = Boşta 
  time: 12
})





//<<<---- sj