import React from 'react';
import ResourceCard from 'gatsby-theme-carbon/src/components/ResourceCard';
// this ^ is located in node_modules. Edited file to hide "GlobalAction" button on right side of header.

const CustomResourceCard = (props) => (
 

<ResourceCard {...props}
  subTitle="Alternate color"
  title="Dark"
  aspectRatio="2:1"
  color="dark"
  actionIcon="email"
  href="https://gatsby-theme-carbon.now.sh">

![Sketch icon](/images/sketch-icon.png)

</ResourceCard>
);


export default CustomResourceCard;