import * as functions from "firebase-functions"
import notifytokens from "../utils/notifytokens"

async function schduleNotificationEvent(context) {
  let status = await notifytokens()
  return status
}

const schedule = "every 2 minutes"
// const schedule = "every 10 seconds"

export default functions.pubsub
  .schedule(schedule)
  .onRun(schduleNotificationEvent)
