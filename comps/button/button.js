import { useContext } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";

import PageContext from "context/page-context";

import { getPageindex } from "data/routes";

// ==============================================

export default function Button({ variant, color, href, onClick=()=>{}, className, children }) {

  // href => if href is provided, render an anchor tag
  // onClick => if href not supplied, then run onClick when <button/> is clicked

  // href: string -- first character determines if internal or external link [/ => internal, !/ => external]

  // variant: 'full' | 'empty'
  // color: 'dark' | 'light'

  // --------------------------------------------

  const router = useRouter();
  const { page_ref, footer_ref, setActivePage } = useContext(PageContext);

  // --------------------------------------------

  const linkHandler = () => {

    // - - - - - - - - - - - - - - - - - - - - - 

    const transitionPageOut = () => {

      if (href.charAt(0) === '/') { // internal link
        const page = page_ref.current;
        gsap.to(page, {
          x: '100px',
          opacity: 0,
          onComplete: () => {
            router.push(href);
          },
        });
      } else { // external link
        window.open(href, '_blank');
      } 
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
          ${color === 'dark' ? 'btn-dark' : 'btn-light'}
          ${className}
        `}
        role="button"
        onClick={linkHandler}
      >

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
          <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
        </svg>

        { children }

      </a>
    );    
  } else { // not a link
    return (
      <button 
        className={`btn
          ${variant === 'full' ? 'btn-full' : 'btn-empty'}
          ${color === 'dark' ? 'btn-dark' : 'btn-light'}
          ${className}
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