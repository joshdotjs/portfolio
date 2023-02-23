import Head from 'next/head';

// ==============================================

export default function Header() {

  // --------------------------------------------

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Josh Holloway | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="Josh Holloway is a full stack web developer with specialization in building custom eCommerce stores" />
        <meta name="keywords" content="JavaScript, React, Node, Laravel, Next.js, GSAP" />
        <meta name="author" content="Josh Holloway" />
      </Head>

      <header>
        <div>
          
          <img className="logo" src="/favicon.svg" />
          
          <ul className="navlinks">
            <li className="navlink">Home</li>
            <li className="navlink">Portfolio</li>
            <li className="navlink">Contact</li>
          </ul>
          
          <ul className="socials">
            <li className="social">YouTube</li>
            <li className="social">GitHub</li>
          </ul>

        </div>
      </header>
    </>
  );

  // --------------------------------------------
}