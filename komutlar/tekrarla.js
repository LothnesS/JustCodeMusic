module.exports = ({
    name: "tekrarla",
    code: `
       $color[$random[0;9999]]
       $description[**$songInfo[title]** Adlı Müzik Tekrara Alındı]
       $footer[Müzik Tekrarda]
$loopQueue
$onlyIf[$voiceID!=;**Ses Kanalına Girmelisin**]

$suppressErrors[**Müzik Çalmıyor Nasıl Tekrara Alayım?**] 
$log[//------------------------ MÜZİK TEKRARLA $username TARAFINDAN KULLANILDI -----------------------\\`
    });