import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { gsap } from 'gsap';


// ==============================================

const Navlink = ({idx, active, onClick, refs, href, children}) => {
  return (
    <li 
      className="navlink"
    >
      <Link 
        href={href}
        ref={el => refs.current[idx] = el}
        className={`navlink__interior ${idx === active ? 'active' : ''}`}
        onClick={onClick}
      >
        { children }
      </Link>
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
    const tl = gsap.timeline();   
    tl.add(showOverlay());
    tl.add(slideDrawer(), "<=");
    tl.add(staggerNavlinks(), '=-0.175');
    
    if (tl_ref.current)
      tl_ref.current.revert();
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
            <Navlink idx={0} active={active_page} onClick={() => setActivePage(0)} href="/"          refs={navlink_refs}>Home</Navlink>
            <Navlink idx={1} active={active_page} onClick={() => setActivePage(1)} href="/portfolio" refs={navlink_refs}>Portfolio</Navlink>
            <Navlink idx={2} active={active_page} onClick={() => setActivePage(2)} href="/contact"   refs={navlink_refs}>Contact</Navlink>
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