import { DISCORD_URL, GITHUB_URL, TWITTER_URL } from "../common/constants";
import { Styled, StyledLink } from "../components/StyledLinks";

const Footer = () => (
  <footer className="flex justify-center mt-24 mb-16 sm:mt-32">
    <div className="flex flex-col space-y-6 sm:space-y-0 sm:space-x-20 sm:flex-row">
      <FooterIcon name="Discord" iconPath="/discord.svg" href={DISCORD_URL} />
      <FooterIcon name="Twitter" iconPath="/twitter.svg" href={TWITTER_URL} />
      <FooterIcon name="GitHub" iconPath="/github.svg" href={GITHUB_URL} />
      <FooterIcon name="Support" iconPath="/mail.svg" href="/support" />

    </div>
  </footer>
);
export default Footer;

const FooterIcon = ({ name, iconPath, href }) => (
  <>
    <StyledLink href={href} type={Styled.FooterLink} external>
      <div className="flex">
        <img className="w-6 sm:w-8" src={iconPath} alt={name} />
        <p className="ml-2">{name}</p>
      </div>
    </StyledLink>
  </>
);
