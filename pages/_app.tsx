import "../styles/globals.css";
import Layout from '../layout/Layout';
import { AppProps } from "next/app";



const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
)

export default App;