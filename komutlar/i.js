module.exports = ({
    name: "İ",
   aliases: ['i' , 'istatiks' , 'istatistikler' , 'istatistk'],
    code: `
          $author[İstatistiklerime Hoşgeldin;$authorAvatar]
  $description[$thumbnail[$authorAvatar]
  
 »  **CPU kullanımı:** \`%$cpu\` 
 »  **RAM kullanımı:** \`$ramMB / 512.00MB\`
 
 »  **Sahibim:** \`$username[$botOwnerID]#$discriminator[$botOwnerID]\` **|** <@$botOwnerID>
   
 »  **Pingim:**  \`$pingms\`
  
 »  ** Çalışma Zamanı:** \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$uptime;s; Saniye;1];h; Saat;1];m; Dakika;1];d; Gün;1];w; Hafta;1]\`
  
 »  **Komut:** \`$commandsCount\`

 »  **Kullanıcı:** \`$allMembersCount\` 

 » **Toplam Sunucu:** \`$serverCount\`

 »  **Kütüphanem:** \`Aoi.JS v$packageVersion\`
  
»  **Linklerim:** 
**»** [Davet Linkim!\\](https://discord.com/api/oauth2/authorize?client_id=$clientID&permissions=40&scope=bot) 
**»** [Destek Sunucum!\\](DESTEK SUNUCUSU DAVET LİNKİ)
  
$color[FF0000]
$footer[$username, Kullandı...;$authorAvatar]
$addTimestamp
$log[//------------------------ İSTATİSTİK $username TARAFINDAN KULLANILDI -----------------------\\`
    });