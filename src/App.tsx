import * as React from "react"
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom"

import Cookies from "universal-cookie"
import Installation from "./components/Installation"
import Layout from "./components/layout/Layout"
import Login from "./components/Login"

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
                const params = new URL(document.location).searchParams
                cookies.set("jwt", params.get("perilJWT"))
                return <Redirect to="/" />
              }}
            />

            <Route
              exact
              path="/logout"
              render={() => {
                cookies.remove("jwt")
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

            <Route path="/installation/:installationID" component={Installation} />
            <Route path="/wip/:installationID" component={Installation} />
          </div>
        </Layout>
      </Router>
    )
  }
}

export default App
