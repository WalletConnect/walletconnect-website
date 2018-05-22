import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import logo from '../assets/wallet-connect-logo-v-1.svg';
import { colors, fonts } from '../styles';

const SHeader = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 145px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SNavLink = styled(Link)`
  width: 80px;
  text-align: center;
  font-size: ${fonts.size.h4};
  color: rgb(${colors.lightBlue});
  font-weight: ${({ activeLink }) => (activeLink ? `700` : `500`)};
`;

const ExternalLink = styled.a`
  width: 80px;
  text-align: center;
  font-size: ${fonts.size.h4};
  color: rgb(${colors.lightBlue});
  font-weight: ${({ activeLink }) => (activeLink ? `700` : `500`)};
`;

const SLogo = styled.div`
  flex: 1;
  padding: 0 16px;
  text-align: center;
  & img {
    width: 100%;
    max-width: 155px;
    min-width: 64px;
  }
`;

const Header = ({ pathname, ...props }) => {
  const windowPathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const _pathname = pathname || windowPathname;
  return (
    <SHeader {...props}>
      {/* <SNavLink activeLink={_pathname === `/docs`} to={`/docs`}>
        {`Docs`}
      </SNavLink>
      <SNavLink activeLink={_pathname === `/examples`} to={`/examples`}>
        {`Examples`}
      </SNavLink> */}
      <ExternalLink
        href="https://github.com/WalletConnect/WalletConnect"
        target="blank"
        rel="noreferrer noopener"
      >{`Github`}</ExternalLink>
      
      <ExternalLink
        href="https://github.com/WalletConnect/walletconnect-docs"
        target="blank"
        rel="noreferrer noopener"
      >{`Docs`}</ExternalLink>

      <SLogo>
        <Link to="/">
          <img src={logo} alt="WalletConnect" />
        </Link>
      </SLogo>
      
      {/* <ExternalLink
        href="https://gitter.im/WalletConnect/Lobby"
        target="blank"
        rel="noreferrer noopener"
      >{`Gitter`}</ExternalLink> */}
      <ExternalLink
        href="https://twitter.com/ricburton/status/978509303500984320"
        target="blank"
        rel="noreferrer noopener"
      >{`Demo`}</ExternalLink>
    </SHeader>
  );
};

export default Header;
