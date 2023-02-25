import { useState, useEffect, useRef, useContext, Fragment } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';

import PageContext from 'context/page-context';

import routes from 'data/routes';

// ==============================================

const Navlink = ({idx, active, onClick=()=>{}, refs, href, children}) => {

  // --------------------------------------------

  const router = useRouter();
  const { page_ref } = useContext(PageContext);

  // --------------------------------------------

  const handler = () => {

    onClick();
    closeDrawer();

    const page = page_ref.current;

    setTimeout(() => {
      gsap.to(page, {
        x: '100px',
        opacity: 0,
        onComplete: () => {
          router.push(href);
        },
      });
    }, 350);
  };

  // --------------------------------------------


  return (
    <li 
      className="navlink"
    >
      <a 
        ref={el => refs.current[idx] = el}
        className={`navlink__interior ${idx === active ? 'active' : ''}`}
        onClick={handler}
      >
        { children }
      </a>
    </li>
  );
};

// ==============================================

let openDrawer, closeDrawer;
const NavDrawer = ({ active_page, setActivePage }) => {

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
          className="blur-overlay"
          ref={overlay_ref}
          onClick={() => closeDrawer()}
        >  
        </div>

        <aside ref={container_ref}>

          <ul className="navlinks">
          {routes.map((route, idx) => {
              const { href, name } = route;
              const key = `header-navlink-${idx}`;
              return (
                <Fragment key={key}>
                  <Navlink {...{ href, idx }} active={active_page} onClick={() => setActivePage(idx)} refs={navlink_refs}>{ name }</Navlink>
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