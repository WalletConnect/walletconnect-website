import Head from 'next/head';
import Link from 'next/link';
import getConfig from 'next/config'
import { HeaderLink } from './HeaderLink';


const ShadowHeader = () => {
  const { serverRuntimeConfig } = getConfig();

  return (
    <>
      <Head>
        <title>WalletConnect</title>
      </Head>
      <header className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 bg-white md:py-6 ">
        <div className="absolute inset-0 shadow-lg opacity-50"></div>
        <div className="z-20 flex justify-around w-full sm:pr-10 md:pr-20">
          <HeaderLink href={serverRuntimeConfig.WALLET_CONNECT_GITHUB_URL} external>
            Github
        </HeaderLink>
          <HeaderLink href={serverRuntimeConfig.WALLET_CONNECT_DOCS_URL} external>
            Docs
        </HeaderLink>
        </div>
        <div className="z-20 flex">
          <div className="w-16 mx-6 sm:w-20 md:w-28">
            <Link href="/">
              <img className="cursor-pointer object-fit" src='walletconnect-logo.svg' alt='walletconnect logo' />
            </Link>
          </div>
        </div>
        <div className="z-20 flex justify-around w-full sm:pl-10 md:pl-20">
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
}

export default ShadowHeader;