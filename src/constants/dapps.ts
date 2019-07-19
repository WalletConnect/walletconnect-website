import { IApp } from "../helpers/types";

import balance from "../assets/dapps/balance.jpg";
import zerion from "../assets/dapps/zerion.png";
import localethereum from "../assets/dapps/localethereum.png";
import ddex from "../assets/dapps/ddex.png";
import bamboorelay from "../assets/dapps/bamboorelay.png";
import heroesofether from "../assets/dapps/heroesofether.png";

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
    name: "DDEX",
    icon: ddex,
    url: "https://ddex.io/"
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
  }
];

export default DAPPS;
