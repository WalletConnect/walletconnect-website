import React from 'react';
import styled from 'styled-components';
import preview from '../assets/preview.png';
import { colors, responsive } from '../styles';

const SIndexPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
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

const SSectionBackground = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -1;
  width: 100%;
  height: 562px;
  opacity: 0.1;
  background-image: linear-gradient(
    to bottom,
    rgba(175, 204, 251, 0.05),
    rgb(170, 199, 251) 13%,
    rgb(143, 175, 243) 88%,
    rgba(140, 173, 242, 0)
  );
`;

const SPreviewWrapper = styled.div`
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

const IndexPage = () => (
  <SIndexPage>
    <SBrandingWrapper>
      <SBranding>WalletConnect</SBranding>
      <STagline>
        An open standard to connect web-based distributed applications to mobile
        crypto-asset wallets
      </STagline>
    </SBrandingWrapper>
    <SSection>
      <SPreviewWrapper>
        <img src={preview} alt="WalletConnect" />
      </SPreviewWrapper>
      <SDescriptionWrapper>
        <SColumn>
          <h2>What is WalletConnect?</h2>
          <p>
            WalletConnect is an open source standard for establishing an
            encrypted link between distributed applications on the web and
            wallets on the phone. It generates a QR code which the phone can use
            to create a secure link. Then, when a customer initiates a
            transaction or enters a state channel, they are asked to confirm it
            on their wallet.
          </p>
          {/* <a
            href="https://github.com/WalletConnect/WalletConnect"
            target="_blank"
            rel="noreferrer noopener"
          >
            See the code
          </a> */}
        </SColumn>
        <SColumn>
          <h2>How does it work?</h2>
          <p>
            WalletConnect.js is a pop-up modal window which provides a range of
            options for your customers to connect to your dapp. It includes the
            options for wallets to connect through a QR code. This is a common
            pattern used by WhatsApp and countless other apps to link the phone
            to the desktop. We provide libraries for the web, Android & iOS.
          </p>
          {/* <a href="#" target="_blank" rel="noreferrer noopener">
            Try the demo
          </a> */}
        </SColumn>
      </SDescriptionWrapper>
      {/* <SSectionBackground /> */}
    </SSection>
  </SIndexPage>
);

export default IndexPage;
