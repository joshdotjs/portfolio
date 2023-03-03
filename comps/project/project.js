import Button from "comps/button/button";

import projects from "data/projects";

// ==============================================

export default function Project({ idx }) {

  // --------------------------------------------

  const { links, bullets } = projects[idx];

  // --------------------------------------------

  return (
    <div className="project">
      { 
        links?.youtube && (
          <iframe 
            src={links.youtube} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        )
      }

      <div className="btn-container">
        {/* <Button variant="full"  color="dark" href='/demos/ecommerce/laravel'>Summary</Button> */}
        <Button variant="full" color="dark" href={links.demo} >Live Demo</Button>
        <Button variant="empty" color="dark" href={links.code}>Code</Button>
      </div>


      { 
        bullets && (
          <ul className="bullets">
            {
              bullets.map((bullet, jdx) => {
                
                const key = `project-${idx}-bullet-${jdx}`;

                return (
                  <li key={key}>{bullet}</li>
                );
              })
            }
          </ul>
        )
      }

    </div>

  );
}