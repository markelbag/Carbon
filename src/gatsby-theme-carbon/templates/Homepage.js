
import React from 'react';
import { HomepageBanner } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';


const BannerText = () => <h1>Allez Fencing Center</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image="https://firebasestorage.googleapis.com/v0/b/allez-47904.appspot.com/o/IMG_7375.jpg?alt=media&token=7c7da9be-1584-4c3c-831e-6ee5ae63d34f" />,
  FirstCallout: (
    <></>
  ),
  SecondCallout: (
    <></>
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
