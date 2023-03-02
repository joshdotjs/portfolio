import Layout from "comps/_layout/_layout";
import Button from "comps/button/button";

// ==============================================

export default function eCommerceDemoVideoPage() {

  // --------------------------------------------

  return (
    <Layout>
      <section className="project">

          <iframe 
            // width="560" 
            // height="315" 
            // width="100%" height="100%"
            src="https://www.youtube.com/embed/pBkmgFk0uno" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>

        <div className="btn-container">
          <Button variant="full"  color="dark" href='/demos/ecommerce/laravel'>Summary</Button>
          <Button variant="empty" color="dark" href='https://www.php-web-app.com' className="sm-inline">Live Demo</Button>
          <Button variant="empty" color="dark" href='https://github.com/joshdotjs/php-web-app.com'>Code</Button>
        </div>

      </section>

    </Layout>
  );

  // --------------------------------------------
}