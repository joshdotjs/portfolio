import Layout from 'comps/_layout/_layout';

// Layout:
import 'css/__layout.scss';
import 'comps/_layout/header.scss';
import 'comps/_layout/footer.scss';
import 'comps/_layout/drawer-nav.scss';

// Pages:
import 'css/home.scss';
import 'pages/videos/ecommerce/2023.scss';

// ==============================================

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

// ==============================================