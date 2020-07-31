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
    if (wt > 30) await waitingRef.child(k).remove()
  }

  waiting = waitingRef
  waiting = (await waiting.once("value")).val()

  if (!waiting) return "nothing to do after clean up"

  let notifyUsers = database().ref(`users`).orderByChild("notify").equalTo(true)
  notifyUsers = (await notifyUsers.once("value")).val()

  let tokens = []
  for (let token in notifyUsers) {
    tokens.push({
      to: notifyUsers[token].deviceToken,
      body: "Someone is waiting and wants to talk",
      data: { screen: "waitingPool" },
    })
  }

  console.log(tokens.map((d) => d.to).join(","))
  await expoNotify(tokens)

  return "done"
}

export default triggerNotification
