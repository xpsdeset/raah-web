import React from "react"
import { useFirebase } from "react-redux-firebase"
import { useNotifications } from "modules/notification"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import enhancer from "./enhancer"

let path = "/login"

function Component() {
  const firebase = useFirebase()
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/admin",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
  }

  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  )
}

export default {
  path,
  component: enhancer(Component),
}
