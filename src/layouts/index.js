import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled, { injectGlobal } from "styled-components";
import { globalStyles, colors, responsive } from "../styles";

injectGlobal`${globalStyles}`;

const SWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgb(${colors.white});
`;

const SContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;

const SContainer = styled.div`
  height: 100%;
  max-width: 1064px;
  margin: 0 auto;
  padding: 0;
`;

const SFlex = styled.div`
  display: flex;
  height: 100%;
  @media screen and (${responsive.sm.max}) {
    flex-direction: column;
  }
`;

const TemplateWrapper = ({ children, location }) => {
  const name = `WalletConnect`;
  const title = `WalletConnect`;
  const url = `https://walletconnect.org`;
  const description = `Open protocol for connecting Wallets to Dapps`;
  const keywords = `ethereum, cryptocurrency, wallet, mobile, connect, bridge, relay, proxy, standard, protocol, crypto, tokens, dapp`;
  const twitterUsername = `@walletconnect`;
  const facebookId = "365412154213405";
  return (
    <SWrapper>
      <Helmet>
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
        <meta name="og:site_name" content={name} />
        <meta name="fb:admins" content={facebookId} />
        <script type="text/javascript" src="/unregisterServiceWorker.js" />
      </Helmet>
      <SFlex>
        <SContent>
          <Header pathname={location.pathname} />
          <SContainer>{children()}</SContainer>
          <Footer pathname={location.pathname} />
        </SContent>
      </SFlex>
    </SWrapper>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
