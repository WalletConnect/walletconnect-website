import React from "react";

import Layout from "../components/layout";
import Grid from "../components/Grid";
import DAPPS from "../constants/dapps";
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
        <SBranding>{`dApps`}</SBranding>
      </SBrandingWrapper>
      <SPageDescription>
        Following decentralised finance and blockchain applications support
        WalletConnect wallets.
      </SPageDescription>
      <SSection>
        <Grid itemMaxWidth={200} gap={30}>
          {DAPPS.map((app) => (
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
        <SFootNote>
          <p>
            Open a pull request on{" "}
            <a
              href="https://github.com/walletconnect/walletconnect-website"
              target="blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>{" "}
            to add your app here.
          </p>
        </SFootNote>
      </SSection>
    </SIndexPage>
  </Layout>
);

export default IndexPage;
