import styled from "styled-components";

import { responsive, colors } from "../styles";

export const SIndexPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 0 32px;
  padding-top: 30px;
  @media screen and (${responsive.sm.max}) {
    padding: 0 24px;
    padding-top: 20px;
  }
`;

export const SBrandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;
export const SBranding = styled.h1`
  font-size: 35px;
  font-weight: 500;
  text-align: center;
`;

export const SPageDescription = styled.div`
  margin-top: 40px;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.35;
`;

export const SSection = styled.section`
  position: relative;
  width: 100%;
  z-index: 0;
  margin-bottom: 40px;
`;

export const SApp = styled.div`
  width: 100%;
`;

export interface IAppIconStyleProps {
  cropCircle?: boolean;
}

// eslint-disable-next-line no-mixed-operators
export const SAppIcon = styled.div<IAppIconStyleProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  & img {
    width: 100%;
    height: 100%;
    border-radius: ${({ cropCircle }) => (cropCircle ? "50%" : "initial")};
  }
`;

export const SAppName = styled.div`
  font-weight: bold;
  letter-spacing: 0.4px;
`;

export const SAppSupported = styled.div`
  font-weight: 500;
  font-size: 13px;
  margin-top: 5px;
  letter-spacing: 0.4px;
`;

export const SFootNote = styled.div`
  margin: 10px;
  color: rgb(${colors.blue});
  opacity: 0.75;
  padding-top: 30px;
  & a {
    font-weight: 600;
  }
`;
