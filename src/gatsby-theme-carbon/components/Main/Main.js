import React from 'react';
import Main from 'gatsby-theme-carbon/src/components/Main/Main';

import styles from "./Main.module.scss"

const CustomMain = (props) => (
  <Main style={styles} {...props} />
);

export default CustomMain;

// import React from 'react';
// import cx from 'classnames';
// import { Grid } from '../Grid';
// import { main, padded } from './Main.module.scss';

// const Main = (props) => (
//   <Grid
//     className={cx(main, {
//       [padded]: props.padded,
//     })}
//     {...props}
//   />
// );

// export default Main;
