import { IWallet } from "../helpers/types";

import walleth from "../assets/wallets/walleth.png";
import trust from "../assets/wallets/trust-wallet.png";
import tokenary from "../assets/wallets/tokenary.png";
import rainbow from "../assets/wallets/rainbow.jpg";
import pillar from "../assets/wallets/pillar-wallet.jpg";
import metamask from "../assets/wallets/metamask.png";
import argent from "../assets/wallets/argent.jpg";
import gnosisSafe from "../assets/wallets/gnosis-safe.png";

const WALLETS: IWallet[] = [
  {
    name: "Walleth",
    icon: walleth,
    url: "https://walleth.org/"
  },
  {
    name: "Trust",
    icon: trust,
    url: "https://trustwallet.com/"
  },
  {
    name: "Tokenary",
    icon: tokenary,
    url: "https://tokenary.io/"
  },
  {
    name: "Rainbow",
    icon: rainbow,
    url: "https://rainbow.me/"
  },
  {
    name: "Pillar",
    icon: pillar,
    url: "https://pillarproject.io/"
  },
  {
    name: "Metamask",
    icon: metamask,
    url: "https://mobile.metamask.io/"
  },
  {
    name: "Argent",
    icon: argent,
    url: "https://www.argent.xyz/"
  },
  {
    name: "Gnosis Safe",
    icon: gnosisSafe,
    url: "https://safe.gnosis.io/"
  }
];

export default WALLETS;
