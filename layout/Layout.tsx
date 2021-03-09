// import { ReactQueryDevtools } from 'react-query/devtools';
import ShadowHeader from './ShadowHeader';
import Footer from './Footer';


const Layout = ({ children }) => (
  <div className="font-roboto" id="content">
    <ShadowHeader />
    {children}
    <Footer />

    {/*
    <ReactQueryDevtools initialIsOpen={false} />
    */}
  </div>
)
export default Layout;

