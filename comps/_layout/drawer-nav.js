import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';


// ==============================================

const Navlink = ({idx, active, onClick, mb, children}) => {
  return (
    <li 
      className={`navlink ${idx === active ? 'active' : ''}`}
      onClick={onClick}
      style={{ marginBottom: mb ? '1rem' : '' }}
    >
      { children }
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

  const tl_ref = useRef(null);
  const overlay_ref = useRef(null);
  const container_ref = useRef(null);

  // --------------------------------------------

  openDrawer = () => {

    console.log('openDrawer()');

    showOverlay();   
    const container = container_ref?.current;

    if (tl_ref.current) // if cart is still open then reset timeline before opening. Fixes bug where timeline is overwritten with no animation if cart is already open and added to. Cart should always be closed when adding new item, but just in case this ensures the cart is closable if added to when already open if app is in some unforseen state.
      tl_ref.current.revert();

    tl_ref.current = gsap.to(container, { 
      x: 0,
      duration: 0.3,
    });

  };

  // --------------------------------------------

  closeDrawer = () => {
    hideOverlay();
    tl_ref.current?.reverse();
  };

  // --------------------------------------------
  
  const showOverlay = () => {
    const ref = overlay_ref.current;
    ref.style.display = 'block';
    gsap.to(ref, { 
      opacity: 1, 
      duration: 0.3,
      onStart: () => {
        document.body.style.overflow = "hidden"; // don't scroll stuff underneath the modal
      },
    });
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
            <Navlink idx={0} active={active_page} title="Home"      onClick={() => setActivePage(0)}>Home</Navlink>
            <Navlink idx={1} active={active_page} title="Portfolio" onClick={() => setActivePage(1)}>Portfolio</Navlink>
            <Navlink idx={2} active={active_page} title="Contact"   onClick={() => setActivePage(2)}>Contact</Navlink>
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