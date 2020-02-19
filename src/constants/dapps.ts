import { IApp } from "../helpers/types";

import balance from "../assets/dapps/balance.jpg";
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
import oneinchexchange from "../assets/dapps/oneinchexchange.png";
import heliowallet from "../assets/dapps/heliowallet.png";
import kyberswap from "../assets/dapps/kyberswap.jpg";
import sablier from "../assets/dapps/sablier.jpg";
import escaroo from "../assets/dapps/escaroo.png";
import tokenmarket from "../assets/dapps/tokenmarket.png";
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
import betoken from "../assets/dapps/betoken.png";
import loomnetwork from "../assets/dapps/loomnetwork.png";
import maticnetwork from "../assets/dapps/maticnetwork.jpg";
import thorchain from "../assets/dapps/thorchain.jpg";

const DAPPS: IApp[] = [
  {
    name: "MakerDAO",
    icon: maker,
    url: "https://oasis.app/borrow"
  },
  {
    name: "Uniswap",
    icon: uniswap,
    url: "https://uniswap.exchange/"
  },
  {
    name: "Zerion",
    icon: zerion,
    url: "https://beta.zerion.io/"
  },
  {
    name: "LocalEthereum",
    icon: localethereum,
    url: "https://localethereum.com/"
  },
  {
    name: "Binance DEX",
    icon: binancedex,
    url: "https://binance.org/"
  },
  {
    name: "3Box",
    icon: box,
    url: "https://3box.io/"
  },
  {
    name: "DDEX",
    icon: ddex,
    url: "https://ddex.io/"
  },
  {
    name: "Totle",
    icon: totle,
    url: "https://swap.totle.com/"
  },
  {
    name: "KyberSwap",
    icon: kyberswap,
    url: "https://kyberswap.com/"
  },
  {
    name: "1inch Exchange",
    icon: oneinchexchange,
    url: "https://1inch.exchange/"
  },
  {
    name: "DeFi Portfolio Tracker",
    icon: defiportfolio,
    url: "https://portfolio.defiprime.com/"
  },
  {
    name: "Bamboo Relay",
    icon: bamboorelay,
    url: "https://bamboorelay.com/"
  },
  {
    name: "Rarible",
    icon: rarible,
    url: "https://app.rarible.com/#/connect"
  },
  {
    name: "dYdX",
    icon: dydx,
    url: "https://dydx.exchange/"
  },
  {
    name: "Synthetix",
    icon: synthetix,
    url: "https://synthetix.exchange/"
  },
  {
    name: "Balance",
    icon: balance,
    url: "https://manager.balance.io/"
  },
  {
    name: "PoolTogether",
    icon: pooltogether,
    url: "https://app.pooltogether.com/"
  },
  {
    name: "Sablier",
    icon: sablier,
    url: "https://www.sablier.finance/"
  },
  {
    name: "DeFi Saver",
    icon: defisaver,
    url: "https://defisaver.com/"
  },
  {
    name: "Gelato",
    icon: gelato,
    url: "https://play.gelato.finance/"
  },
  {
    name: "Kickback",
    icon: kickback,
    url: "https://kickback.events/"
  },
  {
    name: "Idle Finance",
    icon: idlefinance,
    url: "https://idle.finance/"
  },
  {
    name: "iearn.finance",
    icon: iearnfinance,
    url: "https://iearn.finance/"
  },
  {
    name: "Clovers",
    icon: clovers,
    url: "https://clovers.network/"
  },
  {
    name: "Mintbase",
    icon: mintbase,
    url: "https://mintbase.io/"
  },
  {
    name: "DAOstack",
    icon: daostack,
    url: "https://alchemy.daostack.io/"
  },
  {
    name: "KnownOrigin",
    icon: knownorigin,
    url: "https://knownorigin.io/"
  },
  {
    name: "Affogato",
    icon: affogato,
    url: "https://affogato.co/"
  },
  {
    name: "StablePay",
    icon: stablepay,
    url: "https://stablepay.io/dashboard"
  },
  {
    name: "Betoken",
    icon: betoken,
    url: "https://betoken.fund/"
  },
  {
    name: "Loom Network",
    icon: loomnetwork,
    url: "https://dashboard.dappchains.com/login"
  },
  {
    name: "Matic Network",
    icon: maticnetwork,
    url: "https://matic.network/"
  },
  {
    name: "ThorChain",
    icon: thorchain,
    url: "https://thorchain.org/"
  },
  {
    name: "Heroes of Ether",
    icon: heroesofether,
    url: "https://heroesofether.io/"
  },
  {
    name: "Linkdrop",
    icon: linkdrop,
    url: "https://linkdrop.io/"
  },
  {
    name: "HelioWallet",
    icon: heliowallet,
    url: "https://heliowallet.com/"
  },
  {
    name: "Escaroo",
    icon: escaroo,
    url: "https://escaroo.com/"
  },
  {
    name: "TokenMarket",
    icon: tokenmarket,
    url: "https://tokenmarket.net/"
  }
];

export default DAPPS;
