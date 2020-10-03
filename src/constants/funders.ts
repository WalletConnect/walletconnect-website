import { IProject } from "../helpers/types";

const FUNDERS: IProject[] = [
  {
    name: "Ethereum Foundation",
    icon: require("../assets/funders/ethereum-foundation.png"),
    url: "https://ethereum.foundation/",
    style: {
      monochrome: true,
    },
  },
  {
    name: "Consensys Labs",
    icon: require("../assets/funders/consensys-labs.png"),
    url: "hhttps://labs.consensys.net/",
    style: {
      monochrome: true,
    },
  },
  {
    name: "Gitcoin Grants",
    icon: require("../assets/funders/gitcoin-grants.png"),
    url: "https://gitcoin.co/grants/275/walletconnect",
    style: {
      monochrome: true,
    },
  },
];

export default FUNDERS;
