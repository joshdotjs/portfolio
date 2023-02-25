// ==============================================

const routes = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/portfolio',
    name: 'Portfolio',
  },
  {
    href: '/contact',
    name: 'Contact',
  }
];

// ==============================================

const getPageindex = (pathname) => {
  const hrefs = routes.map(({href}) => href);
  const index = hrefs.indexOf(pathname);
  return index;
};

// ==============================================

export default routes;
export { getPageindex };