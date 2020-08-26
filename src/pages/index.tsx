import React from "react";
import styled from "styled-components";

import Link from "gatsby-link";
import Layout from "../components/layout";
import {
  SIndexPage,
  SBrandingWrapper,
  SBranding,
  SSection,
} from "../components/pageStyles";
import banner from "../assets/banner.png";
import { colors, responsive } from "../styles";

const STagline = styled.h2`
  margin: 30px 0;
  font-size: 30px;
  font-weight: 300;
  text-align: center;
`;

const SBannerWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 30px auto;
  & img {
    width: 100%;
  }
`;
const SDescriptionWrapper = styled.div`
  flex: 1;
  margin: 30px -32px;
  display: flex;
  text-align: left;
  justify-content: space-between;
  @media screen and (${responsive.sm.max}) {
    flex-direction: column;
  }
  & h2 {
    font-size: 32px;
    font-weight: 300;
    color: rgb(${colors.darkGrey});
    margin-bottom: 20px;
  }
`;
const SColumn = styled.div`
  flex: 1;
  padding: 32px;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.35;
`;

const SFAQWrapper = styled.div`
  display: block;
  max-width: 600px;
  margin: 0 auto;

  & h2 {
    font-size: 32px;
    font-weight: 300;
    color: rgb(${colors.darkGrey});
    margin-bottom: 20px;
  }
`;

const SQuestion = styled.div`
  display: block;
  margin-top: 30px;
  text-align: left;

  & h3 {
    margin-bottom: 10px;

    font-size: 26px;
    font-weight: 300;
    color: rgb(${colors.darkGrey});
    margin-bottom: 20px;
  }

  & p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.35;
  }
`;

const IndexPage = (props: any) => (
  <Layout location={props.location}>
    <SIndexPage>
      <SBrandingWrapper>
        <SBranding>WalletConnect</SBranding>
        <STagline>Open protocol for connecting Wallets to Dapps</STagline>
      </SBrandingWrapper>
      <SSection>
        <SBannerWrapper>
          <img src={banner} alt="WalletConnect" />
        </SBannerWrapper>
        <SDescriptionWrapper>
          <SColumn>
            <h2>What is WalletConnect?</h2>
            <p>
              WalletConnect is an open source protocol for connecting
              decentralised applications to mobile wallets with QR code scanning or deep linking.
              A user can
              interact securely with any Dapp from their mobile phone, making
              WalletConnect wallets a safer choice compared to desktop or
              browser extension wallets.
            </p>
          </SColumn>
          <SColumn>
            <h2>How does it work?</h2>
            <p>
              WalletConnect connects web applications to supported{" "}
              <Link to="/wallets">mobile wallets</Link>. WalletConnect session
              is started by a scanning a QR code (desktop) or by clicking an
              application deep link (mobile).
            </p>
          </SColumn>
        </SDescriptionWrapper>
        <SFAQWrapper>
          <h2>Frequently asked questions</h2>

          <SQuestion>
            <h3>How do I install WalletConnect?</h3>
            <p>
              WalletConnect is not an app, but a protocol supported by many
              different decentralised applications and wallets. Install any of{" "}
              <Link to="/wallets">mobile wallets</Link> supporting WalletConnect
              protocol. WalletConnect wallets are available for Android and
              iPhone.
            </p>
          </SQuestion>

          <SQuestion>
            <h3>Is there a token?</h3>
            <p>
              There is no token. WalletConnect protocol does not run on a
              blockchain and there are no fees.
            </p>
          </SQuestion>

          <SQuestion>
            <h3>How can I help WalletConnect project?</h3>
            <p>
              WalletConnect project is developed by open source developers of
              various Wallet and Dapp projects. Please contact us on Discord or
              Telegram if you want to help the project.
            </p>
          </SQuestion>

          <SQuestion>
            <h3>How can I build a wallet supporting WalletConnect?</h3>
            <p>
              There are libraries for React-Native(Javascript), Android (Java)
              and Swift (iOS) available. Read more about it in our{" "}
              <a href="https://docs.walletconnect.org/quick-start/wallets">
                documentation
              </a>
              .
            </p>
          </SQuestion>

          <SQuestion>
            <h3>How can I add WalletConnect support to Dapp I developed?</h3>
            <p>
              You can support various wallets either using{" "}
              <a href="https://github.com/Web3Modal/web3modal">
                Web3Modal library
              </a>{" "}
              or add a support for{" "}
              <a href="https://docs.walletconnect.org/quick-start/dapps/web3-provider">
                WalletConnect provider directly
              </a>
              .
            </p>
          </SQuestion>

          <SQuestion>
            <h3>How web frontend and mobile wallets communicate?</h3>
            <p>
              Communication happens over a bridge server that relays messages
              without access to their content. The contents are encrypted using
              the session data shared by the QR code or deep link between the
              dapp and the wallet. Read more about it in our{" "}
              <a href="https://https://docs.walletconnect.org/">
                documentation
              </a>
              . WalletConnect Association runs a public bridge server, but you
              can also roll your own.
            </p>
          </SQuestion>

        </SFAQWrapper>
      </SSection>
    </SIndexPage>
  </Layout>
);

export default IndexPage;
