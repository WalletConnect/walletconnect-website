import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";

const StyledDemoPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 0;
`;

const StyledTitle = styled.h1`
  width: 100%;
  margin-bottom: 40px;
  font-size: 35px;
  font-weight: 500;
  text-align: center;
`;

const StyledVideoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 56.25%; /*16:9*/
  padding-top: 30px;
  height: 0;
  overflow: hidden;

  & > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const DemoPage = props => (
  <Layout location={props.location}>
    <StyledDemoPage>
      <StyledTitle>Demo</StyledTitle>
      <StyledVideoWrapper>
        <video width="100%" height="56.25%" autoPlay loop>
          <source src="/demo.mp4" type="video/mp4" />
        </video>
      </StyledVideoWrapper>
    </StyledDemoPage>
  </Layout>
);

export default DemoPage;
