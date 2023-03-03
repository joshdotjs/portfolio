import Button from "comps/button/button";
import { Fragment } from "react";

import mini_projects from "data/projects-mini";

// ==============================================

const Card = ({ project, idx })  => {

  const { id, className, title, title_mobile, description, icon, img, logos, links, techs } = project;

  return (
    <Button 
      href={links.page}
      style={false}
      className={`mini-projects-row ${className}`}
    >

      <img src={logos[0]} className="left" />

      <div className="right">
        <h5>{title}</h5>

        <ul>
          { techs?.map((tech, jdx) => {
            const key = `mini-project-${idx}--tech-${jdx}`;
            return (
              <Fragment key={key}>
                <li>
                  {tech}<span></span>
                </li>
              </Fragment>
            );
          }) }
        </ul>
      </div>
    </Button>  
  );
};

// ==============================================

export default function MiniProjects() {
  return (
    <section id="mini-projects">

      <h2>Mini Projects <span style={{ fontSize: '0.9rem' }} >😁 Coming soon! 😁</span></h2>

      <div className="mini-projects-container shadow">
        {
          mini_projects.map((project, idx) => {

            const key = `mini-project-card-${idx}`;

            return (
              <Fragment key={key}>
                <Card {...{idx, project}} />
              </Fragment>
            );
          })
        }
      </div>
    </section>
  );
}

// ==============================================