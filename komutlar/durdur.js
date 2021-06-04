module.exports = ({
    name: "duraklat",
    code: `
        $color[$random[0;9999]]
        $description[**Müziği Duraklattım**]
$pauseSong

$onlyIf[$voiceID!=;**Ses Kanalına Girmelisin**]

$suppressErrors[**Müzik Çalmıyor Nasıl Durdurayım?**]
$log[//------------------------ MÜZİK DURDUR $username TARAFINDAN KULLANILDI -----------------------\\`
    });