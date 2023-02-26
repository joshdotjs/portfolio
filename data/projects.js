// ==============================================

const projects = [
  {
    id: 'project-1',
    img: '/img/code-react.png',
    title: 'eCommerce Store',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl eu nunc.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea obcaecati aspernatur, fugiat impedit doloribus eius in laborum quos distinctio voluptatibus consectetur quo suscipit officia cumque, ipsa fuga repudiandae unde. Aspernatur esse non nulla ipsam aliquid asperiores, temporibus officiis eius debitis labore magnam ipsum nihil at hic nobis ad fugit cupiditate consequuntur et totam laboriosam quibusdam corrupti explicabo necessitatibus! Libero earum veniam, modi natus, ut nemo, obcaecati atque cum iusto deserunt repudiandae temporibus quasi a nesciunt! Ut sunt esse natus, culpa voluptatibus similique dicta est modi mollitia optio pariatur quibusdam sapiente magnam, doloribus harum velit ex expedita corrupti inventore repellendus id.
    `,
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
  },
  {
    id: 'project-2',
    img: '/img/code-react.png',
    title: 'Portfolio',
        description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl eu nunc.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea obcaecati aspernatur, fugiat impedit doloribus eius in laborum quos distinctio voluptatibus consectetur quo suscipit officia cumque, ipsa fuga repudiandae unde. Aspernatur esse non nulla ipsam aliquid asperiores, temporibus officiis eius debitis labore magnam ipsum nihil at hic nobis ad fugit cupiditate consequuntur et totam laboriosam quibusdam corrupti explicabo necessitatibus! Libero earum veniam, modi natus, ut nemo, obcaecati atque cum iusto deserunt repudiandae temporibus quasi a nesciunt! Ut sunt esse natus, culpa voluptatibus similique dicta est modi mollitia optio pariatur quibusdam sapiente magnam, doloribus harum velit ex expedita corrupti inventore repellendus id.
    `,
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
  },
  // {
  //   id: 'project-3',
  //   img: '/img/code-react.png',
  //   title: 'Resume',
  //       description: `
  //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl eu nunc.
  //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea obcaecati aspernatur, fugiat impedit doloribus eius in laborum quos distinctio voluptatibus consectetur quo suscipit officia cumque, ipsa fuga repudiandae unde. Aspernatur esse non nulla ipsam aliquid asperiores, temporibus officiis eius debitis labore magnam ipsum nihil at hic nobis ad fugit cupiditate consequuntur et totam laboriosam quibusdam corrupti explicabo necessitatibus! Libero earum veniam, modi natus, ut nemo, obcaecati atque cum iusto deserunt repudiandae temporibus quasi a nesciunt! Ut sunt esse natus, culpa voluptatibus similique dicta est modi mollitia optio pariatur quibusdam sapiente magnam, doloribus harum velit ex expedita corrupti inventore repellendus id.
  //   `,
  //   icon: (
  //     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon bi bi-file-earmark" viewBox="0 0 16 16">
  //       <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
  //     </svg>
  //   ),
  // }
];

// ==============================================

export default projects;