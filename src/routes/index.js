import React from "react"
import { Switch, Route } from "react-router-dom"
import CoreLayout from "containers/Layout"
import Home from "./Home"
import AdminRoute from "./Admin"
import ReportsRoute from "./Admin/Reports"
import MessagesRoute from "./Admin/Reports/Messages"
import LoginRoute from "./Login"
import TermsRoute from "./Terms"
import PrivacyRoute from "./Privacy"
import NotFoundRoute from "./NotFound" 

export default function createRoutes() {

 
  return (
    <CoreLayout>
      <Switch>
        <Route exact path={Home.path} component={() => <Home.component />} />
        {[LoginRoute, ReportsRoute,AdminRoute,TermsRoute,MessagesRoute,PrivacyRoute].map((settings) => (
          <Route key={`Route-${settings.path}`} {...settings} />
        ))}
        <Route component={NotFoundRoute} />
      </Switch>
    </CoreLayout>
  )
}
