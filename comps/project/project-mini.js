import Button from "comps/button/button";

// ==============================================

export default function Project({ project }) {

  return (
    <div className="project">
      { 
        project.links?.youtube && (
          <iframe 
            src={project.links.youtube} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        )
      }

      <div className="btn-container">
        {/* <Button variant="full"  color="dark" href='/demos/ecommerce/laravel'>Summary</Button> */}
        <Button variant="full" color="dark" href={project.links.demo} >Live Demo</Button>
        <Button variant="empty" color="dark" href={project.links.code}>Code</Button>
      </div>


      { 
        project?.bullets && (
          <ul className="bullets">
            {
              project?.bullets.map((bullet, idx) => {
                
                const key = `${project.id}-bullet-${idx}`;

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