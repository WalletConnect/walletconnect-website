import { IApp } from "../helpers/types";

const DAPPS: IApp[] = [
  {
    name: "MakerDAO",
    icon: require("../assets/dapps/maker.png"),
    url: "https://oasis.app/borrow",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Uniswap",
    icon: require("../assets/dapps/uniswap.jpg"),
    url: "https://uniswap.exchange/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Zerion",
    icon: require("../assets/dapps/zerion.png"),
    url: "https://beta.zerion.io/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "LocalEthereum",
    icon: require("../assets/dapps/localethereum.png"),
    url: "https://localethereum.com/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Binance DEX",
    icon: require("../assets/dapps/binancedex.png"),
    url: "https://binance.org/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "3Box",
    icon: require("../assets/dapps/box.png"),
    url: "https://3box.io/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "OpenSea",
    icon: require("../assets/dapps/opensea.jpg"),
    url: "https://opensea.io/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "DDEX",
    icon: require("../assets/dapps/ddex.png"),
    url: "https://ddex.io/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Totle",
    icon: require("../assets/dapps/totle.jpg"),
    url: "https://swap.totle.com/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "KyberSwap",
    icon: require("../assets/dapps/kyberswap.jpg"),
    url: "https://kyberswap.com/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "1inch Exchange",
    icon: require("../assets/dapps/oneinchexchange.png"),
    url: "https://1inch.exchange/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "DeFi Portfolio Tracker",
    icon: require("../assets/dapps/defiportfolio.png"),
    url: "https://portfolio.defiprime.com/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Bamboo Relay",
    icon: require("../assets/dapps/bamboorelay.png"),
    url: "https://bamboorelay.com/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "dex.blue",
    icon: require("../assets/dapps/dexblue.jpg"),
    url: "https://dex.blue/trading/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Loopring",
    icon: require("../assets/dapps/loopring.jpg"),
    url: "https://loopring.io/trade/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Rarible",
    icon: require("../assets/dapps/rarible.png"),
    url: "https://app.rarible.com/#/connect",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "dYdX",
    icon: require("../assets/dapps/dydx.jpg"),
    url: "https://dydx.exchange/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Synthetix",
    icon: require("../assets/dapps/synthetix.jpg"),
    url: "https://synthetix.exchange/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "InstaDapp",
    icon: require("../assets/dapps/instadapp.jpg"),
    url: "https://instadapp.io/dashboard/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "PoolTogether",
    icon: require("../assets/dapps/pooltogether.png"),
    url: "https://app.pooltogether.com/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Sablier",
    icon: require("../assets/dapps/sablier.jpg"),
    url: "https://www.sablier.finance/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "DEX.AG",
    icon: require("../assets/dapps/dexag.png"),
    url: "https://dex.ag/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Gelato",
    icon: require("../assets/dapps/gelato.jpg"),
    url: "https://play.gelato.finance/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "MyCrypto",
    icon: require("../assets/dapps/mycrypto.png"),
    url: "https://beta.mycrypto.com/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Idle Finance",
    icon: require("../assets/dapps/idlefinance.png"),
    url: "https://idle.finance/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "iearn.finance",
    icon: require("../assets/dapps/iearnfinance.jpg"),
    url: "https://iearn.finance/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "RCN Finance",
    icon: require("../assets/dapps/rcnfinance.jpg"),
    url: "https://rcn.market/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Hegic",
    icon: require("../assets/dapps/hegic.jpg"),
    url: "https://www.hegic.co/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Kickback",
    icon: require("../assets/dapps/kickback.jpg"),
    url: "https://kickback.events/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Aave",
    icon: require("../assets/dapps/aave.png"),
    url: "https://app.aave.com/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Zapper",
    icon: require("../assets/dapps/zapper.png"),
    url: "https://www.zapper.fi/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "88mph",
    icon: require("../assets/dapps/88mph.jpg"),
    url: "https://88mph.app/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Mooni",
    icon: require("../assets/dapps/mooni.jpg"),
    url: "https://app.mooni.tech/exchange",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Clovers",
    icon: require("../assets/dapps/clovers.png"),
    url: "https://clovers.network/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Mintbase",
    icon: require("../assets/dapps/mintbase.jpg"),
    url: "https://mintbase.io/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "DAOstack",
    icon: require("../assets/dapps/daostack.jpg"),
    url: "https://alchemy.daostack.io/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "KnownOrigin",
    icon: require("../assets/dapps/knownorigin.jpg"),
    url: "https://knownorigin.io/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Affogato",
    icon: require("../assets/dapps/affogato.png"),
    url: "https://affogato.co/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "StablePay",
    icon: require("../assets/dapps/stablepay.jpg"),
    url: "https://stablepay.io/dashboard",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "DeFi Saver",
    icon: require("../assets/dapps/defisaver.jpg"),
    url: "https://defisaver.com/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "MyEtherWallet",
    icon: require("../assets/dapps/myetherwallet.jpg"),
    url: "https://www.myetherwallet.com/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Loom Network",
    icon: require("../assets/dapps/loomnetwork.png"),
    url: "https://dashboard.dappchains.com/login",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Curve",
    icon: require("../assets/dapps/curvefinance.png"),
    url: "https://www.curve.fi",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Matic Network",
    icon: require("../assets/dapps/maticnetwork.jpg"),
    url: "https://matic.network/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "ThorChain",
    icon: require("../assets/dapps/thorchain.jpg"),
    url: "https://thorchain.org/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "BulkSender",
    icon: require("../assets/dapps/bulksender.png"),
    url: "https://bulksender.app/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Heroes of Ether",
    icon: require("../assets/dapps/heroesofether.png"),
    url: "https://heroesofether.io/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Betoken",
    icon: require("../assets/dapps/betoken.png"),
    url: "https://betoken.fund/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Linkdrop",
    icon: require("../assets/dapps/linkdrop.png"),
    url: "https://linkdrop.io/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "HelioWallet",
    icon: require("../assets/dapps/heliowallet.png"),
    url: "https://heliowallet.com/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Escaroo",
    icon: require("../assets/dapps/escaroo.png"),
    url: "https://escaroo.com/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "TokenMarket",
    icon: require("../assets/dapps/tokenmarket.png"),
    url: "https://tokenmarket.net/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Mesa",
    icon: require("../assets/dapps/mesa.png"),
    url: "https://mesa.eth.link/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Unstoppable Domains",
    icon: require("../assets/dapps/unstoppable.png"),
    url: "https://unstoppabledomains.com/manager",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "MCDEX",
    icon: require("../assets/dapps/mcdex.png"),
    url: "https://mcdex.io",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Furucombo",
    icon: require("../assets/dapps/furucombo.png"),
    url: "https://furucombo.app/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Melon",
    icon: require("../assets/dapps/melon.png"),
    url: "https://melon.avantgarde.finance/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Matcha",
    icon: require("../assets/dapps/matcha.jpg"),
    url: "https://matcha.xyz",
    style: {
      cropCircle: true,
    },
  },
];

export default DAPPS;
