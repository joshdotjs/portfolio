import Button from "comps/button/button";
import { Fragment } from "react";

// ==============================================

const Panel = ({ id, className, title, description, icon, img }) => {

  return (
    <div id={id} className={`panel ${className}`}>

      <div className="left">
        <h2 className="title">{ title }</h2>
        <p className="description">{ description }</p>
      </div>
      

      <img className="right" src={img}/>
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
  },
  {
    id: 'project-2',
    img: '/img/code-react.png',
    title: 'Project 2',
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