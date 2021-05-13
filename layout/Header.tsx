import Head from "next/head";
import Link from "next/link";
import {
  APPS_URL,
  DOCS_URL,
  GITHUB_URL,
  WALLETS_URL,
} from "../common/constants";
import { Styled, StyledLink } from "../components/StyledLinks";

const Header = () => {
  const title = `WalletConnect`;
  const url = `https://walletconnect.org`;
  const description = `Open protocol for connecting Wallets to Dapps`;
  const keywords = `ethereum, cryptocurrency, wallet, mobile, connect, bridge, relay, proxy, standard, protocol, crypto, tokens, dapp`;
  const twitterUsername = `@walletconnect`;
  const facebookId = "365412154213405";

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterUsername} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:img:src" content={`${url}/social-card.png`} />
        <meta name="og:title" content={title} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content={url} />
        <meta name="og:image" content={`${url}/social-card.png`} />
        <meta name="og:description" content={description} />
        <meta name="og:site_name" content={title} />
        <meta name="fb:admins" content={facebookId} />
      </Head>
      <header className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 bg-white md:py-6 ">
        <div className="absolute inset-0 shadow-lg opacity-50"></div>
        <div className="z-20 flex justify-around w-full sm:pr-10 md:pr-20">
          <StyledLink href={GITHUB_URL} type={Styled.HeaderLink} external>
            GitHub
          </StyledLink>
          <StyledLink href={DOCS_URL} type={Styled.HeaderLink} external>
            Docs
          </StyledLink>
        </div>
        <div className="z-20 flex">
          <div className="w-16 mx-6 sm:w-20 md:w-28">
            <Link href="/">
              <img
                className="cursor-pointer object-fit"
                src="walletconnect-logo.svg"
                alt="walletconnect logo"
              />
            </Link>
          </div>
        </div>
        <div className="z-20 flex justify-around w-full sm:pl-10 md:pl-20">
          <StyledLink href={WALLETS_URL} type={Styled.HeaderLink}>
            Wallets
          </StyledLink>
          <StyledLink href={APPS_URL} type={Styled.HeaderLink}>
            Apps
          </StyledLink>
        </div>
      </header>
    </>
  );
};

export default Header;
