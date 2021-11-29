let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • ᴛʜʀᴇᴇ [0895323241456]
│ • ᴛᴇʟᴋᴏᴍsᴇʟ [081379753850]
│ • Gopay [081379753850]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/62895323241456
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
