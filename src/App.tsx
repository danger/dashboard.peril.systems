import * as React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Installation from "./components/Installation"
import Layout from "./components/layout/Layout"
import Login from "./components/Login"

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Layout>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/installation/:installationID" component={Installation} />
            <Route path="/wip/:installationID" component={Installation} />
          </div>
        </Layout>
      </Router>
    )
  }
}

export default App
