module.exports = {
  siteMetadata: {
    name: `WalletBridge`,
    title: `WalletBridge`,
    baseUrl: `https://walletbridge.org`,
    description: `An open-source protocol for securely communicate with mobile wallets`,
    keywords: `ethereum, cryptocurrency, wallet, mobile, bridge, relay, proxy, protocol, crypto, tokens, dapp`,
    twitterUsername: '@walletbridge',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-77954108-4',
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-next`,
  ],
}
