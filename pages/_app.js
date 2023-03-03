import { PageContextProvider} from 'context/page-context';

// Layout:
import 'css/main.scss';
import 'comps/_layout/header.scss';
import 'comps/_layout/footer.scss';
import 'comps/_layout/drawer-nav.scss';

// Pages:
import 'comps/_pages/_home/_home-page.scss';
import 'comps/_pages/portfolio/_portfolio-page.scss';
import 'comps/_pages/contact/_contact-page.scss';

// Comps:
import 'comps/button/button.scss';
import 'comps/project/project.scss';
import 'comps/project/mini-project.scss';

// ==============================================

export default function App({ Component, pageProps }) {
  return (
    <PageContextProvider>
      <Component {...pageProps} />
    </PageContextProvider>
  );
}

// ==============================================