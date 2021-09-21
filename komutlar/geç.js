module.exports = ({
    name: "geç",
    aliases: "skip",
    code: `
        $color[$random[0;9999]]
        $description[**Müziği Geçtim**]
        $skipSong

$onlyIf[$voiceID!=;**Ses Kanalına Girmelisin**]

$suppressErrors[**Müzik Çalmıyor Nasıl Geçeyim?**]
$log[//------------------------ MÜZİK DURDUR $username TARAFINDAN KULLANILDI -----------------------\\`
    });