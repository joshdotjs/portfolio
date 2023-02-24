import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from 'comps/_layout/_layout';
import PageTransisions from 'comps/PageTransition';

// Layout:
import 'css/__layout.scss';
import 'comps/_layout/header.scss';
import 'comps/_layout/footer.scss';
import 'comps/_layout/drawer-nav.scss';
import 'comps/page-transition.scss';

// Pages:
import 'css/home.scss';
import 'pages/videos/ecommerce/2023.scss';

import css from 'util/css';

// ==============================================

export default function App({ Component, pageProps }) {

  // --------------------------------------------

  const router = useRouter();

  // --------------------------------------------

  useEffect(() => {
    const pageChange = () => {
      css.set('page-offset', `-${window.scrollY}px`);
    };
    router.events.on('routeChangeStart', pageChange);
  }, [router.events]);

  // --------------------------------------------

  return (
    <Layout>
      <PageTransisions
        route={router.asPath}
      >
        <Component {...pageProps} />
      </PageTransisions>
    </Layout>
  )
}

// ==============================================