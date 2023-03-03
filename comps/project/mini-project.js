import Button from "comps/button/button";

import mini_projects from "data/projects-mini";

// ==============================================

export default function MiniProject({ idx }) {

  const { links, techs } = mini_projects[idx];

  console.log('links: ', links);

  return (
    <div className="project">

      <iframe 
        src={links.demo} 
        // title="YouTube video player" 
        frameBorder="0" 
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        // allowFullScreen
        className="shadow"
      ></iframe>



      {/* <div className="btn-container">
        <Button variant="full" color="dark" href={links.demo} >Live Demo</Button>
        <Button variant="empty" color="dark" href={links.code}>Code</Button>
      </div> */}


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

    </div>
  );
}