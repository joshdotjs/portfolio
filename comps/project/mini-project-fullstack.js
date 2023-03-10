import Button from "comps/button/button";

import mini_projects from "data/projects-mini";

// ==============================================

export default function MiniProjectFullstack({ idx, allow_mobile_embedded=true }) {

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
        links.sandbox.frontend && 
          <div className="demo-container shadow">
            <iframe 
              src={links.sandbox.frontend} 
              frameBorder="0" 
            ></iframe>
          </div>
      }

      { 
        links.sandbox.backend && 
          <div className="demo-container shadow">
            <iframe 
              src={links.sandbox.backend} 
              frameBorder="0" 
            ></iframe>
          </div>
      }

      {/* ----------------------------------- */}

      <div className="btn-container">
        <Button variant="full" color="dark" href={links.demo}>Live <span className="sm-inline"> Demo</span></Button>
        <Button variant="empty" color="dark" href={links.sandbox.frontend} className="sandbox-button">Editable<span className="sm-inline"> Frontend Code</span></Button>
        <Button variant="empty" color="dark" href={links.sandbox.backend} className="sandbox-button">Editable<span className="sm-inline"> Backend Code</span></Button>
        <Button variant="empty" color="dark" href={links.code.frontend}>Frontend Repo</Button>
        <Button variant="empty" color="dark" href={links.code.backend}>Backend Repo</Button>
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