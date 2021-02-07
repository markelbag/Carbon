import React from 'react';
import { Link } from 'gatsby';
import Header from 'gatsby-theme-carbon/src/components/Header';
import HeaderNav from 'gatsby-theme-carbon/src/components/HeaderNav/HeaderNav'
import { 
  Header as ShellHeader,
  HeaderGlobalBar,
  SkipToContent,
  } from 'carbon-components-react';
  import cx from 'classnames';

  import {
    header, 
    skipToContent,
    headerName,
    navigationStyle,
   } from './Header.module.scss'
const CustomHeader = (props) => (
  <Header {...props}>
    <ShellHeader aria-label="Header" className={header}>
    
    <SkipToContent href="#main-content" className={skipToContent}/>
    <Link
        className={cx(headerName)}
        to="/">
        <span>Fence</span>&nbsp;Allez
      </Link>
      {navigationStyle && <HeaderNav />}
      <HeaderNav />
    <HeaderGlobalBar className="head">

    </HeaderGlobalBar>
    </ShellHeader>
  </Header>
);
export default CustomHeader;