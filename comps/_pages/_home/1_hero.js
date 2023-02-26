import Button from "comps/button/button";

// ==============================================

export default function Hero() {
  return (
    <section id="hero">

      <div className="overlay"></div>

      <div id="construction">🚧 Website under construction! 🚧</div>
      
      <div className="left">


          <svg xmlns="http://www.w3.org/2000/svg" className="hero-design shadow" 
            // width="686" height="688" 
            viewBox="0 0 686 688"
          >
            <g id="blockdesign" transform="translate(-935 -289)">
              <rect id="top-square"className="square-anim" data-name="Rectangle 2" width="172" height="172" rx="19" transform="translate(1277 289)" fill="rgba(255, 255, 255, 0.5)"/>
              <rect id="top-circle" className="square-anim" data-name="Rectangle 10" width="172" height="172" rx="86" transform="translate(1277 461)" fill="deepskyblue"/>
              <rect className="square-anim" data-name="Rectangle 8" width="172" height="172" rx="19" transform="translate(1449 461)" fill="rgba(255, 255, 255, 0.5)"/>
              <rect id="row-3-right-square" className="square-anim" data-name="Rectangle 5" width="172" height="172" rx="19" transform="translate(1277 633)" fill="rgba(255, 255, 255, 0.5)" />
              <rect id="row-2-left-square" className="square-anim" data-name="Rectangle 3" width="172" height="172" rx="19" transform="translate(1107 461)" fill="rgba(255, 255, 255, 0.8)" />
              <rect id="lower-circle" className="square-anim" data-name="Rectangle 9" width="172" height="172" rx="86" transform="translate(1107 633)" fill="lightgreen"/>
              <rect id="row-3-left-square" className="square-anim" data-name="Rectangle 7" width="172" height="172" rx="19" transform="translate(935 633)" fill="#fff" opacity="0.17"/>
              <rect id="row-4-square" className="square-anim" data-name="Rectangle 4" width="172" height="172" rx="19" transform="translate(1107 805)" fill="rgba(255, 255, 255, 0.8)" />
            </g>
          </svg>

      </div>
        
      <div className="right">
        <div className="super-title stagger1">
          Full Stack Web Developer
        </div>
        <div className="title stagger1">
          <p>Josh</p>
          <p>Holloway</p>
        </div>
        <div className="sub-title stagger1">
          JavaScript | React | Node | Laravel
        </div>

        <div className="btn-container">
          <Button variant="full"  color="light" href="/portfolio">Demos</Button>
          <Button variant="empty" color="light" href="/contact">Contact</Button>
        </div>
      </div>
    </section>
  );
}

// ==============================================