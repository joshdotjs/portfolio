import Button from "comps/button/button";
import { Fragment } from "react";

import skills from "data/skills";

// ==============================================

const Skill = ({ skill: { id, title, description, logo } })  => {
  

  return (
    <div className={`skill`}>

      {/* --------------------------------- */}

      <img src={logo} alt={title} />

      {/* --------------------------------- */}

      <h3 className="title">{title}</h3>

      {/* --------------------------------- */}

      <div className="description">
        { description.map((line, idx) => {
          const key = `${id}-line-${idx}`;
          return <p key={key} className="skill-description-line">{line}</p>
        })}
      </div>

      {/* --------------------------------- */}

    </div>  
  );
};

// ==============================================

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">

        <div className="title-container"></div>

        <div className="skills-container">
          { skills.map((skill) => {
            return (
              <Fragment key={skill.id}>
                <Skill skill={skill} />
              </Fragment>
            );
          }) }
        </div>

      </div>
    </section>
  );
}

// ==============================================