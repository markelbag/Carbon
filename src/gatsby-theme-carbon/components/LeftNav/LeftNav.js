import React from 'react';
import LeftNav from 'gatsby-theme-carbon/src/components/LeftNav/LeftNav';

import styles from "./LeftNav.module.scss"

const CustomLeftNav = (props) => (
  <LeftNav style={styles} {...props}>

  </LeftNav>
);

export default CustomLeftNav;