import TitledContent from "../components/TitledContext";
import FUNDERS from '../common/funders';
import CONTRIBUTORS from '../common/contributors';
import { Styled, StyledIcon, StyledLink } from "../components/StyledLinks";
import { PrivateKeyWarning } from "../components/PrivateKeyWarning";
import { DOCS_URL, WALLETS_URL, WEB3MODAL_URL, WEB3_QUICKSTART_URL } from "../common/constants";
import { DISCORD_URL, STACKEXCHANGE_URL } from "../common/constants";

const Support = () => (
  <main>
    <PrivateKeyWarning />
    <FAQ />
  </main>
);
export default Support;


const FAQ = () => (
  <TitledContent title='WalletConnect support' maxwidth='sm:max-w-3xl'>
    <FAQContent title="How do I get WalletConnect?">
      Download any of <StyledLink type={Styled.PageLink} href="/wallets">supported mobile wallets</StyledLink>. There is no WalletConnect app.
      </FAQContent>
    <FAQContent title="I have a problem with WalletConnect - how can I get help?">
      WalletConnect is a software development project, from developers to developers.
        If you have an issue with decentralised app (Dapp) first <strong>contact your DApp support team</strong>.
        If they cannot help you then contact your wallet app support team.
        WalletConnect developers cannot help you with matters like how to use WalletConnect, as we do not build or have access to individual apps using the WalletConnect.
      </FAQContent>
    <FAQContent title="I found a fake WalletConnect website">
      Report it to a <StyledLink type={Styled.PageLink} external href="https://safebrowsing.google.com/safebrowsing/report_phish/?hl=en">SafeBrowsing phishing service</StyledLink> and web browsers will blacklist the domain.
      </FAQContent>
    <FAQContent title="Someone from WalletConnect support is contacting me">
      WalletConnect does not have a support. It is a scam.
      </FAQContent>
    <FAQContent title="I gave amy private key to a scammer and lost all my cryptocurrency holdings">
      Contact <StyledLink type={Styled.PageLink} external href="https://www.coinfirm.com/products/reclaim-crypto/">Coinfirm whose Reclaim your stolen crypto service</StyledLink>
        can help you to get your money back from the scammers.
      </FAQContent>
    <FAQContent title="I am a software developer">
      You are welcome to join in our <StyledLink type={Styled.PageLink} external href={DISCORD_URL}>Discord</StyledLink>. Also you can open questions on <StyledLink type={Styled.PageLink} external href={STACKEXCHANGE_URL}>Ethereum StackExchange</StyledLink> using WalletConnect tag.
      </FAQContent>
  </TitledContent>
)


const FAQContent = ({ title, children }) => (
  <div className="mt-8">
    <h4 className="text-2xl">
      {title}
    </h4>
    <p className="mt-6 text-lg leading-6 text-gray-600">
      {children}
    </p>
  </div>
)


