import { IApp } from "../helpers/types";

import walleth from "../assets/wallets/walleth.png";
import trust from "../assets/wallets/trust-wallet.png";
import tokenary from "../assets/wallets/tokenary.png";
import rainbow from "../assets/wallets/rainbow.png";
import pillar from "../assets/wallets/pillar-wallet.jpg";
import metamask from "../assets/wallets/metamask.png";
import argent from "../assets/wallets/argent.jpg";
import gnosisSafe from "../assets/wallets/gnosis-safe.png";
import safepal from "../assets/wallets/safepal.png";
import equal from "../assets/wallets/equal.jpg";
import coinomi from "../assets/wallets/coinomi.jpg";
import gridplus from "../assets/wallets/gridplus.png";
import coolwallets from "../assets/wallets/coolwallet-s.png";
import atomic from "../assets/wallets/atomic.png";
import authereum from "../assets/wallets/authereum.png";
import alice from "../assets/wallets/alice.png";
import infinito from "../assets/wallets/infinito-wallet.png";
import mathwallet from "../assets/wallets/math-wallet.png";
import mykey from "../assets/wallets/mykey.png";
import spatium from "../assets/wallets/spatium.jpg";
import imtoken from "../assets/wallets/imtoken.png";

const WALLETS: IApp[] = [
  {
    name: "Trust",
    icon: trust,
    url: "https://trustwallet.com/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Metamask",
    icon: metamask,
    url: "https://mobile.metamask.io/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "imToken",
    icon: imtoken,
    url: "https://token.im/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Pillar",
    icon: pillar,
    url: "https://pillarproject.io/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Gnosis Safe",
    icon: gnosisSafe,
    url: "https://safe.gnosis.io/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Walleth",
    icon: walleth,
    url: "https://walleth.org/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Tokenary",
    icon: tokenary,
    url: "https://tokenary.io/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Argent",
    icon: argent,
    url: "https://www.argent.xyz/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Rainbow",
    icon: rainbow,
    url: "https://rainbow.me/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "SafePal",
    icon: safepal,
    url: "https://safepal.io/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Equal",
    icon: equal,
    url: "https://equal.tech/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Coinomi",
    icon: coinomi,
    url: "https://coinomi.com/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "GridPlus",
    icon: gridplus,
    url: "https://gridplus.io/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "CoolWallet S",
    icon: coolwallets,
    url: "https://www.coolwallet.io/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Atomic",
    icon: atomic,
    url: "https://atomicwallet.io/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Authereum",
    icon: authereum,
    url: "https://authereum.org",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Alice",
    icon: alice,
    url: "https://www.alicedapp.com/",
    style: {
      cropCircle: true,
    },
  },
  {
    name: "Infinito",
    icon: infinito,
    url: "https://www.infinitowallet.io/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "MathWallet",
    icon: mathwallet,
    url: "https://mathwallet.org/en/",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "MYKEY",
    icon: mykey,
    url: "https://mykey.org",
    style: {
      cropCircle: false,
    },
  },
  {
    name: "Spatium",
    icon: spatium,
    url: "https://spatium.net/",
    style: {
      cropCircle: true,
    },
  },
];

export default WALLETS;
