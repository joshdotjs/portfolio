// Layout:
import 'css/__layout.scss';
import 'comps/_layout/header.scss';
import 'comps/_layout/footer.scss';

// Pages:
import 'css/home.scss';

// ==============================================

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// ==============================================