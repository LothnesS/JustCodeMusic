module.exports = ({
    name: "İ",
   aliases: ['i' , 'static' , 'istatistikler' , 'istatistik'],
    code: `
          $author[📊 Froxy Music;$authorAvatar]
  $description[$thumbnail[$authorAvatar]
  
 »  **CPU kullanımı:** \`%$cpu\` 
 »  **RAM kullanımı:** \`$ramMB / 4 GB\`
 »  **Pingim:**  \`$pingms\`
 
 »  **Sahibim:** \`$username[$botOwnerID]#$discriminator[$botOwnerID]\` **|** <@$botOwnerID>
  
 »  ** Çalışma Zamanı:** \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$uptime;s; Saniye;1];h; Saat;1];m; Dakika;1];d; Gün;1];w; Hafta;1]\`
  
 »  **Komut:** \`$commandsCount\`

 »  **Kullanıcı:** \`$allMembersCount\` 

 » **Toplam Sunucu:** \`$serverCount\`


$color[FF0000]
$footer[$username, Kullandı...;$authorAvatar]
$addTimestamp
$onlyForIDs[702187286292594742;> <a:justicesinir:855731836976889878> nE Yaptığını Zannediyorsun! Seni Tanımıyorum. Bu Komutu Sadece Geliştiricim <@702187286292594742> Kullanabilir!]
$log[//------------------------ İSTATİSTİK $username TARAFINDAN KULLANILDI -----------------------\\`
    });