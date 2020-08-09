import React, { useState } from "react"
import { useSelector } from "react-redux"
import { useFirebaseConnect, useFirebase, isLoaded } from "react-redux-firebase"
import { Table, Button } from "react-bootstrap"
import Messages from "./Messages"
import { Spinner } from "components"

export default function Todos() {
  const firebase = useFirebase()
  useFirebaseConnect([{ path: "reports" }])
  const reports = useSelector((state) => state.firebase.data.reports)

  let [room, setRoom] = useState(false)

  let reportUser = (id, key) => {
    firebase.ref(`reports/${key}`).update({ status: "banned" })
    firebase.ref(`users/${id}`).update({ banned: true, notify: "no" })
    setRoom(false)
  }

  if (!isLoaded(reports)) return <Spinner />

  return (
    <div className="container">
      <h1>Reports</h1>
      <Table>
        <thead>
          <tr>
            <th>Report id</th>
            <th>Reason</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(reports).map((d) => {
            let value = reports[d]
            value.refId = d
            return (
              <tr key={d}>
                <td>{value.for}</td>
                <td>{value.reason}</td>
                <td>
                  <Button variant="link" onClick={() => setRoom(value)}>
                    View Messages
                  </Button>
                </td>
                <td>{value.status}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      {room && <Messages {...{ ...room, setRoom, reportUser }} />}
    </div>
  )
}
