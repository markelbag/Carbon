import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Row, Grid, Column } from 'gatsby-theme-carbon/src/components/Grid';
import {
  footer,
  grid,
  nav,
  listItem,
  logo,
  content,
} from './Footer.module.scss';

const CustomFooter = ({ Content, links, Logo }) => {
  const { firstCol, secondCol } = links;
  // const { site } = useStaticQuery(graphql`
    // query BUILD_TIME_QUERY {
    //   site {
    //     buildTime(formatString: "DD MMMM YYYY")
    //   }
    // }
  // `);
  return (
    <footer className={footer}>
            <Grid>
              <Column>
              <Content />
              </Column>
            </Grid>
    </footer>
  );
};



const DefaultContent = () => (
  <div className="center">
   Copyright &copy; 2021 <strong>Allez Fencing</strong> All rights reserved. 
  </div>
);

CustomFooter.defaultProps = {
  links: {
    firstCol: [
      { href: 'https://www.ibm.com/design', linkText: 'Sample' },
      { href: 'https://www.ibm.com/design', linkText: 'Links' },
      {
        href: 'https://www.ibm.com/design',
        linkText: 'Column',
      },
      { href: 'https://www.ibm.com/design', linkText: 'One' },
    ],
    secondCol: [
      {
        href: 'https://www.ibm.com/design',
        linkText: 'Dribbble',
      },
      {
        href: 'https://www.ibm.com/design',
        linkText: 'Medium',
      },
      {
        href: 'https://www.ibm.com/design',
        linkText: 'Twitter',
      },
    ],
  },
  Content: DefaultContent,
  Logo: null,
};

CustomFooter.propTypes = {
  /**
   * Specify the first and second columns of your links
   */
  links: PropTypes.exact({
    firstCol: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        linkText: PropTypes.string,
      })
    ),
    secondCol: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        linkText: PropTypes.string,
      })
    ),
  }),

  /**
   * Specify the first and second columns of your links
   */
  Content: PropTypes.elementType,

  /**
   * Provide a logo to be rendered in the bottom left corner
   */
  Logo: PropTypes.elementType,
};

export default CustomFooter;

// import React from 'react';
// import Footer from 'gatsby-theme-carbon/src/components/Footer/Footer';
// import styles from "./Footer.module.scss"

// const Content = ({ buildTime }) => (
//   <>
//     <p>
//      {buildTime}
//     </p>
//     <p>
     
//     </p>
//   </>
// );

// const links = {
//   firstCol: [
    
//   ],
// };

// const Logo = () => (
//   <svg
//     >
//   </svg>
// );



// const CustomFooter = () => <Footer style={styles} links={links} Content={Content} Logo={Logo}/>;

// export default CustomFooter;