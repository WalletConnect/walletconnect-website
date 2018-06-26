module.exports = {
  siteMetadata: {
    name: `WalletConnect`,
    title: `WalletConnect`,
    baseUrl: `https://walletconnect.org`,
    description: ``,
    keywords: `ethereum, cryptocurrency, wallet, mobile, connect, relay, proxy, standard, crypto, tokens, dapp`,
    twitterUsername: '@walletconnect'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-77954108-4'
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-next`
  ]
};
