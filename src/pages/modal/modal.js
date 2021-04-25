import React from 'react';
import { ModalWrapper } from "carbon-components-react";
import { ProgressIndicator, ProgressStep, Tooltip } from 'carbon-components-react';
import StepOne from './modalprogress/StepOne'

const Modal = (props) => {
    return (
  <ModalWrapper
    buttonTriggerClassName="bg"
    buttonTriggerText="Launch modal"
    primaryButtonText="Next"
    secondaryButtonText="Back"
    Modal="Progressive"
    ren
  >

  <div className="some-container">
    <ProgressIndicator currentIndex={1}>
        <ProgressStep
          label="First step"
          description="Step 1: Getting started with Carbon Design System"
        />
        <ProgressStep
          current
          label="Second step with tooltip"
          description="Step 2: Getting started with Carbon Design System"
          renderLabel={() => (
            <Tooltip
              direction="bottom"
              showIcon={false}
              triggerClassName="bx--progress-label"
              triggerText="Second step with tooltip"
              tooltipId="tooltipId-0">
              <p>Second step with tooltip</p>
            </Tooltip>
          )}
        />
        <ProgressStep
          label="Third step"
          description="Step 3: Getting started with Carbon Design System"
        />
        <ProgressStep
          invalid
          label="Fourth step"
          description="Step 4: Getting started with Carbon Design System"
        />
        <ProgressStep
          disabled
          label="Fifth step"
          description="Step 5: Getting started with Carbon Design System"
        />
      </ProgressIndicator>
  </div>
  <StepOne />
  </ModalWrapper>


    )};

export default Modal