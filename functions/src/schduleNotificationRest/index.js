import * as functions from "firebase-functions"
import notifytokens from "../utils/notifytokens"

export async function schduleNotificationRestRequest(req, res) {
  let status = await notifytokens()
  res.json(status)
}

export default functions.https.onRequest(schduleNotificationRestRequest)
