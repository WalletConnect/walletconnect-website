import Link from "next/link"

export type HeaderLinkProps = {
  children: any;
  href: string;
  external?: boolean;
}



export const HeaderLink = ({ children, href, external = false }: HeaderLinkProps) => {
  const LINK_STYLE_CLASSES = 'font-semibold text-cool-gray-500 hover:text-cool-gray-600 sm:text-xl sm:px-5 md:px-8'

  if (!external) return (
    <Link href={href}>
      <a className={LINK_STYLE_CLASSES}>
        {children}
      </a>
    </Link>
  )

  return (
    <a className={LINK_STYLE_CLASSES} target="_blank" href={href} rel="noopener noreferrer">
      {children}
    </a>
  )
}
