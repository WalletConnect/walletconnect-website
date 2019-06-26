import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Grid from "../components/Grid";
import WALLETS from "../constants/wallets";
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

const SSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 600px;
  z-index: 0;
`;

const SWallet = styled.div`
  width: 100%;
`;

const SWalletIcon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const SWalletName = styled.div`
  font-weight: bold;
`;

const IndexPage = (props: any) => (
  <Layout location={props.location}>
    <SIndexPage>
      <SBrandingWrapper>
        <SBranding>{`Supporting Wallets`}</SBranding>
      </SBrandingWrapper>
      <SSection>
        <Grid itemMaxWidth={200} gap={30}>
          {WALLETS.map(wallet => (
            <a
              key={wallet.name}
              href={wallet.url}
              target="blank"
              rel="noreferrer noopener"
            >
              <SWallet>
                <SWalletIcon>
                  <img src={wallet.icon} alt={wallet.name} />
                </SWalletIcon>
                <SWalletName>{wallet.name}</SWalletName>
              </SWallet>
            </a>
          ))}
        </Grid>
      </SSection>
    </SIndexPage>
  </Layout>
);

export default IndexPage;
