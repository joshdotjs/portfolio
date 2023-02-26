import { useContext } from "react";

import PageContext from "context/page-context";

// ==============================================

const year = new Date().getFullYear();

// ==============================================

export default function Footer() {

  // --------------------------------------------

  const { footer_ref } = useContext(PageContext);

  // --------------------------------------------

  return (
    <footer ref={footer_ref}>
      <div>Josh Holloway © { year }</div>
    </footer>
  );

  // --------------------------------------------
}