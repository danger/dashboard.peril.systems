import * as React from "react"
import { Button, Form, Grid, Segment } from "semantic-ui-react"
import { loginURL } from "../lib/routes"

export default () => (
  <div className="login-form">
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign="center" style={{ height: "100%", marginTop: "120" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450, paddingTop: 200 }}>
        <img
          src="http://danger.systems/images/js/peril-logo-hero-cachable@2x.png"
          width="250"
          style={{ paddingBottom: 40 }}
        />

        <Segment stacked>
          <a href={loginURL}>
            <Button color="green" fluid size="large">
              Login via GitHub
            </Button>
          </a>
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
)
