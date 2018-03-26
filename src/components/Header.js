import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { colors, fonts } from '../styles'

const SHeader = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 145px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const SNavLink = styled(Link)`
  width: 80px;
  text-align: center;
  font-size: ${fonts.size.h4};
  color: rgb(${colors.lightBlue});
  font-weight: ${({ activeLink }) => (activeLink ? `700` : `500`)};
`

const SLogo = styled.div`
  width: 155px;
  & img {
    width: 100%;
  }
`

const Header = ({ pathname, ...props }) => {
  const windowPathname =
    typeof window !== 'undefined' ? window.location.pathname : ''
  const _pathname = pathname || windowPathname
  return (
    <SHeader {...props}>
      <SNavLink activeLink={_pathname === `/docs`} to={`/docs`}>
        {`Docs`}
      </SNavLink>
      <SNavLink activeLink={_pathname === `/examples`} to={`/examples`}>
        {`Examples`}
      </SNavLink>
      <Link to="/">
        <SLogo>
          <img src={logo} alt="WalletBridge" />
        </SLogo>
      </Link>
      <SNavLink activeLink={_pathname === `/github`} to={`/github`}>
        {`Github`}
      </SNavLink>
      <SNavLink activeLink={_pathname === `/gitter`} to={`/gitter`}>
        {`Gitter`}
      </SNavLink>
    </SHeader>
  )
}

export default Header
