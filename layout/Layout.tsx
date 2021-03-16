import ShadowHeader from './ShadowHeader';
import Footer from './Footer';


const Layout = ({ children }) => (
  <div className="font-roboto" id="content">
    <ShadowHeader />
    {children}
    <Footer />
  </div>
)
export default Layout;

