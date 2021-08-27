import TitledContent from "../components/TitledContext";
import FUNDERS from "../common/funders";
import CONTRIBUTORS from "../common/contributors";
import { Styled, StyledIcon, StyledLink } from "../components/StyledLinks";
import {
  DOCS_URL,
  WALLETS_URL,
  WEB3MODAL_URL,
  WEB3_QUICKSTART_URL,
} from "../common/constants";
import FAQContent from "../components/FAQContent";

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
  <div className="text-cool-gray-500">
    <h1 className="flex justify-center mt-20 text-4xl font-semibold ">
      WalletConnect
    </h1>
    <div className="mx-8 mt-8">
      <h2 className="flex justify-center text-3xl font-thin text-center">
        Open protocol for connecting Wallets to Dapps
      </h2>
      <div className="mt-14 lg:flex lg:justify-center">
        <img
          className="lg:max-w-4xl"
          src="banner-main.png"
          alt="wallet connect banner diagram"
        />
      </div>
    </div>
  </div>
);

const FAQ = () => (
  <TitledContent title="Frequently asked questions" maxwidth="sm:max-w-3xl">
    <FAQContent title="How do I install WalletConnect?">
      WalletConnect is not an app, but a protocol supported by many different
      decentralised applications and wallets. To use WalletConnect, install any 
      <StyledLink type={Styled.PageLink} href={WALLETS_URL}>
        mobile wallet
      </StyledLink>
      supporting the WalletConnect protocol. WalletConnect wallets are available for
      Android and iPhone.
    </FAQContent>
    <FAQContent title="Is there a token?">
      There is no token. WalletConnect protocol does not run on a blockchain and
      there are no fees.
    </FAQContent>
    <FAQContent title="How can I help WalletConnect project?">
      WalletConnect project is developed by open source developers of various
      Wallet and Dapp projects. Please contact us on Discord if you
      want to help the project.
    </FAQContent>
    <FAQContent title="How can I build a wallet supporting WalletConnect?">
      There are libraries for React-Native (Javascript), Android (Kotlin) and
      Swift (iOS) available. Read more about it in our{" "}
      <StyledLink type={Styled.PageLink} href={DOCS_URL}>
        documentation.
      </StyledLink>
    </FAQContent>
    <FAQContent title="How can I add WalletConnect support to a Dapp I developed?">
      You can support various wallets either using{" "}
      <StyledLink type={Styled.PageLink} href={WEB3MODAL_URL} external>
        Web3Modal library{" "}
      </StyledLink>
      or add support for{" "}
      <StyledLink type={Styled.PageLink} href={WEB3_QUICKSTART_URL} external>
        WalletConnect provider directly
      </StyledLink>
      .
    </FAQContent>
    <FAQContent title="How do web frontend and mobile wallets communicate?">
      Communication happens over a bridge server that relays messages without
      access to their content. The contents are encrypted using the session data
      shared by the QR code or deep link between the dapp and wallet. Read
      more about it in our{" "}
      <StyledLink type={Styled.PageLink} href={DOCS_URL}>
        documentation.
      </StyledLink>
      WalletConnect Labs runs a public bridge server, but you can also deploy
      your own.
    </FAQContent>
  </TitledContent>
);

const TopCodeContributors = () => (
  <TitledContent title="Top Code Contributors">
    <div className="grid grid-cols-3 gap-12 mt-12 sm:gap-10 md:gap-20 md:grid-cols-4 lg:grid-cols-5">
      {CONTRIBUTORS.map((contibutor) => (
        <div key={contibutor.name} className="flex justify-center">
          <StyledIcon
            styles="w-16 sm:w-24 lg:w-28"
            altText={contibutor.name}
            iconPath={contibutor.icon}
            href={contibutor.url}
          />
        </div>
      ))}
    </div>
  </TitledContent>
);

const TopProjectFunders = () => (
  <TitledContent title="Top  Project Funders">
    <div className="grid grid-cols-2 gap-12 mt-12 sm:gap-16 md:gap-28 sm:grid-cols-3">
      {FUNDERS.map((funder) => (
        <div key={funder.name} className="flex justify-center">
          <StyledIcon
            styles="w-36 sm:w-40 md:w-52"
            altText={funder.name}
            iconPath={funder.icon}
            href={funder.url}
          />
        </div>
      ))}
    </div>
  </TitledContent>
);

const WhatItIs = () => (
  <div className="flex sm:flex-row sm:justify-center">
    <div className="flex flex-col mx-6 mt-16 font-thin text-gray-700 sm:flex-row sm:mx-8 sm:space-x-16 sm:max-w-5xl">
      <div className="sm:w-1/2">
        <h2 className="text-3xl">What is WalletConnect?</h2>
        <p className="mt-6 text-lg leading-6">
          WalletConnect is an open source protocol for connecting decentralised
          applications to mobile wallets with QR code scanning or deep linking.
          A user can interact securely with any Dapp from their mobile phone,
          making WalletConnect wallets a safer choice compared to desktop or
          browser extension wallets.
        </p>
      </div>
      <div className="mt-16 sm:w-1/2 sm:mt-0">
        <h2 className="text-3xl">How does it work?</h2>
        <p className="mt-6 text-lg leading-6">
          WalletConnect connects web applications to supported
          <StyledLink type={Styled.PageLink} href={WALLETS_URL}>
            mobile wallets.
          </StyledLink>
          The WalletConnect session is started by scanning a QR code (desktop) or
          by clicking an application deep link (mobile).
        </p>
      </div>
    </div>
  </div>
);
