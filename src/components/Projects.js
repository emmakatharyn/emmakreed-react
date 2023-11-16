export default function ProjectsSection() {
  return (
    <section id='projects'>
      <h2>Recent Projects</h2>
      <div className='container'>
        <div className='project'>
          <a
            className='project-img-link'
            href={"https://www.sugarandryegalveston.com"}
          >
            <div className='project-img'>
              <h3>Sugar &amp; Rye Galveston</h3>
            </div>
          </a>

          <p className='project-description'>
            Built in pure HTML, CSS, and JavaScript, this was the initial
            website for Sugar & Rye Coastal Kitchen & Cocktail Lounge in
            Galveston, TX during their first few years of business. This site is
            mobile responsive and search engine optimized with a custom menu
            component.
          </p>
        </div>

        <div className='project'>
          <a
            className='project-img-link'
            href='https://codesandbox.io/s/suspicious-williamson-dxsmk9?file=/src/index.js'
          >
            <div className='project-img'>
              <h3>Dev Card Built with React</h3>
            </div>
          </a>

          <p className='project-description'>
            I am currently working through a few courses on React.js through
            Udemy and Codecademy. This is my first little build in Code Sandbox
            - a developer card with an avatar, name, description, and listed
            skills.
          </p>
        </div>

        <div className='project'>
          <a
            className='project-img-link'
            href='https://ereed-erisa.github.io/guess-my-number/'
          >
            <div className='project-img'>
              <h3>Guess My Number</h3>
            </div>
          </a>
          <p className='project-description'>
            A simple game written in HTML, CSS, & JavaScript where there is a
            mystery number between 1 and 20. User starts with a score of 20.
            Each wrong guess docks 1 point from this score. Check it out and try
            to beat your highscore! 👀
          </p>
        </div>

        <div className='project'>
          <a
            className='project-img-link'
            href='https://ereed-erisa.github.io/pig-dice-game/'
          >
            <div className='project-img'>
              <h3>A Basic Dice Game</h3>
            </div>
          </a>
          <p className='project-description'>
            A project as part of Jonas Schmedtmann's JavaScript course, this
            simple two-player dice game is written in HTML, CSS, and JavaScript.
          </p>
        </div>
      </div>
      <p
        style={{
          fontSize: "16px",
          textAlign: "center",
          width: "420px",
          margin: "0 auto",
        }}
      >
        Check out my <a href='https://github.com/ereed-erisa/'>GitHub</a> for
        more projects!
      </p>
    </section>
  );
}
