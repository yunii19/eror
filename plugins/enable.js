let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let hao = `*Official Bot By @${'0'.split('@')[0]}* 
*Powered By @${'${global.owner[0]}'.split('@')[0]}*` 
let ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `📮 𝗥𝗣𝗚 Whatsapp ʙᴏᴛ`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: conn.send2ButtonImh(await (await fetch(fla + 'https://telegra.ph/file/e6215ae5a04629135d621.jpg')).buffer(), 300, 200), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    } 
    }
const sections = [
   {
	title: `List Options`,
	rows: [
	    {title: "❀ | Welcome", rowId: `${usedPrefix + command} welcome`},
	    {title: "❀ | Delete", rowId: `${usedPrefix + command} delete`},
	    {title: "❀ | Public", rowId: `${usedPrefix + command} public`},
	{title: "❀ | Simi", rowId: `${usedPrefix + command} simi`},
	{title: "❀ | Antilink", rowId: `${usedPrefix + command} antilink`},
	{title: "❀ | Antidelete", rowId: `${usedPrefix + command} antidelete`},
	{title: "❀ | Antitoxic", rowId: `${usedPrefix + command} antitoxic`},
	{title: "❀ | Autolevelup", rowId: `${usedPrefix + command} autolevelup`},
	{title: "❀ | Antisticker", rowId: `${usedPrefix + command} antisticker`},
	{title: "❀ | Detect", rowId: `${usedPrefix + command} detect`},
	{title: "❀ | Autosticker", rowId: `${usedPrefix + command} autosticker`},
	{title: "❀ | Restrict", rowId: `${usedPrefix + command} restrict`},
	{title: "❀ | Nyimak", rowId: `${usedPrefix + command} nyimak`},
	{title: "❀ | Pc only", rowId: `${usedPrefix + command} pconly`},
	{title: "❀ | Gc only", rowId: `${usedPrefix + command} gconly`},
	{title: "❀ | Sw only", rowId: `${usedPrefix + command} swonly`},
	{title: "❀ | Document", rowId: `${usedPrefix + command} document`},
	{title: "❀ | WhiteListMyContact", rowId: `${usedPrefix + command} whitelistmycontact`},
	{title: "❀ | Autoread", rowId: `${usedPrefix + command} autoread`},
	]
    },
]

