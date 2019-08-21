import { IApp } from "../helpers/types";

import balance from "../assets/dapps/balance.jpg";
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

const DAPPS: IApp[] = [
  {
    name: "Balance",
    icon: balance,
    url: "https://manager.balance.io/"
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
    name: "DDEX",
    icon: ddex,
    url: "https://ddex.io/"
  },
  {
    name: "3Box",
    icon: box,
    url: "https://3box.io/"
  },
  {
    name: "Bamboo Relay",
    icon: bamboorelay,
    url: "https://bamboorelay.com/"
  },
  {
    name: "Clovers",
    icon: clovers,
    url: "https://clovers.network/"
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
  }
];

export default DAPPS;
