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
  SFootNote,
} from "../components/pageStyles";

const IndexPage = (props: any) => (
  <Layout location={props.location}>
    <SIndexPage>
      <SBrandingWrapper>
        <SBranding>{`Wallets`}</SBranding>
        <SPageDescription>
          Multiple iOS or Android wallets support the WalletConnect protocol. Scan a
          QR code from your desktop computer screen to start using a dApp with
          your mobile wallet securely. Interaction between mobile apps and
          mobile browsers are supported via mobile deep linking.
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
                <SAppIcon {...app.style}>
                  <img src={app.icon} alt={app.name} />
                </SAppIcon>
                <SAppName>{app.name}</SAppName>
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
