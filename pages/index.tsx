import Link from 'next/link';

const Home = () => (
  <main>
    <div className="flex flex-col items-center mx-20 mt-20 space-y-10">
      <h1 className="text-3xl font-semibold text-blue-900">
        WalletConnect
      </h1>
      <h2 className="text-2xl font-thin">
        Open protocol for connecting Wallets to Dapps
      </h2>
      <div>
        <img src='banner-main.png' alt='wallet connect banner diagram' />
      </div>
    </div>
  </main>
)

export default Home;