var dbd = require('aoi.js')
var fs = require('fs')
var bot = new dbd.Bot({
	token:process.env.token,
	prefix:["$getServerVar[prefix]","!!"],
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
bot.variables({
  prefix:"*"
})

bot.command({
  name:"eval",
  code:`
  $onlyForIDs[793589155367354388;Geliştiricim Değilsin]
  $onlyIf[$message!=;Kod Denemek İçin Bişi Gir]
  $eval[$message]`
})//Kod Deneme

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
