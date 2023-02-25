import { useContext } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";

import PageContext from "context/page-context";

import { getPageindex } from "data/routes";

// ==============================================

export default function Button({ variant, href, children }) {

  // href => if href is provided, render an anchor tag

  // --------------------------------------------

  const router = useRouter();
  const { page_ref, setActivePage } = useContext(PageContext);

  // --------------------------------------------

  const handler = () => {

    // - - - - - - - - - - - - - - - - - - - - - 

    // const fadeOutNavlinks = () => {
    // };

    // - - - - - - - - - - - - - - - - - - - - - 

    const transitionPageOut = () => {
      const page = page_ref.current;
  
      gsap.to(page, {
        x: '100px',
        opacity: 0,
        onComplete: () => {
          router.push(href);
        },
      });
    };

    // - - - - - - - - - - - - - - - - - - - - - 

    const page_index = getPageindex(href);
    console.log('page_index: ', page_index);
    setActivePage(page_index);
    transitionPageOut();

    // - - - - - - - - - - - - - - - - - - - - - 

  };

  // --------------------------------------------


  if (href) { // link

    return (
      <a 
        className={`btn
          ${variant === 'full' ? 'btn-full' : 'btn-empty'}
        `}
        role="button"
        onClick={handler}
      >
        { children }
      </a>
    );    
  } else { // not a link
    return (
      <button 
        className={`btn
          ${variant === 'full' ? 'btn-full' : 'btn-empty'}
        `}
        role="button"
      >
        { children }
      </button>
    );
  }


}

// ==============================================