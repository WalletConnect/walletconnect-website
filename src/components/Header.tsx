import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { colors, fonts, responsive } from "../styles";

const SHeader = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 145px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (${responsive.sm.max}) {
    height: 100px;
    padding: 0 15px;
  }
`;

interface IInternalLinkStyleProps {
  activeLink?: boolean;
}

const SInternalLink = styled(Link)<IInternalLinkStyleProps>`
  width: 100px;
  text-align: center;
  font-size: ${fonts.size.h4};
  color: rgb(${colors.lightBlue});
  font-weight: ${({ activeLink }) => (activeLink ? `700` : `500`)};
  @media screen and (${responsive.sm.max}) {
    width: 60px;
    font-size: ${fonts.size.medium};
  }
`;

const SExternalLink = SInternalLink.withComponent("a");

const SLogo = styled.div`
  flex: 1;
  padding: 0 20px;
  text-align: center;

  & img {
    width: 100%;
    max-width: 120px;
    min-width: 60px;
  }
`;

const Header = (props: any) => (
  <SHeader {...props}>
    <SExternalLink
      href="https://github.walletconnect.org/"
      target="blank"
      rel="noreferrer noopener"
    >{`Github`}</SExternalLink>

    <SExternalLink
      href="https://docs.walletconnect.org/"
      target="blank"
      rel="noreferrer noopener"
    >{`Docs`}</SExternalLink>

    <SLogo>
      <Link to="/">
        <img src={logo} alt="WalletConnect" />
      </Link>
    </SLogo>

    <SInternalLink to="/wallets">{`Wallets`}</SInternalLink>

    <SInternalLink to="/apps">{`Apps`}</SInternalLink>

    {/* <SExternalLink
      href="https://example.walletconnect.org/"
      target="blank"
      rel="noreferrer noopener"
    >{`Demo`}</SExternalLink> */}
  </SHeader>
);

export default Header;
