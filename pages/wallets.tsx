import { TIME_TO_REVALIDATION, IMG_API_URL, WALLETS_API_URL } from "../common/constants";
import Banner from "../components/walletsdapps/Banner";
import LogoDisplay from "../components/walletsdapps/LogoDisplay";
import MessageToUser from "../components/walletsdapps/MessageToUser";



const Wallets = ({ data }) => {
  const ids = Object.keys(data);
  const item = data[ids[0]];

  return (
    <main className="flex flex-col mx-8 mt-12 space-y-10 text-center align-middle">
      <Banner title="Wallets">
        Multiple iOS and Android wallets support the WalletConnect protocol.
        Simply scan a QR code from your desktop computer screen to start securely
        using a dApp with your mobile wallet. Interaction between mobile apps and
        mobile browsers are supported via mobile deep linking.
      </Banner>
      <LogoDisplay data={data} ids={ids} />
      <MessageToUser />
    </main>
  )
}
export default Wallets;




export const getStaticProps = async () => {
  const resp = await fetch(WALLETS_API_URL);
  const data = await resp.json();

  return { props: { data }, revalidate: TIME_TO_REVALIDATION }
}

