import * as React from "react"
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom"

import Cookies from "universal-cookie"
import Installation from "./components/Installation"
import InstallationSettings from "./components/InstallationSettings"
import Layout from "./components/layout/Layout"
import Login from "./components/Login"
import PartialInstallation from "./components/PartialInstallation"

class App extends React.Component {
  public render() {
    const cookies = new Cookies()

    return (
      <Router>
        <Layout>
          <div>
            <Route
              exact
              path="/success"
              render={() => {
                const params = new URL(document.location as any).searchParams
                cookies.set("jwt", params.get("perilJWT"))
                return <Redirect to="/" />
              }}
            />

            <Route
              exact
              path="/"
              render={() => {
                if (cookies.get("jwt")) {
                  return (
                    <h1>
                      <br />
                      <br />Show Dash
                    </h1>
                  )
                } else {
                  return <Login />
                }
              }}
            />

            <Route path="/installation/:installationID/settings" component={InstallationSettings} />
            <Route path="/installation/:installationID" component={Installation} exact />
            <Route path="/partial/:installationID" component={PartialInstallation} />
          </div>
        </Layout>
      </Router>
    )
  }
}

export default App
