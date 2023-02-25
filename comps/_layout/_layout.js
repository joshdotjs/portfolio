import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';

import PageContext from 'context/page-context';

import Header from './header';
import Footer from './footer';

// ==============================================

export default function Layout({ id, children }) {

  // --------------------------------------------

  const router = useRouter();
  const { page_ref, footer_ref } = useContext(PageContext);

  useEffect(() => {
    
    // - - - - - - - - - - - - - - - - - - - - - 

    const transitionPageIn = () => {
      const page = page_ref.current;
      gsap.fromTo(page, {
          x: '-100px',  
          opacity: 0,
        },
        {
          x: '0px',
          opacity: 1,
      });
    };

    // - - - - - - - - - - - - - - - - - - - - - 

    const fadeFooterIn = () => {
      const footer = footer_ref.current;
            
      gsap.fromTo(footer, {
        opacity: 0,
      }, {
        opacity: 1,
      });
    };

    // - - - - - - - - - - - - - - - - - - - - - 

    transitionPageIn();
    fadeFooterIn();

    // - - - - - - - - - - - - - - - - - - - - - 

  }, [router.events]);

  // --------------------------------------------

  return (
    <>
      <Header />
      
      <main 
        id={id} 
        className="page"
        ref={page_ref}
      >
        {children}
      </main>

      <Footer />
    </>
  );

  // --------------------------------------------
}