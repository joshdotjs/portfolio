import Button from "comps/button/button";

import mini_projects from "data/projects-mini";

// ==============================================

export default function MiniProject({ idx, allow_mobile_embedded=true }) {

  const { links, techs } = mini_projects[idx];

  console.log('links: ', links);

  return (
    <div className="mini-project">

      {/* ----------------------------------- */}

      <div className={`demo-container shadow ${allow_mobile_embedded ? '' : 'xxl-block'}`}>
        <iframe 
          src={links.demo} 
          // title="YouTube video player" 
          frameBorder="0" 
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          // allowFullScreen
        ></iframe>
      </div>
      
      {/* ----------------------------------- */}

      { 
        links.sandbox && 
          <div className="demo-container shadow">
            <iframe 
              src={links.sandbox} 
              frameBorder="0" 
            ></iframe>
          </div>
      }

      {/* ----------------------------------- */}

      <div className="btn-container">
        <Button variant="full" color="dark" href={links.demo}>Live <span className="sm-inline"> Demo</span></Button>
        { links.sandbox && <Button variant="empty" color="dark" href={links.sandbox} className="sandbox-button">Editable<span className="sm-inline"> Code</span></Button> }
        <Button variant="empty" color="dark" href={links.code}>Code</Button>
      </div>

      {/* ----------------------------------- */}

      {/* <ul className="techs">
        {
          techs.map((tech, jdx) => {
            
            const key = `mini-project-${idx}-tech-${jdx}`;

            return (
              <li key={key}>
                <img src={tech} />
              </li>
            );
          })
        }
      </ul> */}

      {/* ----------------------------------- */}

    </div>
  );
}