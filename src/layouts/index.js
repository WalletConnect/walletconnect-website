import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import styled, { injectGlobal } from 'styled-components'
import { globalStyles, colors, responsive } from '../styles'
import headshot from '../assets/headshot.jpg'

injectGlobal`${globalStyles}`

const SWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgb(${colors.white});
  background-image: radial-gradient(
    ellipse at center,
    rgba(${colors.beige}, 0.1) 0%,
    rgba(${colors.white}, 0) 100%
  );
`

const SContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
`

const SContainer = styled.div`
  height: 100%;
  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 55px;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
`

const SFlex = styled.div`
  display: flex;
  height: 100%;
  @media screen and (${responsive.sm.max}) {
    flex-direction: column;
  }
`

const SHeadshot = styled.div`
  width: 70%;
  height: 100%;
  background-image: url(${headshot});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`

const TemplateWrapper = ({ children, location, data }) => {
  const name = data.site.siteMetadata.name
  const title = data.site.siteMetadata.title
  const url = data.site.siteMetadata.baseUrl
  const description = data.site.siteMetadata.description
  const keywords = data.site.siteMetadata.keywords
  const twitterUsername = data.site.siteMetadata.twitterUsername
  return (
    <SWrapper>
      <Helmet>
        <title>{title}</title>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterUsername} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:img:src" content={`${url}/social-card.png`} />
        <meta name="og:title" content={title} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content={url} />
        <meta name="og:image" content={`${url}/social-card.png`} />
        <meta name="og:description" content={description} />
        <meta name="og:site_name" content={name} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="apple-touch-startup-image" href="favicon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="96x96" href="icon-96x96.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="256x256" href="icon-256x256.png" />
        <link rel="apple-touch-icon" sizes="384x384" href="icon-384x384.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="icon-512x512.png" />
      </Helmet>
      <SFlex>
        <SHeadshot />
        <SContent>
          <Header pathname={location.pathname} />
          <SContainer>{children()}</SContainer>
        </SContent>
      </SFlex>
    </SWrapper>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        name
        title
        baseUrl
        description
        keywords
        twitterUsername
        facebookId
      }
    }
  }
`

export default TemplateWrapper
