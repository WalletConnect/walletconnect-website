import Head from 'next/head';


const Header = () => (
  <>
    <Head>
      <title>WalletConnect</title>
    </Head>

    <header className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 bg-white ">
      <div className="absolute inset-0 shadow-lg opacity-50"></div>
      <div className="flex">
        a
      </div>
      <div className="flex">
        <img className="w-56" src='walletconnect-logo.png' />
      </div>
      <div className="flex">
        b
      </div>
    </header>
  </>
)

export default Header;