import Header from './header';
import Footer from './footer';

// ==============================================

export default function Layout({ id, children }) {

  // --------------------------------------------

  return (
    <>
      <Header />
      
      <main id={id} className="page">{children}</main>

      <Footer />
    </>
  );

  // --------------------------------------------
}