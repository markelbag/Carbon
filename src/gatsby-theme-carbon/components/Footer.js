import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
const Content = ({ buildTime }) => (
  <>
    <p>
     {buildTime}
    </p>
    <p>
     
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://USAfencing.org', linkText: 'USAFencing.org' },
    { href: 'https://askfred.net', linkText: 'Ask Fred' },
    { href: 'https://shop.pbtfencing.com/', linkText: 'PBT Hungary' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;