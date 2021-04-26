import React from 'react';
import LeftNavWrapper from 'gatsby-theme-carbon/src/components/LeftNav/LeftNavWrapper';

import styles from "./LeftNavWrapper.module.scss"

const CustomLeftNavWrapper = (props) => (
  <LeftNavWrapper style={styles} {...props}>
  </LeftNavWrapper>
);

export default CustomLeftNavWrapper;