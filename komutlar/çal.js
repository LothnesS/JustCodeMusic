
module.exports = {
    name: "çal",
    aliases: "play",
    aliases: "p",
    code: `   
    $color[$random[0;9999]]
    $title[<a:froxymusicdance:888763922117718028> Müzik Başladı│Music Started]
$description[**Şuanda Çaldığım Müzik**:\n$songInfo[title]\n\n**Sıradaki Çalacağım Müzik**:
$playSong[$message; **Böyle bir müzik bulamadım tekrar denermisin**]
$onlyIf[$voiceID!=; :flag_tr:\nSes Kanalına Girmelisin\n\n:flag_us:\n>You Must Enter the Audio Channel]
$onlyIf[$message!=; :flag_tr:\nBir Müzik İsmi Girmelisin\n\n:flag_us:\nYou Must Enter a Music Name]]
$footer[$username Tarafından Kullanıldı│Used By $username]
$log[//------------------------ MÜZİK $username TARAFINDAN KULLANILDI -----------------------\\`
}