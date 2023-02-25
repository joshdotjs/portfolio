import Button from "comps/button/button";
import { Fragment } from "react";

// ==============================================

const Panel = ({ id, className, img }) => {

  return (
    <div id={id} className={`panel ${className}`}>


      

      <img src={img}/>
    </div>  
  );
};

// ==============================================

const projects = [
  {
    id: 'project-1',
    img: '/img/code-react.png',
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl eu nunc.',
    icon: '🚀'
  }
];

// ==============================================

export default function Hero() {
  return (
    <section id="projects">

      {
        projects.map(({ id, img, title, description, icon }, idx) => {
          return (
            <Fragment key={id}>
              <Panel {...{ id, img, title, description, icon }} />
            </Fragment>
          );
        })
      }


    </section>
  );
}

// ==============================================