const listMessage = {
  text: '───────[ BOT SETTING ]───────',
  footer: 'Silakan Klik Di Bawah Untuk Mengatur Bot',
  title: '',
  buttonText: "Click Here!",
  sections
}
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let setting = global.db.data.settings
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
   case 'welcome':

      if (!m.isGroup) {

        if (!isOwner) {

          global.dfail('group', m, conn)

          throw false

        }

      } else if (!isAdmin) {

        global.dfail('admin', m, conn)

        throw false

      }

      chat.welcome = isEnable

      break

    case 'detect':

      if (!m.isGroup) {

        if (!isOwner) {

          global.dfail('group', m, conn)

          throw false

        }

      } else if (!isAdmin) {

        global.dfail('admin', m, conn)

        throw false

      }

      chat.detect = isEnable

      break

    case 'delete':

      if (m.isGroup) {

        if (!(isAdmin || isOwner)) {

          global.dfail('admin', m, conn)

          throw false

        }

      }

      chat.delete = isEnable

      break

    case 'antidelete':

      if (m.isGroup) {

        if (!(isAdmin || isOwner)) {

          global.dfail('admin', m, conn)

          throw false

        }

      }

      chat.delete = !isEnable

      break

    case 'simi':
      if (!(isAdmin || isOwner)) {
      if (m.isGroup) {
        global.dfail('admin', m, conn)
        throw 0
        }
      } 
      chat.simi = isEnable
      break
    case 'autodelvn':

      if (m.isGroup) {

        if (!(isAdmin || isOwner)) {

          global.dfail('admin', m, conn)

          throw false

        }

      }

      chat.autodelvn = isEnable

      break

    case 'document':

      chat.useDocument = isEnable

      break

    case 'public':

      isAll = true

      if (!isROwner) {

        global.dfail('rowner', m, conn)

        throw false

      }

      global.opts['self'] = !isEnable

      break

    case 'antilink':

      if (m.isGroup) {

        if (!(isAdmin || isOwner)) {

          global.dfail('admin', m, conn)

          throw false

        }

      }

      chat.antiLink = isEnable

      break 

    case 'antisticker':

      if (m.isGroup) {

        if (!(isAdmin || isOwner)) {

          global.dfail('admin', m, conn)

          throw false

        }

      }

      chat.antiSticker = isEnable

      break

    case 'autosticker':

      if (m.isGroup) {

        if (!(isAdmin || isOwner)) {

          global.dfail('admin', m, conn)

          throw false

        }

      }

      chat.stiker = isEnable

      break

    case 'toxic':

      if (m.isGroup) {

        if (!(isAdmin || isOwner)) {

          global.dfail('admin', m, conn)

          throw false

        }

      }

      chat.antiToxic = !isEnable

      break

    case 'antitoxic':

      if (m.isGroup) {

        if (!(isAdmin || isOwner)) {

          global.dfail('admin', m, conn)

          throw false

        }

      }

      chat.antiToxic = isEnable

      break

    case 'autolevelup':

      isUser = true

      user.autolevelup = isEnable

      break

    case 'mycontact':

    case 'mycontacts':

    case 'whitelistcontact':

    case 'whitelistcontacts':

    case 'whitelistmycontact':

    case 'whitelistmycontacts':

      if (!isOwner) {

        global.dfail('owner', m, conn)

        throw false

      }

      conn.callWhitelistMode = isEnable

      break

    case 'restrict':

      isAll = true

      if (!isROwner) {

        global.dfail('rowner', m, conn)

        throw false

      }

      global.opts['restrict'] = isEnable

      break

    case 'nyimak':

      isAll = true

      if (!isROwner) {

        global.dfail('rowner', m, conn)

        throw false

      }

      global.opts['nyimak'] = isEnable

      break
case 'anticall':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      global.anticall = isEnable
      break

    case 'autoread':

      isAll = true

      if (!isROwner) {

        global.dfail('rowner', m, conn)

        throw false

      }

      global.opts['autoread'] = isEnable

      break

    case 'pconly':

    case 'privateonly':

      isAll = true

      if (!isROwner) {

        global.dfail('rowner', m, conn)

        throw false

      }

      global.opts['pconly'] = isEnable

      break

    case 'gconly':

    case 'grouponly':

      isAll = true

      if (!isROwner) {

        global.dfail('rowner', m, conn)

        throw false

      }

      global.opts['gconly'] = isEnable

      break

    case 'swonly':

    case 'statusonly':

      isAll = true

      if (!isROwner) {

        global.dfail('rowner', m, conn)

        throw false

      }

      global.opts['swonly'] = isEnable

      break

    case 'viewonce':

      if (m.isGroup) {

        if (!(isAdmin || isOwner)) {

          global.dfail('admin', m, conn)

          throw false

        }

      }

      chat.viewonce = isEnable

      break
  default:
      if (!/[01]/.test(command)) return  conn.sendMessage(m.chat, listMessage, { quoted: ftrol, mentions: await conn.parseMention(wm), contextInfo: { forwardingScore: 99999, isForwarded: true }})
      throw false
  }
  conn.send2Button(m.chat,`🗂️ *Type:* ${type} 
📊 *Status:* Succes ✅
🎚️ *Options:* ${isEnable ? 'Enable' : 'Disable'}
📣 *For:* ${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}`, wm, `⋮☰ Menu`, '.menu', `${isEnable ? 'Off' : 'On'} ${type}`, `.${isEnable ? 'Off' : 'On'} ${type}` ,{ key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `Colour Your Life`, itemCount: 99999, thumbnail: await (await fetch('https://telegra.ph/file/09f6fd389fef97938b40b.jpg')).buffer(),}}})
}
handler.help = ['on', 'off'].map(v => v + ' <opsi>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

module.exports = handler

let wm = global.wm
