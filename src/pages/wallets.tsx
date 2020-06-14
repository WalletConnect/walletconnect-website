import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Grid from "../components/Grid";
import WALLETS from "../constants/wallets";
import DAPPS from "../constants/dapps";
import { SIndexPage, SBrandingWrapper, SBranding, SPageDescription, SSection, SAppIcon, SApp, SAppName } from "../components/pageStyles";

const IndexPage = (props: any) => (
  <Layout location={props.location}>
    <SIndexPage>
      <SBrandingWrapper>
        <SBranding>{`Wallets`}</SBranding>
        <SPageDescription>
          Multiple iOS or Android wallets support WalletConnect protocol.
          Scan a QR code from your desktop computer screen to connect one of these wallet.
          Interaction between mobile apps, like a mobile web browser, and mobile wallet is also supported.
        </SPageDescription>
      </SBrandingWrapper>
      <SSection>
        <Grid itemMaxWidth={200} gap={30}>
          {WALLETS.map(app => (
            <a
              key={app.name}
              href={app.url}
              target="blank"
              rel="noreferrer noopener"
            >
              <SApp>
                <SAppIcon cropCircle={app.style.cropCircle}>
                  <img src={app.icon} alt={app.name} />
                </SAppIcon>
                <SAppName>{app.name}</SAppName>
              </SApp>
            </a>
          ))}
        </Grid>
      </SSection>
      <p>
        Open a pull request on Github to add your wallet.
      </p>
    </SIndexPage>
  </Layout>
);

export default IndexPage;
