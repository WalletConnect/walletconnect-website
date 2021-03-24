import { GITHUB_URL } from "../common/constants";
import { Styled, StyledLink } from "./StyledLinks";


const OpenAPullRequestMsg = () => (
  <div className="text-gray-500">
    <p>Open a pull request on
      <StyledLink type={Styled.PageLink} href={GITHUB_URL}>
        Github
      </StyledLink>
      to add your wallet here.</p>
  </div>
)

export default OpenAPullRequestMsg;