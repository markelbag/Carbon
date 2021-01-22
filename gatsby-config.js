module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Carbon",
    description: "A Gatsby theme for the carbon design system",
    keywords: "gatsby,theme,carbon",
  },
  plugins: [
    'gatsby-theme-carbon',
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        navigationStyle: 'header',
        isSearchEnabled: false,      
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Carbon Design Gatsby Theme",
        icon: "src/images/favicon.svg",
        short_name: "Gatsby Theme Carbon",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
      },
    },

  ],
};