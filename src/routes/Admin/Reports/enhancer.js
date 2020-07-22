import React, { useEffect, useState } from "react" 
import { useSelector } from "react-redux"
import { useFirebase, useFirebaseConnect } from "react-redux-firebase"

export default (Component) => (props) => {
  useFirebaseConnect(["reports"]) 
  const firebase = useFirebase()
  const reports = useSelector((state) => state.firebase.data["reports"]) 
  
  let [roomId,setRoomId] = useState(false)

  // to ban user and update the firebase 
  let banUser = (userId) => { 
    // firebase.ref(`users/${userId}`).update({banned:true})
    firebase.ref(`users/${userId}/banned`).set(true) 
  }
 
  

  
  return <Component {...props} {...{ reports,banUser,roomId,setRoomId }} />
}