import { Expo } from "expo-server-sdk"

let expo = new Expo()

async function expoService(msgsToPush) {
  let messages = []
  for (let pushToken of msgsToPush) {
    if (!Expo.isExpoPushToken(pushToken.to)) {
      console.error(`Push token ${pushToken.to} is not a valid Expo push token`)
      continue
    }

    messages.push({
      sound: "default",
      ...pushToken,
    })
  }

  let chunks = expo.chunkPushNotifications(messages)
  let tickets = []
  for (let chunk of chunks) {
    try {
      let ticketChunk = await expo.sendPushNotificationsAsync(chunk)
      tickets.push(...ticketChunk)
    } catch (error) {
      console.error(error)
    }
  }
}

export default expoService
