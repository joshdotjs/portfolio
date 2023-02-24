import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';


// ==============================================

const Navlink = ({idx, active, onClick, refs, children}) => {
  return (
    <li 
      className="navlink"
    >
      <div 
        refs={el => refs.current[idx] = el}
        className={`navlink__interior ${idx === active ? 'active' : ''}`}
        onClick={onClick}
      >
        { children }
      </div>
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

    console.log('openDrawer()');

    
    
    if (tl_ref.current) // if cart is still open then reset timeline before opening. Fixes bug where timeline is overwritten with no animation if cart is already open and added to. Cart should always be closed when adding new item, but just in case this ensures the cart is closable if added to when already open if app is in some unforseen state.
    tl_ref.current.revert();
    
    const tl = gsap.timeline();
    
    
    tl.add(showOverlay());
    tl.add(slideDrawer(), "<=");

    // tl.to(navlink_refs.current, {
    //   x: 100,
    // });

    tl_ref.current = tl;
  };

  // --------------------------------------------

  closeDrawer = () => {
    hideOverlay();
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
    });

    return tl;
  };

  // --------------------------------------------

  const hideOverlay = () => {
    const ref = overlay_ref.current;
    gsap.to(ref, { 
      opacity: 0,
       duration: 0.3, 
       onComplete: () => {
        ref.style.display = 'none';
        document.body.style.overflow = "overlay"; // custom scrollbar overlay
      }});
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
            <Navlink idx={0} active={active_page} onClick={() => setActivePage(0)} refs={navlink_refs}>Home</Navlink>
            <Navlink idx={1} active={active_page} onClick={() => setActivePage(1)} refs={navlink_refs}>Portfolio</Navlink>
            <Navlink idx={2} active={active_page} onClick={() => setActivePage(2)} refs={navlink_refs}>Contact</Navlink>
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