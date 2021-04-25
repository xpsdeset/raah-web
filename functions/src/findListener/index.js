import * as functions from "firebase-functions"
import { database } from "firebase-admin"
import notifyTele from "../utils/notifyTele"
import { generateReqId } from "../utils"

async function findListenerEvent(snap, context) {
  const {
    params: { partnerId },
  } = context

  notifyTele(
    `🙋 (${generateReqId(
      partnerId
    )}) wants to talk.. <a href="https://raah.app/talk">Connect with them?</a>`
  )

  return null
}

export default functions.database
  .ref(`/waiting/{partnerId}`)
  .onCreate(findListenerEvent)
