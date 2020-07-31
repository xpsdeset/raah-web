import * as functions from "firebase-functions"
import { database } from "firebase-admin"
import expoNotify from "../utils/expo"

async function acceptNotifyEvent(snap, context) {
  const {
    params: { partnerId },
  } = context

  let token = database().ref(`users/${partnerId}/deviceToken`)
  token = (await token.once("value")).val()

  await expoNotify([
    {
      to: token,
      body: "Someone is here to listen to you",
    },
  ])

  return
}

export default functions.database
  .ref(`waiting/{partnerId}/listener`)
  .onCreate(acceptNotifyEvent)
