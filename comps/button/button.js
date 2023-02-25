import { useContext } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";

import PageContext from "context/page-context";

import { getPageindex } from "data/routes";

// ==============================================

export default function Button({ variant, href, onClick=()=>{}, children }) {

  // href => if href is provided, render an anchor tag
  // onClic => if href not supplied, then run onClick when <button/> is clicked

  // --------------------------------------------

  const router = useRouter();
  const { page_ref, footer_ref, setActivePage } = useContext(PageContext);

  // --------------------------------------------

  const linkHandler = () => {

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

    const fadeFooterOut = () => {
      const footer = footer_ref.current;
      gsap.to(footer, {
        opacity: 0,
      });
    };

    // - - - - - - - - - - - - - - - - - - - - - 

    const page_index = getPageindex(href);
    console.log('page_index: ', page_index);
    fadeFooterOut();
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
        onClick={linkHandler}
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
        onClick={onClick}
      >
        { children }
      </button>
    );
  }


}

// ==============================================