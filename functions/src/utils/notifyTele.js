import * as functions from "firebase-functions"
import { Telegraf } from "telegraf"

let { chat_id, bot_token } = functions.config().tele
const bot = new Telegraf(bot_token)

async function tele_notify(msg) {
  bot.telegram
    .sendMessage(chat_id, msg, { parse_mode: "HTML" })
    .catch(console.error)
}

export default tele_notify
