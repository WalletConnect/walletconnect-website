import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
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
`;

const ExternalLink = styled.a`
  width: 200px;
  margin: 40px 0 0 0;
  ${'' /* background: green; */} text-align: center;
  font-size: ${fonts.size.h6};
  color: rgb(${colors.lightBlue});
  font-weight: ${({ activeLink }) => (activeLink ? `700` : `500`)};
`;

const Footer = ({ pathname, ...props }) => (
  <SFooter {...props}>
    <ExternalLink
      href="https://www.twitter.com/walletconnect"
      target="blank"
      rel="noreferrer noopener"
    >{`@walletconnect`}</ExternalLink>
    <Link to="/" />
  </SFooter>
);

export default Footer;
