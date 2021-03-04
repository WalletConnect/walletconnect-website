import Head from 'next/head';
import Link from 'next/link';


const Header = () => (
  <>
    <Head>
      <title>WalletConnect</title>
    </Head>

    <header className="flex items-center justify-between px-5 my-8 bg-white ">
      <div className="flex">
        Github Docs
      </div>
      <div className="flex">
        <div className="w-28">
          <Link href="/">
            <img className="cursor-pointer object-fit" src='walletconnect-logo.svg' />
          </Link>
        </div>
      </div>
      <div className="flex">
        Wallet Apps
      </div>
    </header>
  </>
)

export default Header;



const HeaderLink = () =>
(
  <div>

  </div>
)