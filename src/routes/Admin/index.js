import React from "react"
import { UserIsNotAuthenticated } from 'utils/router'
import { useFirebase } from "react-redux-firebase"
import { useNotifications } from "modules/notification"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import enhancer from "./enhancer"

let path = "/admin"

function Component() {
  return (
    <div className="container-fluid green_bg">
      <div className="container">
        <p>
          <em>Raah Admin</em>
        </p>
        
      </div>
    </div>
  )
}

export default {
  path,
  component: Component,
}

 