import { database, firestore } from "firebase-admin"
import expoNotify from "./expo"

async function triggerNotification() {
  let ts = firestore.Timestamp.now().seconds * 1000
  let waitingRef = database().ref(`waiting`)
  let waiting = waitingRef
  waiting = (await waiting.once("value")).val()

  if (!waiting) return "nothing to do"

  for (let k in waiting) {
    let wt = (ts - waiting[k].time) / 1000
    if (wt > 125) await waitingRef.child(k).remove()
  }

  return "done"
}

export default triggerNotification
