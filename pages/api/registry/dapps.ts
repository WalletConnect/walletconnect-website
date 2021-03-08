import { DAPP_REGISTRY_URI } from "../../../common/Constants";

export default async (req, res) => {
  // const cachedRegistry = await fetch('http://localhost:3000/registry');
  // const data = await cachedRegistry.text();

  const regData = await fetch(DAPP_REGISTRY_URI);
  const data = await regData.json();

  //check data, error response if not there

  res.statusCode = 200;
  res.json(data);
}
