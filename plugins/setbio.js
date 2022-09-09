// By Jarot
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Harap masukan text!\n\nCotoh: ${usedPrefix} Oscar Bot`
  try {
    await conn.setStatus(text)
    m.reply('Berhasil!')
  } catch (e) {
    console.log(e)
    throw `Eror`
  }
}
handler.help = ['setbiobot <teks>']
handler.tags = ['owner']
handler.command = /^(setbiobot)$/i
handler.owner = true

module.exports = handler
