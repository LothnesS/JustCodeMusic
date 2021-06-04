
module.exports = {
    name: "çal",
    code: `    $color[$random[0;9999]]
    $title[Parti Başladı]
    $description[    $author[Müzik Çalınıyor ;https://e7.pngegg.com/pngimages/784/381/png-clipart-white-and-red-musical-note-logo-text-symbol-brand-music-text-trademark.png

**Müzik Uzunluğu** $songInfo[duration] **Saniyedir.**

[Müzik Linki]($songInfo[url])]
$footer[$username Tarafından Kullanıldı]
$playSong[$message; **Böyle bir müzik bulamadım tekrar denermisin**]
$onlyIf[$voiceID!=; **Ses Kanalına Girmelisin**]
$onlyIf[$message!=; **Bir Müzik İsmi Girmelisin**]`
}