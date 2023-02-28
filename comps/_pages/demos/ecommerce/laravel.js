import Project from "comps/project/project";

import projects from "data/projects";

// ==============================================

export default function Page() {

  // --------------------------------------------

  return (
    <Project project={projects[0]} />
  );

  // --------------------------------------------
}