import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';


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
      <div>
        <div // Blur Overlay
          ref={overlay_ref}
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'none',
            opacity: 0,     
            background: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(5px)', // I think this is not animating the blur!  I think a single blur is computed and then the opacity on it is animated - which is efficient.  I think animating a blur causes a diffrent blur to be computed for each frame of the animation with each one slightly more blurred than the previous.
            WebkitBackdropFilter: 'blur(5px)',
            zIndex: '99'

          }}
          onClick={() => closeDrawer()}
        >  
        </div>

        <aside 
          ref={container_ref}
          style={{ position: 'fixed',
            top: 0,
            background: 'white',
            height: '100vh',
            zIndex: 100,
            padding: 0,
            margin: 0,
            left: 0,
            transform: 'translateX(-100%)',
            overflowY: 'scroll'
        }}
        >
          DRAWER
        </aside>
      </div>, 
      document.querySelector('#portal-nav-drawer'))
    : 
    null
  );
};

// ==============================================

export { openDrawer, closeDrawer };
export default NavDrawer;