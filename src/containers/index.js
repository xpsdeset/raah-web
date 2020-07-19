import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import firebase from "firebase/app"
import { ReactReduxFirebaseProvider } from "react-redux-firebase"
import NotificationsProvider from "modules/notification/NotificationsProvider"
import initializeFirebase, { defaultRRFConfig } from "../initializeFirebase"

initializeFirebase()

function App({ routes, store }) {
  return (
    <Provider store={store}>
      <NotificationsProvider>
        <ReactReduxFirebaseProvider
          firebase={firebase}
          config={defaultRRFConfig}
          dispatch={store.dispatch}
        >
          <Router>{routes}</Router>
        </ReactReduxFirebaseProvider>
      </NotificationsProvider>
    </Provider>
  )
}

export default App
