// By Jarot
let handler = async (m, { conn, text, usedPrefix, args }) => {
  if (!text) throw `Harap masukkan text!\n\nContoh: ${usedPrefix + command} Oscar Bot`
  try {
    await conn.updateProfileName(text)
    m.reply('Berhasil!')
  } catch (e) {
    console.log(e)
    throw `Error`
  }
}
handler.help = ['setnamebot <teks>']
handler.tags = ['owner']
handler.command = /^(setnamebot)$/i
handler.owner = true

module.exports = handler
