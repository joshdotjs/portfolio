import Button from "comps/button/button";
import { Fragment } from "react";

import projects from "data/projects";

// ==============================================

const Panel = ({ id, className, title, description, icon, img }) => {

  return (
    <div id={id} className={`panel ${className}`}>

      <div className="left">

        { icon }
        <h2 className="title">{ title }</h2>
        <p className="description">{ description }</p>

        <div className="btn-container">
          <Button variant="full"  color="dark" href="/demos/ecommerce">Summary</Button>
          <Button variant="empty" color="dark" href="https://www.php-web-app.com"><span className="desktop-inline">Live </span>Demo</Button>
          <Button variant="empty" color="dark" href="/videos/ecommerce">Video</Button>
        </div>

      </div>
      
      <div className="right" 
        // style={{ height: '100%', width: '100%', background: 'red', aspectRatio: '1', 
        // transform: 'translateX(50%)'
      // }}
      >
        <img src={img}/>
      </div>
    </div>  
  );
};


// ==============================================

export default function Hero() {
  return (
    <section id="projects">
      {
        projects.map(({ id, img, title, description, icon }) => {
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