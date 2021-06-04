module.exports = ({
    name: "devam",
    code: `
        $color[$random[0;9999]]
        $description[**Müziği Devam Ettiriyorum**]
$resumeSong

$onlyIf[$voiceID!=;**Ses Kanalına Girmelisin**]

$suppressErrors[**Müzik Çalmıyor Nasıl Oynatayım?**]`
    });