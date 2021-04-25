import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header/Header';

import styles from "./Header.module.scss"

const CustomHeader = (props) => (
  <Header style={styles} {...props}>
    Fence&nbsp;<span>Allez</span>
  </Header>
);

export default CustomHeader;
