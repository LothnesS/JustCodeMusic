module.exports = ({
    name: "ses",
    code: `
       $color[$random[0;9999]]
       $description[**Ses Seviyesi \` $message \` Olarak Ayarlandı**]
       $footer[Keyifli Müzikler]
$volume[$message]
$onlyIf[$isNumber[$message]!=false; **Girdiğin Bir Rakam Değil**]
$onlyIf[$voiceID!=; **Ses Kanalına Girmelisin**]
$onlyIf[$message!=; **Bir Müzik İsmi Girmelisin**]
$suppressErrors[**Müzik Çalmıyor Nasıl Ses Vereyim?**] 
$log[//------------------------ SES $username TARAFINDAN KULLANILDI -----------------------\\`
    });