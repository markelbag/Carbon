import React from 'react';
import { Link } from "gatsby";
import { ModalWrapper } from "carbon-components-react";
import { Button, Form, TextInput } from 'carbon-components-react';

const LogIn = () => {
    return (
        <ModalWrapper
            Link="Log In"
            triggerButtonKind="link"
            buttonTriggerText="Log In"
            buttonTriggerClassName="bx--btn--primary border"
          
        >
        
  <Form>
  <div style={{marginBottom: '2rem'}}>
    <TextInput
      helperText="Please enter your email address"
      id="test2"
      invalidText="Invalid error message."
      labelText="E-mail"
      placeholder="JohnSnow@GoT.com"
    />
  </div>
  <div style={{marginBottom: '2rem'}}>
  <TextInput
      helperText="Please enter your password"
      id="test2"
      invalidText="Invalid error message."
      labelText="Password"
      placeholder="********"
    />
  </div>
  <div style={{marginBottom: '2rem'}}>
 
  </div>
  <Button
    kind="secondary"
    tabIndex={0}
    type="Log In"
  >
    Log In
  </Button>
  <div>please <Link>create an account</Link> if you dont already have one</div>
</Form>
        </ModalWrapper>
    )}

export default LogIn;