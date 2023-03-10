import { useState, useEffect, useRef, createContext } from "react";
import { useRouter } from "next/router";

import routes, { getPageindex } from "data/routes";

// ==============================================

const PageContext = createContext({
  page_ref: null,
});

// ==============================================

const PageContextProvider = ({ children }) => {
  
  // --------------------------------------------

  const router = useRouter();

  // --------------------------------------------

  const page_ref = useRef(null);
  const footer_ref = useRef(null);

  // --------------------------------------------

  const page_index = getPageindex(router.pathname);
  const [active_page, setActivePage] = useState(page_index);

  useEffect(() => {
    console.log('context - active_page: ', active_page);
  }, [active_page]);

  // --------------------------------------------

  const context = {
    page_ref,
    footer_ref,
    active_page,
    setActivePage,
  };

  // --------------------------------------------
    
  return (
    <PageContext.Provider value={context}>
      { children }
    </PageContext.Provider>
  );

  // --------------------------------------------
};

// ==============================================

export default PageContext;
export { PageContextProvider };