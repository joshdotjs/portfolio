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
        <div className="logo">logo</div>
        <div className="navlinks">navlinks</div>
        <div className="socials">social</div>
      </header>
    </>
  );

  // --------------------------------------------
}