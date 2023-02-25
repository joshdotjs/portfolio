import { useRef, createContext } from "react";

// ==============================================

const PageContext = createContext({
  page_ref: null,
});

// ==============================================

const PageContextProvider = ({ children }) => {
  
  // --------------------------------------------

  const page_ref = useRef(null);

  // --------------------------------------------

  const context = {
    page_ref,
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