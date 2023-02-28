import Button from "comps/button/button";
import { Fragment } from "react";

import skills from "data/skills";

// ==============================================

const Skill = ({ idx, skill: { title, description, logo } })  => {
  

  return (
    <div className={`skill`}>

      {/* --------------------------------- */}

      <img src={logo} alt={title} />

      {/* --------------------------------- */}

      <h3 className="title">{title}</h3>

      {/* --------------------------------- */}

      <div className="description">
        { description.map((line, jdx) => {
          const key = `skill-${idx}-line-${jdx}`;
          return <p key={key} className="description-line">{line}</p>
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
          { skills.map((skill, idx) => {
            const key = `skill-${idx}`;
            return (
              <Fragment key={key}>
                <Skill idx={idx} skill={skill} />
              </Fragment>
            );
          }) }
        </div>

      </div>
    </section>
  );
}

// ==============================================