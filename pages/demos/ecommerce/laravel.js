import Layout from "comps/_layout/_layout";
import Project from "comps/project/project";

import projects from "data/projects";

// ==============================================

export default function eCommerceDemoVideoPage() {

  // --------------------------------------------

  return (
    <Layout id="videos--ecommerce">
      <Project project={projects[0]} />
    </Layout>
  );

  // --------------------------------------------
}