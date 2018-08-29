import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import logo from '../assets/wallet-connect-logo-v-1.svg';
import { colors, fonts, responsive } from '../styles';

const SHeader = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 145px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const InternalLink = styled(Link)`
  width: 80px;
  text-align: center;
  font-size: ${fonts.size.h4};
  color: rgb(${colors.lightBlue});
  font-weight: ${({ activeLink }) => (activeLink ? `700` : `500`)};
  @media screen and (${responsive.sm.max}) {
    width: 60px;
    font-size: ${fonts.size.medium};
  }
`;

const ExternalLink = InternalLink.withComponent('a');

const SLogo = styled.div`
  flex: 1;
  padding: 0 16px;
  text-align: center;
  & img {
    width: 100%;
    max-width: 135px;
    min-width: 64px;
  }
`;

const Header = ({ pathname, ...props }) => (
  <SHeader {...props}>
    <ExternalLink
      href="https://github.walletconnect.org/"
      target="blank"
      rel="noreferrer noopener"
    >{`Github`}</ExternalLink>

    <ExternalLink
      href="https://docs.walletconnect.org/"
      target="blank"
      rel="noreferrer noopener"
    >{`Docs`}</ExternalLink>

    <SLogo>
      <Link to="/">
        <img src={logo} alt="WalletConnect" />
      </Link>
    </SLogo>

    <ExternalLink
      href="https://discuss.walletconnect.org/"
      target="blank"
      rel="noreferrer noopener"
    >{`Forum`}</ExternalLink>

    <InternalLink to="/demo">{`Demo`}</InternalLink>
  </SHeader>
);

export default Header;
