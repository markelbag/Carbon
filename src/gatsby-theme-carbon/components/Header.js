import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';
// this ^ is located in node_modules. Edited file to hide "GlobalAction" button on right side of header.


const CustomHeader = (props) => (
  <Header {...props}>
    Fence&nbsp;<span>Allez</span>
  </Header>
);

export default CustomHeader;
