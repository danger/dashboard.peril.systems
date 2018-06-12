import * as React from "react"
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react"
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
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="green" textAlign="center">
          HELLO
        </Header>
        <Form size="large">
          <Segment stacked>
            <Button color="green" fluid size="large">
              <a href={loginURL}>Login via GitHub</a>
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
)
