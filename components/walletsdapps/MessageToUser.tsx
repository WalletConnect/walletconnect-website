import { GITHUB_URL } from "../../common/constants";
import { PageLink } from "../StyledLinks";



const MessageToUser = () => (
  <div className="text-gray-500">
    <p>Open a pull request on
      <PageLink href={GITHUB_URL}>Github</PageLink>
      to add your wallet here.</p>
  </div>
)

export default MessageToUser;