import React from "react"
import useNotifications from "./useNotifications"
import { Alert } from "react-bootstrap"

function Notifications() {
  const { allIds, byId, dismissNotification } = useNotifications()
  // Only render if notifications exist
  if (!allIds || !Object.keys(allIds).length) {
    return null
  }

  return (
    <div>
      {allIds.map((id) => {
        return (
          <Alert key={id} onClose={() => dismissNotification(id)} dismissible>
            {byId[id].message}
          </Alert>
        )
      })}
    </div>
  )
}

export default Notifications
