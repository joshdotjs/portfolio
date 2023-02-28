// ==============================================

const projects = [
  {
    id: 'project-1',
    img: '/img/code-react.png',
    title: 'eCommerce Store',
    title_mobile: 'eCommerce',
    description: [
      `This demo is a custom storefront built with React and Laravel. The product data, ordering system, and checkout flow use a custom Laravel backend built from scratch.`,
      `Credit card transactions are processed with the Stripe API, including Buy Now Pay Later (BNPL) with Klarna using web-hooks to update the status of orders in real-time.`,
      `Animations are custom built — most use advanced GSAP techniques.`,
      // `There is a user-facing storefront for customers to view/filter/sort products, place items in an interactive shopping cart and place orders with an online payment system as well as an admin-facing dashboard for product and order logistics.`,
      `Custom server-side rendering (SSR) is achieved by rendering a subset of products on the initial page load — subsequent product retrieval is achieved via AJAX requests with the native fetch API after the page has been hydrated with JavaScript.`,
      `The app features JWT based authentication using local storage and cryptographically hashed passwords via Bcrypt for secure login/registration.`,
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon bi bi-cart2" viewBox="0 0 16 16">
        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
      </svg>
    ),
    logos: [
      '/logos/react.svg',
      '/logos/laravel.svg',
      '/logos/gsap.svg',
      '/logos/vite.svg',
    ],
    links: {
      code:    'https://github.com/joshdotjs/php-web-app.com',
      demo:    'https://www.php-web-app.com',
      video:   '/videos/ecommerce/2023',
      youtube: 'https://www.youtube.com/embed/pBkmgFk0uno',
      summary: '/demos/ecommerce/laravel',
    },
    bullets: [
      `Frontend: React with Vite`,
      `Backend: Laravel`,
      `Animations are custom built — most use advanced GSAP techniques`,
      `Embedded Adobe After Effects custom loading animation`,
      `Mostly custom CSS (with some Tailwind)`,
      `User-facing storefront for customers to view/filter/sort products, place items in an interactive shopping cart and place orders with an online payment system`,
      `Admin-facing dashboard for product and order logistics`,
      `Stripe credit card transactions including Buy Now Pay Later (BNPL) with Klarna using web-hooks to update the status of orders`,
      `Custom server-side rendering (SSR) by rendering a subset of products on the initial page load — subsequent product retrieval via AJAX requests after the page has been hydrated with JavaScript — this is good for SEO and initial page load speed`,
      `JWT based authentication using local storage`,
      `Cryptographically hashed passwords via Bcrypt for secure login/registration`,
    ],
  },
  {
    id: 'project-2',
    img: '/img/code-react.png',
    title: 'Portfolio',
    title_mobile: 'Portfolio',
    description: [
      `This demo is built with entirely custom CSS (SCSS) and no libraries other than GSAP and Next.js.`,
      `Next.js is used with server side rendering.`,
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon bi bi-file-earmark" viewBox="0 0 16 16">
        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
      </svg>
    ),
    logos: [
      '/logos/next.svg',
      '/logos/sass.svg',
      '/logos/gsap.svg',
    ],
    links: {
      code:    'https://github.com/joshdotjs/portfolio',
      demo:    'https://www.joshdotjs.com',
      // video:   '/videos/portfolio/2023',
      summary: '/demos/portfolio-demo',
    },
    bullets: [],
  },
];

// ==============================================

export default projects;