import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import logo from '../assets/wallet-connect-logo-v-1.svg';
import { colors, fonts } from '../styles';

const SFooter = styled.footer`
  width: 100%;
  //max-width: 1200px;
  margin: 0 auto;
  height: 35px;
  display: flex;
  flex-shrink: 0;

  align-items: center;
  justify-content: center;
  ${'' /* background: red; */};
`;

const SNavLink = styled(Link)`
  width: 80px;
  text-align: center;
  font-size: ${fonts.size.h4};
  color: rgb(${colors.lightBlue});
  font-weight: ${({ activeLink }) => (activeLink ? `700` : `500`)};
`;

const ExternalLink = styled.a`
  width: 200px;
  margin: 40px 0 0 0;
  ${'' /* background: green; */} text-align: center;
  font-size: ${fonts.size.h6};
  color: rgb(${colors.lightBlue});
  font-weight: ${({ activeLink }) => (activeLink ? `700` : `500`)};
`;

const SLogo = styled.div`
  width: 155px;
  & img {
    width: 100%;
  }
`;

const Footer = ({ pathname, ...props }) => {
  const windowPathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const _pathname = pathname || windowPathname;
  return (
    <SFooter {...props}>
      <ExternalLink
        href="https://www.twitter.com/walletconnect"
        target="blank"
        rel="noreferrer noopener"
      >{`@walletconnect`}</ExternalLink>
      <Link to="/" />
    </SFooter>
  );
};

export default Footer;
