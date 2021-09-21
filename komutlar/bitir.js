module.exports = ({
    name: "bitir",
    aliases: "quit",
    aliases: "q",
    code: `
    $color[$random[0;9999]]
$stopSong
$description[:flag_tr:\nMüziği Kapattım ve Ses Kanalından Çıktım\n\n:flag_us:\nI Turned The Music Off And Out Of The Audio Channel]
 $onlyIf[$voiceID!=;:flag_tr:\nSes Kanalına Girmelisin\n\n:flag_us:\nYou Must Enter the Audio Channel]

$suppressErrors[:flag_tr:\nŞuanda Müzik Çalmıyor\n\n:flag_us:\nCurrently Not Playing Music] 
$log[//------------------------ MÜZİK BİTİR $username TARAFINDAN KULLANILDI -----------------------\\`
    });