import React from "react"
import { Switch, Route } from "react-router-dom"
import CoreLayout from "containers/Layout"
import Home from "./Home"
import LoginRoute from "./Login"
import TermsRoute from "./Terms"
import PrivacyRoute from "./Privacy"
import NotFoundRoute from "./NotFound"

export default function createRoutes() {
  return (
    <CoreLayout>
      <Switch>
        <Route exact path={Home.path} component={() => <Home.component />} />
        {[LoginRoute, TermsRoute, PrivacyRoute].map((settings) => (
          <Route key={`Route-${settings.path}`} {...settings} />
        ))}
        <Route component={NotFoundRoute} />
      </Switch>
    </CoreLayout>
  )
}
