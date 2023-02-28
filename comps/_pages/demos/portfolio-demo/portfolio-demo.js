import Button from "comps/button/button";

import projects from "data/projects";

// ==============================================

export default function Page() {

  return (
    <section>

      {/* <iframe 
        src="https://www.youtube.com/embed/pBkmgFk0uno" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      ></iframe> */}

      <div className="btn-container">
        <Button variant="full" color="dark" href={projects[1].links.demo} className="sm-inline">Live Demo</Button>
        <Button variant="empty" color="dark" href={projects[1].links.code}>Code</Button>
      </div>

    </section>
  );
}

// ==============================================