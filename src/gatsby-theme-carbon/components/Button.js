import React from 'react';
import { Button } from 'carbon-components-react';
// this ^ is located in node_modules. Edited file to hide "GlobalAction" button on right side of header.

const CustomButton = (props) => (
 

<Button {...props}
    className="roundedBtn"
    kind="secondary">
</Button>
);


export default CustomButton;