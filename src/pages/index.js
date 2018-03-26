import React from 'react'
import styled from 'styled-components'

const SIndexPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding-top: 30px;
`

const SBrandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`
const SBranding = styled.h1`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`

const STagline = styled.h2`
  margin: 30px 0;
  font-size: 30px;
  font-weight: 300;
  text-align: center;
`

const SSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 600px;
`

const SSectionBackground = styled.div`
  position: absolute;
  bottom: 0;
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
`

const SPreviewWrapper = styled.div``
const SDescriptionWrapper = styled.div``

const IndexPage = () => (
  <SIndexPage>
    <SBrandingWrapper>
      <SBranding>WalletBridge</SBranding>
      <STagline>
        An open protocol to connect web-based distributed applications to mobile
        crypto-asset wallets
      </STagline>
    </SBrandingWrapper>
    <SSection>
      <SSectionBackground />
      <SPreviewWrapper />
      <SDescriptionWrapper />
    </SSection>
  </SIndexPage>
)

export default IndexPage
