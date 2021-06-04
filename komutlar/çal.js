
module.exports = {
    name: "çal",
    code: `    $color[$random[0;9999]]
    $title[Müzik Çalıştı]
    $description[
**Müzik Uzunluğu** $songInfo[duration] **Saniyedir.**

[Müzik Linki]($songInfo[url])]
$playSong[$message; **Böyle bir müzik bulamadım tekrar denermisin**]
$onlyIf[$voiceID!=; **Ses Kanalına Girmelisin**]
$onlyIf[$message!=; **Bir Müzik İsmi Girmelisin**]`
}