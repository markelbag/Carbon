import React from 'react';
import { FormGroup, RadioButton, RadioButtonGroup } from 'carbon-components-react';

const StepTwoAdult = () => {
    return (

<div>
<div className="mtop">
Are you an experienced fencer?
</div>      
<FormGroup
legendText=" "
>
<RadioButtonGroup
defaultSelected="yes"
legend="yes or no"
name="yandn"
valueSelected="default-selected"
orientation='vertical' labelPosition='left'>
<RadioButton
id="yes"
labelText="Yes"
value="yes"
/>
<RadioButton
id="no"
labelText="No"
value="no"
/>
</RadioButtonGroup>
</FormGroup>
</div>

    )}

export default StepTwoAdult;