import { APPS_API_URL, TIME_TO_REVALIDATION, IMG_API_URL } from "../common/constants";
import Banner from "../components/walletsdapps/Banner";
import LogoDisplay from "../components/walletsdapps/LogoDisplay";
import MessageToUser from "../components/walletsdapps/MessageToUser";



const Apps = ({ data }) => {
  const ids = Object.keys(data);
  const item = data[ids[0]];


  return (
    <main className="flex flex-col mx-8 mt-12 space-y-10 text-center align-middle">
      <Banner title="dApps">
        Following decentralised finance and blockchain applications support WalletConnect wallets.
      </Banner>
      <LogoDisplay data={data} ids={ids} />
      <MessageToUser />
    </main>
  )
}
export default Apps;




export const getStaticProps = async () => {
  const resp = await fetch(APPS_API_URL);
  const data = await resp.json();

  return { props: { data }, revalidate: TIME_TO_REVALIDATION }
}

