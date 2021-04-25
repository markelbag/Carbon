import React from 'react';
import { Button, Form, TextInput } from 'carbon-components-react';
import { Row, Column } from 'gatsby-theme-carbon';
const SignUp = () => {
    return (
        <Form>
        <div style={{marginBottom: '2rem'}}>
          <TextInput
            helperText="Please enter your first and last name"
            id="test2"
            invalidText="Invalid error message."
            labelText=" "
            placeholder="John Snow"
          />
          <TextInput
            helperText="Please enter your email address"
            id="test2"
            invalidText="Invalid error message."
            labelText=" "
            placeholder="JohnSnow@GoT.com"
          />
          <TextInput
            helperText="Please enter your date of birth"
            id="test2"
            invalidText="Invalid error message."
            labelText=" "
            placeholder="32"
          />
          <TextInput
            helperText="Please enter your street address"
            id="test2"
            invalidText="Invalid error message."
            labelText=" "
            placeholder="street"
          />
          <Row>
              <Column colLg={3}>
          <TextInput
            helperText="Please enter your city"
            id="test2"
            invalidText="Invalid error message."
            labelText=" "
            placeholder="City"
          />
              </Column>
              <Column colLg={3}>
          <TextInput
            helperText="Please enter your state"
            id="test2"
            invalidText="Invalid error message."
            labelText=" "
            placeholder="state"
          />
              </Column>
              <Column colLg={3}>
          <TextInput
            helperText="Please enter your zipcode"
            id="test2"
            invalidText="Invalid error message."
            labelText=" "
            placeholder="zipcode"
          />
              </Column>
          </Row>
        </div>
        <div style={{marginBottom: '2rem'}}>
        <TextInput
            helperText="Please enter a password"
            id="test2"
            invalidText="Invalid error message."
            labelText=" "
            placeholder="password"
          />
        <TextInput
            helperText="Please re-enter your password"
            id="test2"
            invalidText="Invalid error message."
            labelText=" "
            placeholder="confirm password"
          />
        </div>
        <div style={{marginBottom: '2rem'}}>
       
        </div>
        <Button
          kind="secondary"
          tabIndex={0}
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
    )
}

export default SignUp;