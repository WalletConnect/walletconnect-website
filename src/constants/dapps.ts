import { IApp } from "../helpers/types";

import instadapp from "../assets/dapps/instadapp.jpg";
import uniswap from "../assets/dapps/uniswap.jpg";
import rarible from "../assets/dapps/rarible.png";
import dydx from "../assets/dapps/dydx.jpg";
import pooltogether from "../assets/dapps/pooltogether.png";
import linkdrop from "../assets/dapps/linkdrop.png";
import maker from "../assets/dapps/maker.png";
import zerion from "../assets/dapps/zerion.png";
import localethereum from "../assets/dapps/localethereum.png";
import binancedex from "../assets/dapps/binancedex.png";
import ddex from "../assets/dapps/ddex.png";
import bamboorelay from "../assets/dapps/bamboorelay.png";
import box from "../assets/dapps/box.png";
import clovers from "../assets/dapps/clovers.png";
import heroesofether from "../assets/dapps/heroesofether.png";
import dexag from "../assets/dapps/dexag.png";
import oneinchexchange from "../assets/dapps/oneinchexchange.png";
import heliowallet from "../assets/dapps/heliowallet.png";
import kyberswap from "../assets/dapps/kyberswap.jpg";
import sablier from "../assets/dapps/sablier.jpg";
import escaroo from "../assets/dapps/escaroo.png";
import tokenmarket from "../assets/dapps/tokenmarket.png";
import mycrypto from "../assets/dapps/mycrypto.png";
import mintbase from "../assets/dapps/mintbase.jpg";
import defiportfolio from "../assets/dapps/defiportfolio.png";
import totle from "../assets/dapps/totle.jpg";
import defisaver from "../assets/dapps/defisaver.jpg";
import gelato from "../assets/dapps/gelato.jpg";
import kickback from "../assets/dapps/kickback.jpg";
import idlefinance from "../assets/dapps/idlefinance.png";
import iearnfinance from "../assets/dapps/iearnfinance.jpg";
import daostack from "../assets/dapps/daostack.jpg";
import knownorigin from "../assets/dapps/knownorigin.jpg";
import affogato from "../assets/dapps/affogato.png";
import synthetix from "../assets/dapps/synthetix.jpg";
import stablepay from "../assets/dapps/stablepay.jpg";
import hegic from "../assets/dapps/hegic.jpg";
import dexblue from "../assets/dapps/dexblue.jpg";
import betoken from "../assets/dapps/betoken.png";
import loomnetwork from "../assets/dapps/loomnetwork.png";
import maticnetwork from "../assets/dapps/maticnetwork.jpg";
import rcnfinance from "../assets/dapps/rcnfinance.jpg";
import thorchain from "../assets/dapps/thorchain.jpg";
import mooni from "../assets/dapps/mooni.jpg";
import myetherwallet from "../assets/dapps/myetherwallet.jpg";
import aave from "../assets/dapps/aave.png";
import bulksender from "../assets/dapps/bulksender.png";
import defizap from "../assets/dapps/defizap.png";
import loopring from "../assets/dapps/loopring.jpg";
import _88mph from "../assets/dapps/88mph.jpg";
import opensea from "../assets/dapps/opensea.jpg";
import curvefinance from "../assets/dapps/curvefinance.png";

const DAPPS: IApp[] = [
  {
    name: "MakerDAO",
    icon: maker,
    url: "https://oasis.app/borrow",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Uniswap",
    icon: uniswap,
    url: "https://uniswap.exchange/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Zerion",
    icon: zerion,
    url: "https://beta.zerion.io/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "LocalEthereum",
    icon: localethereum,
    url: "https://localethereum.com/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Binance DEX",
    icon: binancedex,
    url: "https://binance.org/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "3Box",
    icon: box,
    url: "https://3box.io/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "OpenSea",
    icon: opensea,
    url: "https://opensea.io/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "DDEX",
    icon: ddex,
    url: "https://ddex.io/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Totle",
    icon: totle,
    url: "https://swap.totle.com/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "KyberSwap",
    icon: kyberswap,
    url: "https://kyberswap.com/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "1inch Exchange",
    icon: oneinchexchange,
    url: "https://1inch.exchange/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "DeFi Portfolio Tracker",
    icon: defiportfolio,
    url: "https://portfolio.defiprime.com/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Bamboo Relay",
    icon: bamboorelay,
    url: "https://bamboorelay.com/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "dex.blue",
    icon: dexblue,
    url: "https://dex.blue/trading/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Loopring",
    icon: loopring,
    url: "https://loopring.io/trade/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Rarible",
    icon: rarible,
    url: "https://app.rarible.com/#/connect",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "dYdX",
    icon: dydx,
    url: "https://dydx.exchange/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Synthetix",
    icon: synthetix,
    url: "https://synthetix.exchange/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "InstaDapp",
    icon: instadapp,
    url: "https://instadapp.io/dashboard/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "PoolTogether",
    icon: pooltogether,
    url: "https://app.pooltogether.com/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Sablier",
    icon: sablier,
    url: "https://www.sablier.finance/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "DEX.AG",
    icon: dexag,
    url: "https://dex.ag/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Gelato",
    icon: gelato,
    url: "https://play.gelato.finance/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "MyCrypto",
    icon: mycrypto,
    url: "https://beta.mycrypto.com/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Idle Finance",
    icon: idlefinance,
    url: "https://idle.finance/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "iearn.finance",
    icon: iearnfinance,
    url: "https://iearn.finance/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "RCN Finance",
    icon: rcnfinance,
    url: "https://rcn.market/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Hegic",
    icon: hegic,
    url: "https://www.hegic.co/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Kickback",
    icon: kickback,
    url: "https://kickback.events/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Aave",
    icon: aave,
    url: "https://app.aave.com/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "DeFiZap",
    icon: defizap,
    url: "https://defizap.com/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "88mph",
    icon: _88mph,
    url: "https://88mph.app/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Mooni",
    icon: mooni,
    url: "https://app.mooni.tech/exchange",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Clovers",
    icon: clovers,
    url: "https://clovers.network/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Mintbase",
    icon: mintbase,
    url: "https://mintbase.io/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "DAOstack",
    icon: daostack,
    url: "https://alchemy.daostack.io/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "KnownOrigin",
    icon: knownorigin,
    url: "https://knownorigin.io/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Affogato",
    icon: affogato,
    url: "https://affogato.co/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "StablePay",
    icon: stablepay,
    url: "https://stablepay.io/dashboard",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "DeFi Saver",
    icon: defisaver,
    url: "https://defisaver.com/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "MyEtherWallet",
    icon: myetherwallet,
    url: "https://www.myetherwallet.com/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Loom Network",
    icon: loomnetwork,
    url: "https://dashboard.dappchains.com/login",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Matic Network",
    icon: maticnetwork,
    url: "https://matic.network/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "ThorChain",
    icon: thorchain,
    url: "https://thorchain.org/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "BulkSender",
    icon: bulksender,
    url: "https://bulksender.app/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Heroes of Ether",
    icon: heroesofether,
    url: "https://heroesofether.io/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Betoken",
    icon: betoken,
    url: "https://betoken.fund/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Linkdrop",
    icon: linkdrop,
    url: "https://linkdrop.io/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "HelioWallet",
    icon: heliowallet,
    url: "https://heliowallet.com/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Escaroo",
    icon: escaroo,
    url: "https://escaroo.com/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "TokenMarket",
    icon: tokenmarket,
    url: "https://tokenmarket.net/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Curve",
    icon: curvefinance,
    url: "https://curve.fi",
    style: {
      cropCircle: false,
    },
  }
];

export default DAPPS;
