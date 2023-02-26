import Button from "comps/button/button";
import { Fragment } from "react";

import projects from "data/projects";

// ==============================================

const Panel = ({ project })  => {

  const { id, className, title, title_mobile, description, icon, img, logos, links } = project;

  return (
    <div id={id} className={`panel ${className}`}>

      {/* =================================-- */}

      <div className="left">

        {/* --------------------------------- */}

        { icon }

        {/* --------------------------------- */}

        <div className="title-container">
          
          <h2 className="title mobile">{ title_mobile }</h2>
          <h2 className="title desktop">{ title }</h2>
          
          <div className="logos">
            { logos?.map((logo) => {
              return (<img key={logo} src={logo} className="logo" />);
            }) }
          </div>
        </div>

        {/* --------------------------------- */}

        <p className="description">{ description }</p>

        {/* --------------------------------- */}

        <div className="btn-container">
          <Button variant="full"  color="dark" href={links.summary}>Summary</Button>
          <Button variant="empty" color="dark" href={links.demo}>Live Demo</Button>
          <Button variant="empty" color="dark" href={links.video} className="sm-inline-block">Video</Button>
        </div>

        {/* --------------------------------- */}

      </div>

      {/* =================================-- */}
      
      <div className="right" 
        // style={{ height: '100%', width: '100%', background: 'red', aspectRatio: '1', 
        // transform: 'translateX(50%)'
      // }}
      >
        <img src={img}/>
      </div>

      {/* =================================-- */}

    </div>  
  );
};


// ==============================================

export default function Hero() {
  return (
    <section id="projects">
      {
        projects.map((project) => {
          return (
            <Fragment key={project.id}>
              <Panel project={project} />
            </Fragment>
          );
        })
      }
    </section>
  );
}

// ==============================================