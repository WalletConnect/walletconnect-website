import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import banner from "../assets/banner.png";
import { colors, responsive } from "../styles";

const SIndexPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 0 32px;
  padding-top: 30px;
`;

const SBrandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;
const SBranding = styled.h1`
  font-size: 35px;
  font-weight: 500;
  text-align: center;
`;

const STagline = styled.h2`
  margin: 30px 0;
  font-size: 30px;
  font-weight: 300;
  text-align: center;
`;

const SSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 600px;
  z-index: 0;
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

const IndexPage = props => (
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
              WalletConnect is an open protocol for connecting desktop Dapps to
              mobile Wallets using end-to-end encryption by scanning a QR code.
              Opening up a whole world of Dapps that were once only available to
              Metamask. The user can interact with any Dapp without comprising
              their private keys and will be notified to sign any transaction
              requests on their mobile.
            </p>
          </SColumn>
          <SColumn>
            <h2>How does it work?</h2>
            <p>
              WalletConnect is a simple infrastructure that can be setup by any
              developer. Using a Bridge server to relay the messages without
              having access to any of its contents. The contents are encrypted
              using the session data shared by the QR code between the desktop
              and mobile. There are libraries for Web, iOS and Android. Read
              more about it in our documentation introduction.
            </p>
          </SColumn>
        </SDescriptionWrapper>
      </SSection>
    </SIndexPage>
  </Layout>
);

export default IndexPage;
