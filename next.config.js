module.exports = {
  images: {
    domains: ["walletconnect.org"],
  },
  async redirects() {
    return [
      {
        source: "/wallets",
        destination: "https://registry.walletconnect.org/wallets",
        permanent: true,
      },
      {
        source: "/apps",
        destination: "https://registry.walletconnect.org/apps",
        permanent: true,
      },
    ];
  },
};
