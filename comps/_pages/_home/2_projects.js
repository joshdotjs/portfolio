import Button from "comps/button/button";
import { Fragment } from "react";

import projects from "data/projects";

// ==============================================

const Panel = ({ id, className, title, description, icon, img, logos }) => {

  return (
    <div id={id} className={`panel ${className}`}>

      {/* =================================-- */}

      <div className="left">

        {/* --------------------------------- */}

        { icon }

        {/* --------------------------------- */}

        <div className="title-container">
          
          <h2 className="title">{ title }</h2>
          
          <div className="logos">
            { logos?.map((logo) => {
              return (<img src={logo} className="logo" />);
            }) }
          </div>
        </div>

        {/* --------------------------------- */}

        <p className="description">{ description }</p>

        {/* --------------------------------- */}

        <div className="btn-container">
          <Button variant="full"  color="dark" href="/demos/ecommerce">Summary</Button>
          <Button variant="empty" color="dark" href="https://www.php-web-app.com">Live Demo</Button>
          <Button variant="empty" color="dark" href="/videos/ecommerce" className="sm-inline-block">Video</Button>
        </div>

        {/* --------------------------------- */}



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
        projects.map(({ id, img, title, description, icon, logos }) => {
          return (
            <Fragment key={id}>
              <Panel {...{ id, img, title, description, icon, logos }} />
            </Fragment>
          );
        })
      }
    </section>
  );
}

// ==============================================