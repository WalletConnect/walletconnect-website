import { IProject } from "../helpers/types";

const DAPPS: IProject[] = [
  {
    name: "Etherscan",
    icon: require("../assets/dapps/etherscan.jpg"),
    // 2020-12-16 9.29M
    url: "https://etherscan.io/",
    style: { cropCircle: true },
  },
  {
    name: "Uniswap",
    icon: require("../assets/dapps/uniswap.jpg"),
    // 2020-12-16 2.98M
    url: "https://uniswap.exchange/",
    style: {},
  },
  {
    name: "Binance DEX",
    // 2020-12-16 936.60K
    icon: require("../assets/dapps/binancedex.png"),
    url: "https://binance.org/",
    style: {},
  },
  {
    name: "OpenSea",
    icon: require("../assets/dapps/opensea.jpg"),
    // 2020-12-16 367.65K
    url: "https://opensea.io/",
    style: { cropCircle: true },
  },
  {
    name: "Compound",
    icon: require("../assets/dapps/compound.png"),
    // 2021-01-23 334.04K
    url: "https://compound.finance/",
    style: { cropCircle: true },
  },
  {
    name: "Zapper",
    icon: require("../assets/dapps/zapper.png"),
    // 2020-12-16 294.02K
    url: "https://www.zapper.fi/",
    style: { cropCircle: true },
  },
  {
    name: "Aave",
    icon: require("../assets/dapps/aave.png"),
    // 2020-12-16 249.86 K
    url: "https://app.aave.com/",
    style: {},
  },
  {
    name: "Zerion",
    icon: require("../assets/dapps/zerion.png"),
    // 2020-12-16 234.68 K
    url: "https://beta.zerion.io/",
    style: { cropCircle: true },
  },
  {
    name: "LocalCryptos",
    icon: require("../assets/dapps/localcryptos.jpg"),
    // 2020-12-16 211.42 K
    url: "https://localcryptos.com/",
    style: { cropCircle: true },
  },
  {
    name: "DeBank",
    icon: require("../assets/dapps/debank.jpg"),
    // 2020-12-16 198.87 K
    url: "https://debank.com/",
    style: { cropCircle: true },
  },
  {
    name: "Unstoppable Domains",
    icon: require("../assets/dapps/unstoppable.png"),
    // 2020-12-16 197.56 K
    url: "https://unstoppabledomains.com/manager",
    style: { cropCircle: true },
  },
  {
    name: "Rarible",
    icon: require("../assets/dapps/rarible.png"),
    // 2020-12-16 195.00K
    url: "https://app.rarible.com/#/connect",
    style: { cropCircle: true },
  },
  {
    name: "1inch Exchange",
    icon: require("../assets/dapps/oneinchexchange.png"),
    // 2020-12-16 180.41K
    url: "https://1inch.exchange/",
    style: {},
  },
  {
    name: "yearn",
    icon: require("../assets/dapps/yearn.png"),
    // 2021-01-23 148.91K
    url: "https://yearn.finance/",
    style: { cropCircle: true },
  },
  {
    name: "Nash",
    icon: require("../assets/dapps/nash.jpg"),
    // 2020-12-16 140.73K
    url: "https://nash.io/",
    style: { cropCircle: true },
  },
  {
    name: "Curve",
    icon: require("../assets/dapps/curvefinance.png"),
    // 2020-12-16 131.72K
    url: "https://www.curve.fi",
    style: {},
  },
  {
    name: "Adex Network",
    icon: require("../assets/dapps/adexnetwork.jpg"),
    // 2020-12-16 106.72K
    url: "https://staking.adex.network/",
    style: {},
  },
  {
    name: "dYdX",
    icon: require("../assets/dapps/dydx.jpg"),
    // 2020-12-16 94.10 K
    url: "https://dydx.exchange/",
    style: { cropCircle: true },
  },
  {
    name: "MyCrypto",
    icon: require("../assets/dapps/mycrypto.png"),
    // 2020-12-16 79.48 K
    url: "https://beta.mycrypto.com/",
    style: {},
  },
  {
    name: "Oasis App",
    icon: require("../assets/dapps/oasis.png"),
    // 2020-12-16 79.06 K
    url: "https://oasis.app/dashboard",
    style: {},
  },
  {
    name: "TokenSets",
    icon: require("../assets/dapps/tokensets.jpg"),
    // 2020-12-16 74.81K
    url: "https://tokensets.com/",
    style: { cropCircle: true },
  },
  {
    name: "MANTRA DAO",
    icon: require("../assets/dapps/mantradao.png"),
    // 2020-12-16 63.43K
    url: "https://app.mantradao.com/",
    style: { cropCircle: true },
  },
  {
    name: "Matcha",
    icon: require("../assets/dapps/matcha.jpg"),
    // 2020-12-16 56.95 K
    url: "https://matcha.xyz",
    style: { cropCircle: true },
  },
  {
    name: "KyberSwap",
    icon: require("../assets/dapps/kyberswap.jpg"),
    // 2020-12-16 <50 K
    url: "https://kyberswap.com/",
    style: { cropCircle: true },
  },
  {
    name: "DeFi Portfolio Tracker",
    icon: require("../assets/dapps/defiportfolio.png"),
    // 2020-12-16 <50 K
    url: "https://portfolio.defiprime.com/",
    style: {},
  },
  {
    name: "Loopring",
    icon: require("../assets/dapps/loopring.jpg"),
    // 2020-12-16 <50 K
    url: "https://exchange.loopring.io",
    style: {},
  },
  {
    name: "InstaDapp",
    icon: require("../assets/dapps/instadapp.jpg"),
    // 2020-12-16 <50 K
    url: "https://instadapp.io/dashboard/",
    style: {},
  },
  {
    name: "Matic Network",
    icon: require("../assets/dapps/maticnetwork.jpg"),
    // 2020-12-16 <50 K
    url: "https://matic.network/",
    style: {},
  },
  {
    name: "3Box",
    icon: require("../assets/dapps/box.png"),
    url: "https://3box.io/",
    style: {},
  },
  {
    name: "DDEX",
    icon: require("../assets/dapps/ddex.png"),
    url: "https://ddex.io/",
    // N/A
    style: { cropCircle: true },
  },
  {
    name: "Totle",
    icon: require("../assets/dapps/totle.jpg"),
    url: "https://swap.totle.com/",
    style: { cropCircle: true },
  },
  {
    name: "Bamboo Relay",
    icon: require("../assets/dapps/bamboorelay.png"),
    url: "https://bamboorelay.com/",
    style: {},
  },
  {
    name: "Synthetix",
    icon: require("../assets/dapps/synthetix.jpg"),
    url: "https://synthetix.exchange/",
    style: { cropCircle: true },
  },
  {
    name: "dex.blue",
    icon: require("../assets/dapps/dexblue.jpg"),
    url: "https://dex.blue/trading/",
    style: {},
  },
  {
    name: "PoolTogether",
    icon: require("../assets/dapps/pooltogether.png"),
    url: "https://app.pooltogether.com/",
    style: { cropCircle: true },
  },
  {
    name: "Sablier",
    icon: require("../assets/dapps/sablier.jpg"),
    url: "https://sablier.finance/",
    style: { cropCircle: true },
  },
  {
    name: "DEX.AG",
    icon: require("../assets/dapps/dexag.png"),
    url: "https://dex.ag/",
    style: { cropCircle: true },
  },
  {
    name: "Gelato",
    icon: require("../assets/dapps/gelato.jpg"),
    url: "https://play.gelato.finance/",
    style: { cropCircle: true },
  },
  {
    name: "ENS Domains",
    icon: require("../assets/dapps/ensdomains.jpg"),
    url: "https://app.ens.domains/",
    style: { cropCircle: true },
  },
  {
    name: "Gnosis Safe Multisig",
    icon: require("../assets/wallets/gnosis-safe.jpg"),
    url: "https://gnosis-safe.io/",
    style: {},
  },
  {
    name: "Idle Finance",
    icon: require("../assets/dapps/idlefinance.png"),
    url: "https://idle.finance/",
    style: { cropCircle: true },
  },
  {
    name: "iearn.finance",
    icon: require("../assets/dapps/iearnfinance.jpg"),
    url: "https://iearn.finance/",
    style: {},
  },
  {
    name: "RCN Finance",
    icon: require("../assets/dapps/rcnfinance.jpg"),
    url: "https://rcn.market/",
    style: { cropCircle: true },
  },
  {
    name: "Hegic",
    icon: require("../assets/dapps/hegic.jpg"),
    url: "https://www.hegic.co/",
    style: { cropCircle: true },
  },
  {
    name: "Kickback",
    icon: require("../assets/dapps/kickback.jpg"),
    url: "https://kickback.events/",
    style: {},
  },
  {
    name: "88mph",
    icon: require("../assets/dapps/88mph.jpg"),
    url: "https://88mph.app/",
    style: { cropCircle: true },
  },
  {
    name: "Mooni",
    icon: require("../assets/dapps/mooni.jpg"),
    url: "https://app.mooni.tech/exchange",
    style: {},
  },
  {
    name: "Clovers",
    icon: require("../assets/dapps/clovers.png"),
    url: "https://clovers.network/",
    style: {},
  },
  {
    name: "Mintbase",
    icon: require("../assets/dapps/mintbase.jpg"),
    url: "https://mintbase.io/",
    style: {},
  },
  {
    name: "DAOstack",
    icon: require("../assets/dapps/daostack.jpg"),
    url: "https://alchemy.daostack.io/",
    style: {},
  },
  {
    name: "KnownOrigin",
    icon: require("../assets/dapps/knownorigin.jpg"),
    url: "https://knownorigin.io/",
    style: { cropCircle: true },
  },
  {
    name: "MyEtherWallet",
    icon: require("../assets/dapps/myetherwallet.jpg"),
    url: "https://myetherwallet.com/",
    style: {},
  },
  {
    name: "Affogato",
    icon: require("../assets/dapps/affogato.png"),
    url: "https://affogato.co/",
    style: {},
  },
  {
    name: "StablePay",
    icon: require("../assets/dapps/stablepay.jpg"),
    url: "https://stablepay.io/dashboard",
    style: {},
  },
  {
    name: "DeFi Saver",
    icon: require("../assets/dapps/defisaver.jpg"),
    url: "https://defisaver.com/",
    style: {},
  },
  {
    name: "Loom Network",
    icon: require("../assets/dapps/loomnetwork.png"),
    url: "https://dashboard.dappchains.com/login",
    style: { cropCircle: true },
  },
  {
    name: "ThorChain",
    icon: require("../assets/dapps/thorchain.jpg"),
    url: "https://thorchain.org/",
    style: { cropCircle: true },
  },
  {
    name: "BulkSender",
    icon: require("../assets/dapps/bulksender.png"),
    url: "https://bulksender.app/",
    style: {},
  },
  {
    name: "Heroes of Ether",
    icon: require("../assets/dapps/heroesofether.png"),
    url: "https://heroesofether.io/",
    style: {},
  },
  {
    name: "Betoken",
    icon: require("../assets/dapps/betoken.png"),
    url: "https://betoken.fund/",
    style: {},
  },
  {
    name: "Linkdrop",
    icon: require("../assets/dapps/linkdrop.png"),
    url: "https://linkdrop.io/",
    style: {},
  },
  {
    name: "HelioWallet",
    icon: require("../assets/dapps/heliowallet.png"),
    url: "https://heliowallet.com/",
    style: {},
  },
  {
    name: "Escaroo",
    icon: require("../assets/dapps/escaroo.png"),
    url: "https://escaroo.com/",
    style: { cropCircle: true },
  },
  {
    name: "TokenMarket",
    icon: require("../assets/dapps/tokenmarket.png"),
    url: "https://tokenmarket.net/",
    style: { cropCircle: true },
  },
  {
    name: "Mesa",
    icon: require("../assets/dapps/mesa.png"),
    url: "https://mesa.eth.link/",
    style: { cropCircle: true },
  },
  {
    name: "MCDEX",
    icon: require("../assets/dapps/mcdex.png"),
    url: "https://mcdex.io",
    style: { cropCircle: true },
  },
  {
    name: "Furucombo",
    icon: require("../assets/dapps/furucombo.png"),
    url: "https://furucombo.app/",
    style: {},
  },
  {
    name: "Melon",
    icon: require("../assets/dapps/melon.png"),
    url: "https://melon.avantgarde.finance/",
    style: {},
  },
  {
    name: "Chainsfr",
    icon: require("../assets/dapps/chainsfr.png"),
    url: "https://chainsfr.com",
    style: { cropCircle: true },
  },
  {
    name: "AKA3 Email Alias",
    icon: require("../assets/dapps/aka3.png"),
    url: "http://aka3.net",
    style: {},
  },
  {
    name: "2Key",
    icon: require("../assets/dapps/2key.jpg"),
    url: "https://www.2key.network/",
    style: { cropCircle: true },
  },
  {
    name: "Pitch",
    icon: require("../assets/dapps/pitch.jpg"),
    url: "https://pitchinvestorslive.com/",
    style: { cropCircle: true },
  },
  {
    name: "SushiSwap",
    icon: require("../assets/dapps/sushiswap.png"),
    url: "https://sushiswap.fi/",
    style: { cropCircle: true },
  },
  {
    name: "Unagii",
    icon: require("../assets/dapps/unagii.png"),
    url: "https://www.unagii.com/",
    style: { cropCircle: true },
  },
  {
    name: "Cream Finance",
    icon: require("../assets/dapps/creamfinance.jpg"),
    url: "https://cream.finance/",
    style: {},
  },
  {
    name: "zkSync",
    icon: require("../assets/dapps/zksync.jpg"),
    url: "https://zksync.io/",
    style: { cropCircle: true },
  },
  {
    name: "Shell Exchange",
    icon: require("../assets/dapps/shell.jpg"),
    url: "https://shells.exchange/",
    style: { cropCircle: true },
  },
  {
    name: "Index Coop",
    icon: require("../assets/dapps/indexcoop.jpg"),
    url: "https://www.indexcoop.com/",
    style: { cropCircle: true },
  },
  {
    name: "SwapX",
    icon: require("../assets/dapps/swapx.jpg"),
    url: "https://app.swapx.org/",
    style: { cropCircle: true },
  },
  {
    name: "Starname",
    icon: require("../assets/dapps/starname.png"),
    url: "https://app.starname.me/",
    style: { cropCircle: true },
  },
  {
    name: "Space",
    icon: require("../assets/dapps/space.png"),
    url: "https://space.storage/",
    style: { cropCircle: true },
  },
  {
    name: "Maskbook",
    icon: require("../assets/dapps/maskbook.png"),
    url: "https://mask.io/",
    style: { cropCircle: true },
  },
  {
    name: "Snapshot",
    icon: require("../assets/dapps/snapshot.jpg"),
    url: "https://snapshot.page/",
    style: { cropCircle: true },
  },
  {
    name: "Invoice.build",
    icon: require("../assets/dapps/invoice-build.png"),
    url: "https://invoice.build/",
    style: {},
  },
  {
    name: "Ankr",
    icon: require("../assets/dapps/ankr.jpg"),
    url: "https://ankr.com/",
    style: {},
  },
  {
    name: "DODO",
    icon: require("../assets/dapps/dodo.png"),
    url: "https://app.dodoex.io/",
    style: { cropCircle: true },
  },
  {
    name: "zLOT",
    icon: require("../assets/dapps/zlot.jpg"),
    url: "https://zlot.finance/",
    style: { cropCircle: true },
  },
  {
    name: "Tokamak Network",
    icon: require("../assets/dapps/tokamak.png"),
    url: "https://tokamak.network/",
    style: {},
  },
  {
    name: "Actus Protocol",
    icon: require("../assets/dapps/actusprotocol.jpg"),
    url: "https://portal.actus-protocol.io/",
    style: {},
  },
  {
    name: "AstroTools.io",
    icon: require("../assets/dapps/astrotools.jpg"),
    url: "https://astrotools.io/",
    style: {},
  },
  {
    name: "Rubic Exchange",
    icon: require("../assets/dapps/rubic.jpg"),
    url: "https://rubic.exchange/",
    style: { cropCircle: true },
  },
  {
    name: "Harvest Finance",
    icon: require("../assets/dapps/harvestfinance.jpg"),
    url: "https://harvest.finance/",
    style: { cropCircle: true },
  },
  {
    name: "OctoFi",
    icon: require("../assets/dapps/octofinance.jpg"),
    url: "https://octo.fi/",
    style: { cropCircle: true },
  },
  {
    name: "Mushroom Finance",
    icon: require("../assets/dapps/mushroomfinance.jpg"),
    url: "https://mushrooms.finance/",
    style: { cropCircle: true },
  },
  {
    name: "Bitfrost Finance",
    icon: require("../assets/dapps/bitfrostfinance.png"),
    url: "https://bitfrost.finance/",
    style: { cropCircle: true },
  },
  {
    name: "XinFin XDC Network",
    icon: require("../assets/dapps/xdcnetwork.png"),
    url: "https://xinfin.network/",
    style: {},
  },
  {
    name: "Orchid Protocol",
    icon: require("../assets/dapps/orchid.png"),
    url: "https://account.orchid.com/",
    style: { cropCircle: true },
  },
  {
    name: "Lido",
    icon: require("../assets/dapps/lido.png"),
    url: "https://stake.lido.fi/",
    style: { cropCircle: true },
  },
  {
    name: "Datamine Network",
    icon: require("../assets/dapps/datamine.jpg"),
    url: "https://datamine.network/",
    style: { cropCircle: true },
  },
  // apps below to be reviewed on SimilarWeb
  {
    name: "Streamr",
    icon: require("../assets/dapps/streamr.jpg"),
    url: "https://streamr.network/",
    style: { cropCircle: true },
  },
  {
    name: "DappRadar",
    icon: require("../assets/dapps/dappradar.png"),
    url: "https://dappradar.com/hub/wallet",
    style: { cropCircle: true },
  },
  {
    name: "SuperRare",
    icon: require("../assets/dapps/superrare.jpg"),
    url: "https://superrare.co/",
    style: { cropCircle: true },
  },
  {
    name: "Arbitrum",
    icon: require("../assets/dapps/arbitrum.jpg"),
    url: "https://portal.arbitrum.io/",
    style: { cropCircle: true },
  },
  {
    name: "ParaSwap",
    icon: require("../assets/dapps/paraswap.jpg"),
    url: "https://paraswap.io/",
    style: { cropCircle: true },
  },
  {
    name: "HoneySwap",
    icon: require("../assets/dapps/honeyswap.jpg"),
    url: "https://honeyswap.org/",
    style: { cropCircle: true },
  },
  {
    name: "Fleek",
    icon: require("../assets/dapps/fleek.png"),
    url: "https://fleek.co/",
    style: {},
  },
];

export default DAPPS;
