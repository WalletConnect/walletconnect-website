import TitledContent from "../layout/TitledContext";
import FUNDERS from '../common/funders';
import CONTRIBUTORS from '../common/contributors';


const Home = () => (
  <main>
    <Banner />
    <WhatItIs />
    <TopProjectFunders />
    <TopCodeContributors />

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



const TopCodeContributors = () => (
  <TitledContent title='Top Code Contributors'>
    <div className="grid grid-cols-3 gap-12 mt-12 sm:gap-16 md:gap-20 sm:grid-cols-4 lg:grid-cols-5">
      {
        CONTRIBUTORS.map(contibutor => (
          <IconImage
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



const IconImage = ({ name, icon, linkTo }) => (
  <a href={linkTo} target="_blank" rel="noopener noreferrer">
    <img
      className="filter-grayscale hover:filter-none sm:p-4"
      alt={name}
      src={icon}
    />
  </a>

)


const WhatItIs = () => (
  <div className="flex sm:flex-row sm:justify-center">
    <div className="flex flex-col mx-6 mt-16 font-thin sm:flex-row sm:mx-8 sm:space-x-16 sm:max-w-5xl">
      <div className="sm:w-1/2">
        <h2 className="text-3xl">
          What is Is WalletConnect?
      </h2>
        <p className="mt-6 text-lg text-gray-700">
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
        <p className="mt-6 text-lg text-gray-700">
          WalletConnect connects web applications to supported <span className="font-semibold text-blue-500">mobile wallets. </span>
        WalletConnect session is started by a scanning a QR code (desktop) or
        by clicking an application deep link (mobile).
      </p>
      </div>
    </div>
  </div>
)