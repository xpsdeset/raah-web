import * as functions from "firebase-functions"
import { database } from "firebase-admin"
import notifyTele from "../utils/notifyTele"
import { generateReqId } from "../utils"

async function leftWaiting(snap, context) {
  const {
    params: { partnerId },
  } = context

  let room = snap.val()

  if (!room.listener) notifyTele(`😢 (${generateReqId(partnerId)}) left.`)

  return null
}

export default functions.database
  .ref(`/waiting/{partnerId}`)
  .onDelete(leftWaiting)
