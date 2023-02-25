import { useContext } from "react";

import PageContext from "context/page-context";

// ==============================================

export default function Footer() {

  // --------------------------------------------

  const { footer_ref } = useContext(PageContext);

  // --------------------------------------------

  return (
    <footer ref={footer_ref}>footer</footer>
  );

  // --------------------------------------------
}