import { SUBMIT_APP_URL } from "../common/constants";
import { Styled, StyledLink } from "./StyledLinks";

interface SubmitAppMsgProps {
  type: string;
}

const SubmitAppMsg = (props: SubmitAppMsgProps) => (
  <div className="text-gray-500">
    <p>
      Open an app submission issue on
      <StyledLink type={Styled.PageLink} href={SUBMIT_APP_URL}>
        GitHub
      </StyledLink>
      {`to add your ${props.type} here.`}
    </p>
  </div>
);
export default SubmitAppMsg;
