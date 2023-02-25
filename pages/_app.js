// Layout:
import 'css/main.scss';
import 'comps/_layout/header.scss';
import 'comps/_layout/footer.scss';
import 'comps/_layout/drawer-nav.scss';

// Pages:
import 'comps/_pages/_home/_home-page.scss';
import 'pages/videos/ecommerce/2023.scss';

// ==============================================

export default function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

// ==============================================