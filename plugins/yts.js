/*const { youtubeSearch } = require('@bochilteam/scraper')
let handler = async (m, { text }) => {
  if (!text) throw 'Cari apa?'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
π *${v.title}* (${v.url})
β Duration: ${v.durationH}
β²οΈ Uploaded ${v.publishedTime}
ποΈ ${v.view} views
      `.trim()
      case 'channel': return `
π *${v.channelName}* (${v.url})
π§βπ€βπ§ _${v.subscriberH} (${v.subscriber}) Subscriber_
π₯ ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n========================\n\n')
  m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

module.exports = handler*/


let yts = require('yt-search')
let handler = async (m, { text }) => {
  if (!text) throw 'Cari apa?'
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'vidio':return `
*${v.title}* (${v.url})
Duration: ${v.timestamp}
Uploaded ${v.ago}
${v.views} views
      `.trim()
      case 'channelβ¨οΈ': return `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n========================\n')
  m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
handler.limit = true

module.exports = handler

