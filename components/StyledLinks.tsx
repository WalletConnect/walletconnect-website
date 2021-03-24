import Link from "next/link";


export type StyledLinkProps = {
  type: Styled;
  href: string;
  children: React.ReactNode;
  external?: boolean;
}


export enum Styled {
  HeaderLink = 'font-semibold text-cool-gray-500 hover:text-cool-gray-600 sm:text-xl',
  FooterLink = 'text-sm font-medium sm:text-lg text-cool-gray-600 group-hover:text-cool-gray-500',
  PageLink = 'font-semibold text-blue-500 hover:text-cool-blue-600'
}


export const StyledLink = ({ type, href, children, external = false }: StyledLinkProps) => (
  <InternalExternalLink
    href={href}
    external={external}
    tailwindStyles={type}
  >
    {' '}{children}{' '}
  </InternalExternalLink>
)



export type StyledIconProps = {
  altText: string;
  iconPath: string;
  href: string;
  styles?: string;
}


export const StyledIcon = ({ iconPath, href, styles, altText }: StyledIconProps) => (
  <InternalExternalLink
    href={href}
    external
  >
    <img
      className={`filter-grayscale hover:filter-none ${styles}`}
      alt={altText}
      src={iconPath}
    />
  </InternalExternalLink>
)



export type IntExtLinkProps = {
  children: any;
  href: string;
  tailwindStyles?: string;
  external?: boolean;
}


export const InternalExternalLink = ({ children, href, tailwindStyles, external = false }: IntExtLinkProps) => {

  if (!external) return (
    <Link href={href}>
      <a className={tailwindStyles}>
        {children}
      </a>
    </Link>
  )

  return (
    <a className={tailwindStyles} target="_blank" href={href} rel="noopener noreferrer">
      {children}
    </a>
  )
}
