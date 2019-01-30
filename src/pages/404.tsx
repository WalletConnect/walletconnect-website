import React from "react";

import Layout from "../components/layout";

const NotFoundPage = (props: any) => (
  <Layout location={props.location}>
    <div>
      <h1>Opps! Not found...</h1>
      <p>It happens to the best</p>
    </div>
  </Layout>
);

export default NotFoundPage;
