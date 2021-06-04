module.exports = ({
    name: "bitir",
    code: `
    $color[$random[0;9999]]
$stopSong
$description[**Müziği Durdurdum Ve Ses Kanalından Çıktım**]
$onlyIf[$voiceID!=;**Ses Kanalına Girmelisin**]

$suppressErrors[**Müzik Çalmıyor Nasıl Duraklatayım?**] `//id nizi düzeltin
    });