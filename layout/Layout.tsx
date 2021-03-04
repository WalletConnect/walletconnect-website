// import { ReactQueryDevtools } from 'react-query/devtools';
import Header from './Header';
import Footer from './Footer';


const Layout = ({ children }) => (
  <div className="font-poppins" id="content">

    <Header />
    {children}
    <Footer />

    {/*
    <ReactQueryDevtools initialIsOpen={false} />
    */}
  </div>
)
export default Layout;

