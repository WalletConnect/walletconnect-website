import { IProject } from "../helpers/types";

const CONTRIBUTORS: IProject[] = [
  {
    name: "Rainbow",
    icon: require("../assets/wallets/rainbow.png"),
    url: "https://rainbow.me/",
    style: { monochrome: true },
  },
  {
    name: "Trust",
    icon: require("../assets/wallets/trust-wallet.png"),
    url: "https://trustwallet.com/",
    style: { monochrome: true },
  },
  {
    name: "Argent",
    icon: require("../assets/wallets/argent.jpg"),
    url: "https://www.argent.xyz/",
    style: { monochrome: true },
  },
  {
    name: "Walleth",
    icon: require("../assets/wallets/walleth.png"),
    url: "https://walleth.org/",
    style: {},
  },
  {
    name: "Gnosis",
    icon: require("../assets/wallets/gnosis-safe.jpg"),
    url: "https://gnosis-safe.io/",
    style: { monochrome: true },
  },
];

export default CONTRIBUTORS;
