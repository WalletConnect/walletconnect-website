import Head from 'next/head';
import Link from 'next/link';
import { WALLET_CONNECT_DOCS_URL, WALLET_CONNECT_GITHUB_URL } from '../common/Constants';
import { HeaderLink } from './HeaderLink';



const Header = () => (
  <>
    <Head>
      <title>WalletConnect</title>
    </Head>

    <header className="flex items-center justify-between px-5 mx-10 my-8 bg-white">
      <div className="flex space-x-6">
        <HeaderLink href={WALLET_CONNECT_GITHUB_URL} external>
          Github
        </HeaderLink>
        <HeaderLink href={WALLET_CONNECT_DOCS_URL} external>
          Docs
        </HeaderLink>
      </div>
      <div className="flex">
        <div className="w-16 mx-6 sm:w-20 md:w-28">
          <Link href="/">
            <img className="cursor-pointer object-fit" src='walletconnect-logo.svg' alt='walletconnect logo' />
          </Link>
        </div>
      </div>
      <div className="flex space-x-6">
        <HeaderLink href='/wallets'>
          Wallets
        </HeaderLink>
        <HeaderLink href='/apps'>
          Apps
        </HeaderLink>
      </div>
    </header>
  </>
)
export default Header;


