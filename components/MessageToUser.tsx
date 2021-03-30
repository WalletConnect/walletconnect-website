import { GITHUB_REGISTRY_URL } from "../common/constants";
import { PageLink } from "./StyledLinks";

interface MessageToUserProps {
  type: string;
}

const MessageToUser = (props: MessageToUserProps) => (
  <div className="text-gray-500">
    <p>
      Open a pull request on
      <PageLink href={GITHUB_REGISTRY_URL}>Github</PageLink>
      {`to add your ${props.type} here.`}
    </p>
  </div>
);

export default MessageToUser;
