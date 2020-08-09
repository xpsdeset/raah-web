import React from "react"
import { Switch, Route } from "react-router-dom"
import { UserIsAuthenticated } from "utils/router"
import CoreLayout from "containers/Layout"
import Home from "./Home"
import LoginRoute from "./Login"
import TermsRoute from "./Terms"
import PrivacyRoute from "./Privacy"
import NotFoundRoute from "./NotFound"
import Reports from "./Admin/Reports"
import { IntlProvider } from "react-intl"

let CreateRoutes = () => {
  return (
    <IntlProvider locale="en" defaultLocale="en">
      <CoreLayout>
        <Switch>
          <Route exact path={Home.path} component={() => <Home.component />} />
          {[LoginRoute, TermsRoute, PrivacyRoute].map((settings) => (
            <Route key={`Route-${settings.path}`} {...settings} />
          ))}
          <Route
            path={`/admin/reports`}
            component={UserIsAuthenticated(Reports)}
          />
          )}
          <Route component={NotFoundRoute} />
        </Switch>
      </CoreLayout>
    </IntlProvider>
  )
}

export default CreateRoutes
