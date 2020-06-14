import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Grid from "../components/Grid";
import DAPPS from "../constants/dapps";
import { SIndexPage, SBrandingWrapper, SBranding, SPageDescription, SSection, SAppIcon, SApp, SAppName } from "../components/pageStyles";

const IndexPage = (props: any) => (
  <Layout location={props.location}>
    <SIndexPage>
      <SBrandingWrapper>
        <SBranding>{`dApps`}</SBranding>
      </SBrandingWrapper>
      <SPageDescription>
        Following decentralised finance and blockchain applications support WalletConnect wallets.
      </SPageDescription>
      <SSection>
        <Grid itemMaxWidth={200} gap={30}>
          {DAPPS.map(app => (
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
        <p>
          Open a pull request on Github to add your app here.
        </p>
      </SSection>
    </SIndexPage>
  </Layout>
);

export default IndexPage;
