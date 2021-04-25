import React from 'react';
import { SwitcherDivider, SwitcherLink } from 'gatsby-theme-carbon/src/components/Switcher/Switcher';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher/Switcher';
import styles from "./Switcher.module.scss"

// https://css-tricks.com/using-css-transitions-auto-dimensions/
// Note: if you change this, update the max-height in the switcher stylesheet
const DefaultChildren = () => (
  <>
    <CustomSwitcherLink href="/LogIn" >
      Log In
    </CustomSwitcherLink>
    <CustomSwitcherDivider>National</CustomSwitcherDivider>
    <CustomSwitcherLink href="https://USAfencing.org" >
      US Fencing Official
    </CustomSwitcherLink>
    <CustomSwitcherLink href="https://www.usafencing.org/page/show/2716115-forms" >
      Forms
    </CustomSwitcherLink>
    <CustomSwitcherLink href="https://www.usafencing.org/athlete-handbook" >
      Athlete Handbook
    </CustomSwitcherLink>
    <CustomSwitcherDivider>Competiton</CustomSwitcherDivider>
    <CustomSwitcherLink href="https://Askfred.net">
      Local 
    </CustomSwitcherLink>
    <CustomSwitcherLink href="https://www.usafencing.org/all-events">
      National and regional
    </CustomSwitcherLink>
    <CustomSwitcherDivider>Gear</CustomSwitcherDivider>
    <CustomSwitcherLink href="https://shop.pbtfencing.com">
      PBT Hungary
    </CustomSwitcherLink>
    <CustomSwitcherLink href="https://Blue-gauntlet.com">
      Blue Gauntlet
    </CustomSwitcherLink>
  </>
);


export const CustomSwitcherDivider = (props) => (
  <SwitcherDivider style={styles} {...props} />
)

export const CustomSwitcherLink = (props) => (
  <SwitcherLink style={styles} {...props} />
)


const CustomSwitcher = (props) => (
  <Switcher style={styles} {...props}>
    {props.children}
  </Switcher>
);

CustomSwitcher.defaultProps = {
  children: <DefaultChildren />,
};

export default CustomSwitcher;
