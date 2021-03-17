import Header from './Header';
import Footer from './Footer';


const Layout = ({ children }) => (
  <div className="font-roboto" id="content">
    <Header />
    {children}
    <Footer />
  </div>
)
export default Layout;

