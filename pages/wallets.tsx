import { TIME_TO_REVALIDATION, IMG_API_URL, WALLETS_API_URL } from "../common/constants";
import { IDisplayElementProps } from "../common/types";
import Banner from "../components/Banner";
import LogoDisplay from "../components/LogoDisplay";
import OpenAPullRequestMsg from "../components/OpenAPullRequestMsg";



const Wallets = ({ data, ids }: IDisplayElementProps) => (

  <main className="flex flex-col mx-8 mt-12 space-y-10 text-center align-middle">
    <Banner title="Wallets">
      Multiple iOS and Android wallets support the WalletConnect protocol.
      Simply scan a QR code from your desktop computer screen to start securely
      using a dApp with your mobile wallet. Interaction between mobile apps and
      mobile browsers are supported via mobile deep linking.
      </Banner>
    <LogoDisplay data={data} ids={ids} />
    <div className="mt-10" />
    <OpenAPullRequestMsg />
  </main>

)
export default Wallets;




export const getStaticProps = async () => {
  const resp = await fetch(WALLETS_API_URL);
  const data = await resp.json();
  const ids = Object.keys(data);

  return { props: { data, ids }, revalidate: TIME_TO_REVALIDATION }
}

