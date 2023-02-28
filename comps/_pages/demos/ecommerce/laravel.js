import Button from "comps/button/button";

import projects from "data/projects";

// ==============================================

export default function Page() {

  // --------------------------------------------

  return (
    <>
      <section>

        { 
          projects[0].links?.youtube && (
            <iframe 
              src={projects[0].links.youtube} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          )
        }

        <div className="btn-container">
          {/* <Button variant="full"  color="dark" href='/demos/ecommerce/laravel'>Summary</Button> */}
          <Button variant="full" color="dark" href={projects[0].links.demo} className="sm-inline">Live Demo</Button>
          <Button variant="empty" color="dark" href={projects[0].links.code}>Code</Button>
        </div>

      </section>

      <section>

      </section>

    </>
  );

  // --------------------------------------------
}