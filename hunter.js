var ss = require('aoi.js')
var fs = require('fs')
var bot = new ss.Bot({
	token:"TOKEN YAZIN",
	prefix:"-",
})
bot.onLeave();
bot.onJoined();
bot.onMessage();
var reader = fs.readdirSync('./komutlar').filter(file => file.endsWith('.js'));
for (const file of reader) {
	const command = require(`./komutlar/${file}`);
	bot.command({
		name: command.name,
		aliases: command.aliases,
		bkz: command.bkz,
		code: command.code
	});


}
bot.status({
  text: "🎶 -yardım│$serverCount Sunucuda $allMembersCount Kullanıcıya Hizmet Veriyorum",
  type: "LISTENING",//ŞU AN İZLİYOR AYARLI  | PLAYING = OYNUYOR  | LISTENING  =  DİNLİYOR
  status: "idle",//ŞU AN RAHATSIZ ETMEYİNDE  | onlıne | ıdle = Boşta 
  time: 12
})








//<<<---- sj