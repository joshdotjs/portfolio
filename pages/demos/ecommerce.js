import Layout from "comps/_layout/_layout";

// ==============================================

export default function eCommerceDemoVideoPage() {

  // --------------------------------------------

  return (
    <Layout id="demos--ecommerce">

      <section>
        <iframe 
          width="560" height="315" 
          src="https://www.youtube.com/embed/pBkmgFk0uno" 
          title="YouTube video player" 
          frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
          ></iframe>
      </section>

      <iframe src="https://php-web-app.com" ></iframe>
    </Layout>
  );

  // --------------------------------------------
}