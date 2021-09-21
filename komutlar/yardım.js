module.exports = ({
    name: "yardım",
    aliases: "help",
    code: `
    $color[$random[0;9999]]
    $title[<:froxy3:886817535645855744> Froxy Music Yardım Menüsü]
$description[Gecikme│Ping: \`$pingms\`\n\n:flag_tr:\n**-çal**: Dinlemek İstediğiniz Müziği Çalar\n**-geç**: Çalan Müziği Geçer\n**-durdur**: Çalan Müziği Durdurur\n**-devam**: Durdurduğunuz Müzik Devam Eder\n**-tekrarla**: Çalan Müziği Tekrarlar\n**-bitir**: Bot Kanaldan Çıkar\n\n:flag_us:\n**-play**: Plays the Music You Want to Listen\n**-skip**: Skip Playing Music\n**-stop**: Stops the Music Playing\n**-resume**: The Music You Stopped Resume\n**-repeat**: Playing Repeats Music\n**-quit**: Bot Quit from Channel]
 $footer[$username Tarafından Kullanıldı]
 $log[//------------------------ YARDIM $username TARAFINDAN KULLANILDI -----------------------\\`
    });