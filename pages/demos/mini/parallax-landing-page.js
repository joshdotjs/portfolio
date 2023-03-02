import Layout from "comps/_layout/_layout";
import MiniProject from "comps/project/project-mini";

import mini_projects from "data/projects-mini";

// ==============================================

export default function MiniDemo() {

  // --------------------------------------------

  return (
    <Layout 
      // id="mini-demos--parallax-landing-page"
    >
      <MiniProject mini_project={mini_projects[1]} />
    </Layout>
  );

  // --------------------------------------------
}