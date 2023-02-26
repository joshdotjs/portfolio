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
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon bi bi-gem" viewBox="0 0 16 16">
        <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
      </svg>
    ),
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