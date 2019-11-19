import { IApp } from "../helpers/types";

import balance from "../assets/dapps/balance.jpg";
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
import escaroo from "../assets/dapps/escaroo.png";
import tokenmarket from "../assets/dapps/tokenmarket.png";
import luckystrike from "../assets/dapps/luckystrike.png";
import defiportfolio from "../assets/dapps/defiportfolio.png";
import totle from "../assets/dapps/totle.jpg";

const DAPPS: IApp[] = [
  {
    name: "MakerDAO",
    icon: maker,
    url: "https://oasis.app/borrow"
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
    name: "Balance",
    icon: balance,
    url: "https://manager.balance.io/"
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
    name: "DeFi Portfolio Tracker",
    icon: defiportfolio,
    url: "https://portfolio.defiprime.com/"
  },
  {
    name: "Clovers",
    icon: clovers,
    url: "https://clovers.network/"
  },
  {
    name: "Bamboo Relay",
    icon: bamboorelay,
    url: "https://bamboorelay.com/"
  },
  {
    name: "Heroes of Ether",
    icon: heroesofether,
    url: "https://heroesofether.io/"
  },
  {
    name: "1inch Exchange",
    icon: oneinchexchange,
    url: "https://1inch.exchange/"
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
  },
  {
    name: "LuckyStrike",
    icon: luckystrike,
    url: "https://lucky-strike.io/game/"
  }
];

export default DAPPS;
