import React from "react"
import { useSelector } from "react-redux"
import { useFirebaseConnect, isLoaded } from "react-redux-firebase"
import { Modal, Button } from "react-bootstrap"
import { Spinner, FormatDate } from "components"

let Msgs = ({ setRoom, roomId, reportUser, refId, ...props }) => {
  useFirebaseConnect(`rooms/${roomId}`)
  const roomInfo = useSelector(
    ({
      firebase: {
        data: { rooms },
      },
    }) => rooms && rooms[roomId]
  )

  let close = () => setRoom(false)

  if (!isLoaded(roomInfo)) return <Spinner />

  let roles = {}

  if (!roomInfo)
    return (
      <div
        class="alert alert-warning alert-dismissible fade show sticky-top"
        role="alert"
      >
        <span>Chat expired</span>
        <button type="button" class="close" onClick={close}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )

  roles[roomInfo.listener] = "listener"
  roles[roomInfo.talker] = "talker"

  return (
    <Modal show={roomId} onHide={close} className="msgs">
      <Modal.Header closeButton>
        <Modal.Title>
          {props.for}({roles[props.for]}){" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Session Started at: <FormatDate date={roomInfo.sessionStarted} />
        </p>
        {!roomInfo.messages && <p>No messages</p>}
        {roomInfo.messages &&
          Object.keys(roomInfo.messages).map((d) => {
            let msg = roomInfo.messages[d]
            return (
              <p key={d}>
                {roles[msg.id]}:{msg.text}
              </p>
            )
          })}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
        <Button variant="primary" onClick={() => reportUser(props.for, refId)}>
          Ban user
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default Msgs
