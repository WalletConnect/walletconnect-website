import TitledContent from "../components/TitledContext";
import IconImage from "../components/IconImage";
import FUNDERS from '../common/funders';
import CONTRIBUTORS from '../common/contributors';
import { PageLink } from "../components/StyledLinks";
import { DOCS_URL, WALLETS_URL, WEB3MODAL_URL, WEB3_QUICKSTART_URL } from "../common/constants";



const Home = () => (
  <main>
    <Banner />
    <WhatItIs />
    <TopProjectFunders />
    <TopCodeContributors />
    <FAQ />
  </main>
);
export default Home;



const Banner = () => (
  <>
    <h1 className="flex justify-center mt-20 text-4xl font-semibold text-cool-gray-500">
      WalletConnect
    </h1>
    <div className="mx-8 mt-8">
      <h2 className="flex justify-center text-3xl font-thin text-center text-cool-gray-500">
        Open protocol for connecting Wallets to Dapps
      </h2>
      <div className="mt-14 lg:flex lg:justify-center">
        <img className="lg:max-w-4xl" src='banner-main.png' alt='wallet connect banner diagram' />
      </div>
    </div>
  </>
);


const FAQ = () => (
  <TitledContent title='Frequently asked questions' maxwidth='sm:max-w-3xl'>
    <FAQContent title="How do I install WalletConnect?">
      WalletConnect is not an app, but a protocol supported by many different
      decentralised applications and wallets. Install any of
      <PageLink href={WALLETS_URL}>mobile wallets</PageLink>
      supporting WalletConnect protocol. WalletConnect wallets
      are available for Android and iPhone.
    </FAQContent>
    <FAQContent title="Is there a token?">
      There is no token. WalletConnect protocol does not run on a blockchain and there are no fees.
    </FAQContent>
    <FAQContent title="How can I help WalletConnect project?">
      WalletConnect project is developed by open source developers of various
      Wallet and Dapp projects. Please contact us on Discord or Telegram if
      you want to help the project.
    </FAQContent>
    <FAQContent title="How can I build a wallet supporting WalletConnect?">
      There are libraries for React-Native(Javascript), Android (Kotlin) and Swift (iOS) available.
      Read more about it in our <PageLink href={DOCS_URL}>documentation.</PageLink>
    </FAQContent>
    <FAQContent title="How can I add WalletConnect support to Dapp I developed?">
      You can support various wallets either using  <PageLink href={WEB3MODAL_URL} external>Web3Modal library </PageLink>
      or add a support for <PageLink href={WEB3_QUICKSTART_URL} external>WalletConnect provider directly</PageLink>.
    </FAQContent>
    <FAQContent title="How web frontend and mobile wallets communicate?">
      Communication happens over a bridge server that relays messages without
      access to their content. The contents are encrypted using the session data
      shared by the QR code or deep link between the dapp and the wallet. Read
      more about it in our <PageLink href={DOCS_URL}>documentation.</PageLink>
      WalletConnect Association runs a public bridge server, but you can also roll your own.
    </FAQContent>
  </TitledContent>
)



const FAQContent = ({ title, children }) => (
  <div className="mt-8">
    <h4 className="text-2xl">
      {title}
    </h4>
    <p className="mt-6 text-lg leading-6 text-gray-600">
      {children}
    </p>
  </div>
)



const TopCodeContributors = () => (
  <TitledContent title='Top Code Contributors'>
    <div className="grid grid-cols-3 gap-12 mt-12 sm:gap-16 md:gap-20 sm:grid-cols-4 lg:grid-cols-5">
      {
        CONTRIBUTORS.map(contibutor => (
          <IconImage
            styleClasses="sm:p-4"
            key={contibutor.name}
            name={contibutor.name}
            icon={contibutor.icon}
            linkTo={contibutor.url}
          />
        ))
      }
    </div>
  </TitledContent>
)


const TopProjectFunders = () => (
  <TitledContent title='Top  Project Funders'>
    <div className="grid grid-cols-2 gap-12 mt-12 sm:gap-16 md:gap-20 sm:grid-cols-3">
      {
        FUNDERS.map(funder => (
          <IconImage
            styleClasses="sm:p-4"
            key={funder.name}
            name={funder.name}
            icon={funder.icon}
            linkTo={funder.url}
          />
        ))
      }
    </div>
  </TitledContent>
)



const WhatItIs = () => (
  <div className="flex sm:flex-row sm:justify-center">
    <div className="flex flex-col mx-6 mt-16 font-thin sm:flex-row sm:mx-8 sm:space-x-16 sm:max-w-5xl">
      <div className="sm:w-1/2">
        <h2 className="text-3xl">
          What is Is WalletConnect?
      </h2>
        <p className="mt-6 text-lg leading-6 text-gray-700">
          WalletConnect is an open source protocol for connecting decentralised
          applications to mobile wallets with QR code scanning or deep linking.
          A user can interact securely with any Dapp from their mobile phone,
          making WalletConnect wallets a safer choice compared to desktop or
          browser extension wallets.
      </p>
      </div>
      <div className="mt-16 sm:w-1/2 sm:mt-0">
        <h2 className="text-3xl">
          How does it work?
      </h2>
        <p className="mt-6 text-lg leading-6 text-gray-700">
          WalletConnect connects web applications to supported
          <PageLink href={WALLETS_URL}>mobile wallets</PageLink>
        WalletConnect session is started by a scanning a QR code (desktop) or
        by clicking an application deep link (mobile).
      </p>
      </div>
    </div>
  </div>
)