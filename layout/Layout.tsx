import Header from './Header';
import Footer from './Footer';


export type LayoutProps = {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="font-roboto" id="content">
    <Header />
    {children}
    <Footer />
  </div>
)
export default Layout;

