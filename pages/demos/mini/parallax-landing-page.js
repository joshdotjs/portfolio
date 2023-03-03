import Layout from "comps/_layout/_layout";
import MiniProject from "comps/project/mini-project";

// ==============================================

export default function MiniDemo() {

  // --------------------------------------------

  return (
    <Layout 
      // id="mini-demos--parallax-landing-page"
    >
      <MiniProject idx={0} />
    </Layout>
  );

  // --------------------------------------------
}