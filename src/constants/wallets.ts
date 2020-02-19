import { IApp } from "../helpers/types";

import walleth from "../assets/wallets/walleth.png";
import trust from "../assets/wallets/trust-wallet.png";
import tokenary from "../assets/wallets/tokenary.png";
import rainbow from "../assets/wallets/rainbow.jpg";
import pillar from "../assets/wallets/pillar-wallet.jpg";
import metamask from "../assets/wallets/metamask.png";
import argent from "../assets/wallets/argent.jpg";
import gnosisSafe from "../assets/wallets/gnosis-safe.png";
import safepal from "../assets/wallets/safepal.png";
import equal from "../assets/wallets/equal.jpg";
import coinomi from "../assets/wallets/coinomi.svg";
import gridplus from "../assets/wallets/gridplus.png";
import coolwallets from "../assets/wallets/coolwallet-s.png";
import atomic from "../assets/wallets/atomic.png";
import authereum from "../assets/wallets/authereum.png";
import alice from "../assets/wallets/alice.jpg";
import infinito from "../assets/wallets/infinito-wallet.png";

const WALLETS: IApp[] = [
  {
    name: "Trust",
    icon: trust,
    url: "https://trustwallet.com/"
  },
  {
    name: "Metamask",
    icon: metamask,
    url: "https://mobile.metamask.io/"
  },
  {
    name: "Pillar",
    icon: pillar,
    url: "https://pillarproject.io/"
  },
  {
    name: "Gnosis Safe",
    icon: gnosisSafe,
    url: "https://safe.gnosis.io/"
  },
  {
    name: "Walleth",
    icon: walleth,
    url: "https://walleth.org/"
  },
  {
    name: "Tokenary",
    icon: tokenary,
    url: "https://tokenary.io/"
  },
  {
    name: "Argent",
    icon: argent,
    url: "https://www.argent.xyz/"
  },
  {
    name: "Rainbow",
    icon: rainbow,
    url: "https://rainbow.me/"
  },
  {
    name: "SafePal",
    icon: safepal,
    url: "https://safepal.io/"
  },
  {
    name: "Equal",
    icon: equal,
    url: "https://equal.tech/"
  },
  {
    name: "Coinomi",
    icon: coinomi,
    url: "https://coinomi.com/"
  },
  {
    name: "GridPlus",
    icon: gridplus,
    url: "https://gridplus.io/"
  },
  {
    name: "CoolWallet S",
    icon: coolwallets,
    url: "https://www.coolwallet.io/"
  },
  {
    name: "Atomic",
    icon: atomic,
    url: "https://atomicwallet.io/"
  },
  {
    name: "Authereum",
    icon: authereum,
    url: "https://authereum.org"
  },
  {
    name: "Alice",
    icon: alice,
    url: "https://www.alicedapp.com/"
  },
  {
    name: "Infinito",
    icon: infinito,
    url: "https://www.infinitowallet.io/"
  }
];

export default WALLETS;
