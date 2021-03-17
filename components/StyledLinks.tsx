import Link from "next/link";


export type LinkProps = {
  children: React.ReactNode;
  href: string;
  external?: boolean;
}


export const HeaderLink = ({ children, href, external = false }: LinkProps) => {
  const LINK_STYLE_CLASSES = 'font-semibold text-cool-gray-500 hover:text-cool-gray-600 sm:text-xl';

  return (
    <InternalExternalLink
      href={href}
      external={external}
      tailwindStyles={LINK_STYLE_CLASSES}
    >
      {children}
    </InternalExternalLink>
  )
}


export const FooterLink = ({ children, href }: LinkProps) => {
  const LINK_STYLE_CLASSES = 'text-sm font-medium sm:text-lg text-cool-gray-600 hover:text-cool-gray-500';

  return (
    <InternalExternalLink
      href={href}
      external={true}
      tailwindStyles={LINK_STYLE_CLASSES}
    >
      {children}
    </InternalExternalLink>
  )
}


export const PageLink = ({ children, href, external = false }: LinkProps) => {
  const LINK_STYLE_CLASSES = 'font-semibold text-blue-500 hover:text-cool-blue-600';

  return (
    <InternalExternalLink
      href={href}
      external={external}
      tailwindStyles={LINK_STYLE_CLASSES}
    >
      {` ${children} `}
    </InternalExternalLink>
  )
}


export type IntExtLinkProps = {
  children: any;
  href: string;
  tailwindStyles: string;
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
