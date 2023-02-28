import Layout from "comps/_layout/_layout";

// ==============================================

export default function eCommerceDemoVideoPage() {

  // --------------------------------------------

  return (
    <Layout id="videos--ecommerce">

        <div className="video-container">
          <iframe 
            // width="560" 
            // height="315" 
            width="100%" height="100%"
            src="https://www.youtube.com/embed/pBkmgFk0uno" 
            title="YouTube video player" 
            // frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>

    </Layout>
  );

  // --------------------------------------------
}