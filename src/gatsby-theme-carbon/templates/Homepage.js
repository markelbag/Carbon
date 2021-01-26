import React from 'react';
import { HomepageBanner } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';







// const SecondLeftText = () => <p>Callout component</p>;

// const SecondRightText = () => (
//   <p>
//     You can also not use these components at all by not providing the callout
//     props to the template or writing your own template.
//     <a
//       className={calloutLink}
//       href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
//       Homepage source →
//     </a>
//   </p>
// );

const BannerText = () => <h1>Allez Fencing Center</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image="https://firebasestorage.googleapis.com/v0/b/allez-47904.appspot.com/o/IMG_7375.jpg?alt=media&token=7c7da9be-1584-4c3c-831e-6ee5ae63d34f" />,
  
  // SecondCallout: (
  //   <HomepageCallout
  //     leftText={SecondLeftText}
  //     rightText={SecondRightText}
  //     color="white"
  //     backgroundColor="#061f80"
  //   />
  // ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
