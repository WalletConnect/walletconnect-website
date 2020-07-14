import React from "react";

import Layout from "../components/layout";
import Grid from "../components/Grid";
import WALLETS from "../constants/wallets";
import {
  SIndexPage,
  SBrandingWrapper,
  SBranding,
  SPageDescription,
  SSection,
  SAppIcon,
  SApp,
  SAppName,
  SAppSupported,
  SFootNote,
} from "../components/pageStyles";

const IndexPage = (props: any) => (
  <Layout location={props.location}>
    <SIndexPage>
      <SBrandingWrapper>
        <SBranding>{`Wallets`}</SBranding>
        <SPageDescription>
        Multiple wallets across many platforms support WalletConnect protocol. Scan a
        QR code from your desktop computer screen to start using a dApp with
        your mobile or desktop wallet securely. Interaction between apps and
        browser is supported with deep linking.
        </SPageDescription>
      </SBrandingWrapper>
      <SSection>
        <Grid itemMaxWidth={200} gap={30}>
          {WALLETS.map((app) => (
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
                <SAppSupported>{app.supported}</SAppSupported>
              </SApp>
            </a>
          ))}
        </Grid>
      </SSection>
      <SFootNote>
        <p>
          Open a pull request on{" "}
          <a
            href="https://github.com/walletconnect/walletconnect-website"
            target="blank"
            rel="noreferrer noopener"
          >
            Github
          </a>{" "}
          to add your wallet here.
        </p>
      </SFootNote>
    </SIndexPage>
  </Layout>
);

export default IndexPage;
