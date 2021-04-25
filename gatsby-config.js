module.exports = {
  siteMetadata: {
    title: "Allez Fencing Center",
    description: "Allez Fencing Center for Olympic Fencing",
    keywords: "Allez,fencing,epee,youth sports,kids activities",
  },
  plugins: [
    'gatsby-theme-carbon',
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        navigationStyle: 'header',
        isSearchEnabled: false,
        theme: {
          homepage: 'white',
          interior: 'white',
        },   
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
