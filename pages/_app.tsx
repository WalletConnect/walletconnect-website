import "../styles/globals.css";
import Layout from '../layout/Layout';

const App = ({ Component, pageProps }) => (
  <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
)

export default App;