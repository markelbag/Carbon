import React from 'react';
import HeaderNavItem from 'gatsby-theme-carbon/src/components/HeaderNav/HeaderNavItem';

import styles from "./HeaderNavItem.module.scss"

const CustomHeaderNavItem = (props) => (
  <HeaderNavItem style={styles} {...props} />
);

export default CustomHeaderNavItem;
