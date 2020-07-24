import React, { useEffect, useState } from "react" 
import { useSelector } from "react-redux"
import { useFirebase, useFirebaseConnect } from "react-redux-firebase"


export default (Component) => (props) => {
  useFirebaseConnect(["rooms"])  
  const firebase = useFirebase()
  let rooms = useSelector((state) => state.firebase.data["rooms"]) 
  
  useFirebaseConnect(`rooms/${props.roomId}`)  
  let room = useSelector(({ firebase: { ordered: { rooms } } }) => rooms && rooms[props.roomId])  
 
  let banUser = (userId) => { 
    // firebase.ref(`users/${userId}`).update({banned:true})
    firebase.ref(`users/${userId}/banned`).set(true)  
  }
  return <Component {...props} {...{room,banUser}} />
}