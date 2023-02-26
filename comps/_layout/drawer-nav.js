import { useState, useEffect, useRef, useContext, Fragment } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';

import PageContext from 'context/page-context';

import routes from 'data/routes';

// ==============================================

const Navlink = ({idx, refs, href, children}) => {

  // --------------------------------------------

  const router = useRouter();
  const { page_ref, footer_ref, active_page, setActivePage } = useContext(PageContext);

  // --------------------------------------------

  const handler = () => {

    // - - - - - - - - - - - - - - - - - - - - - 
    
    const transitionPageOut = () => {

      const page = page_ref.current;
      
      setTimeout(() => {
        gsap.to(page, {
          x: '100px',
          opacity: 0,
          onComplete: () => {
            router.push(href);
          },
        });
      }, 300);
    };

    // - - - - - - - - - - - - - - - - - - - - - 

    const fadeFooterOut = () => {
      const footer = footer_ref.current;
      gsap.to(footer, {
        opacity: 0,
      });
    };

    // - - - - - - - - - - - - - - - - - - - - - 

    closeDrawer();
    fadeFooterOut();
    setActivePage(idx);
    transitionPageOut();

    // - - - - - - - - - - - - - - - - - - - - - 
  };

  // --------------------------------------------


  return (
    <li 
      className="navlink"
    >
      <a 
        ref={el => refs.current[idx] = el}
        className={`navlink__interior ${idx === active_page ? 'active' : ''}`}
        onClick={handler}
      >
        { children }
      </a>
    </li>
  );
};

// ==============================================

let openDrawer, closeDrawer;
const NavDrawer = () => {

  // --------------------------------------------

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // --------------------------------------------

  const navlink_refs = useRef([]);

  // --------------------------------------------

  const tl_ref = useRef(null);
  const overlay_ref = useRef(null);
  const container_ref = useRef(null);

  // --------------------------------------------

  openDrawer = () => {
    if (tl_ref.current)
      tl_ref.current.revert();

    const tl = gsap.timeline();   
    tl.add(showOverlay());
    tl.add(slideDrawer(), "<=");
    tl.add(staggerNavlinks(), '=-0.2');
    
    tl_ref.current = tl;
  };

  // --------------------------------------------

  closeDrawer = () => {
    tl_ref.current?.reverse();
  };

  // --------------------------------------------

  const slideDrawer = () => {
    const tl = gsap.timeline();
    const container = container_ref?.current;
    tl.to(container, { 
      x: 0,
      duration: 0.3,
    });
    return tl;
  };

  // --------------------------------------------
  
  const showOverlay = () => {
    
    const ref = overlay_ref.current;
    ref.style.display = 'block';

    const tl = gsap.timeline();
    tl.to(ref, { 
      opacity: 1, 
      duration: 0.3,
      onStart: () => {
        document.body.style.overflow = "hidden"; // don't scroll stuff underneath the modal
      },
      onReverseComplete: () => {
        ref.style.display = 'none';
        document.body.style.overflow = "overlay"; // custom scrollbar overlay        
      },
    });

    return tl;
  };

  // --------------------------------------------

  const staggerNavlinks = () => {
    const refs = navlink_refs.current;
    const tl = gsap.timeline();

    tl.fromTo(refs,  {
      y: '50px',
    }, {
      y: '0px',
      stagger: 0.1,
      ease: "back.out(2.0)",
      duration: 0.5,
    });

    return tl;
  };

  // --------------------------------------------

  return (
    mounted 
    ? 
    createPortal(
      <>
        <div // Blur Overlay
          className="nav-drawer--blur-overlay"
          ref={overlay_ref}
          onClick={() => closeDrawer()}
        >  
        </div>

        <aside id="nav-drawer"
          ref={container_ref}
        >

          <ul className="socials">
            <a className="social" href="https://www.youtube.com/@joshDotJS">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
              </svg>
            </a>
          
            <a className="social" href="https://github.com/joshdotjs">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>           
          </ul>


          <ul className="navlinks">
          {routes.map((route, idx) => {
              const { href, name } = route;
              const key = `header-navlink-${idx}`;
              return (
                <Fragment key={key}>
                  <Navlink {...{ href, idx }} refs={navlink_refs}>{ name }</Navlink>
                </Fragment>
              );
            })}
          </ul>
        </aside>
      </>, 
      document.querySelector('#portal-nav-drawer'))
    : 
    null
  );
};

// ==============================================

export { openDrawer, closeDrawer };
export default NavDrawer;