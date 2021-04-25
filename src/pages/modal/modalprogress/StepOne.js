import React, { useState } from 'react';
import { FormGroup, RadioButton, RadioButtonGroup } from 'carbon-components-react';

const StepOne = () => {
    const [ choice, setChoice ] = useState("Myself")
    return (

<div>
<div className="mtop">
Welcome! Are you interested signing up for classes for yourself or your child? {choice}
</div>      
<FormGroup
legendText=" "
>
<RadioButtonGroup
defaultSelected="yes"
legend="yes or no"
name="yandn"
valueSelected="default-selected"
orientation='vertical' labelPosition='left'
onChange={(e) => setChoice(e)}>
<RadioButton
id="Myself"
labelText="Myself"
value="Myself"
/>
<RadioButton
id="My child"
labelText="My child"
value="My child"
/>
</RadioButtonGroup>
</FormGroup>
</div>

    )}

export default StepOne;