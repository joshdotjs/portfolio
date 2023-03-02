import Layout from "comps/_layout/_layout";
import Project from "comps/project/project";

import projects from "data/projects";

// ==============================================

export default function DemosPortfolioPage() {

  // --------------------------------------------

  return (
    <Layout id="demos--portfolio-demo">
      <Project project={projects[1]} />
    </Layout>
  );

  // --------------------------------------------
}