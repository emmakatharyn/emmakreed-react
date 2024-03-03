import { Link } from "react-router-dom";

export default function ProjectsSection() {
  return (
    <section id='projects'>
      <h2>Recent Projects</h2>
      <div className='container'>
        <div className='project'>
          <Link
            className='project-img-link'
            to='https://preeminent-faun-dcfab7.netlify.app/'
            target='_blank'
          >
            <div className='project-img'>
              <h3>SoNM Group Benefits</h3>
            </div>
          </Link>

          <p className='project-description'>
            WIP; turning the static HTML site into a React app.
          </p>
        </div>

        <div className='project'>
          <Link
            className='project-img-link'
            to='https://emmakatharyn.github.io/pack-n-go-app/'
            target='_blank'
          >
            <div className='project-img'>
              <h3>Pack-N-Go React App</h3>
            </div>
          </Link>

          <p className='project-description'>
            A packing list for travel that accepts user input items and appends
            them to the page with an option to check complete or delete.
          </p>
        </div>

        <div className='project'>
          <Link
            className='project-img-link'
            to='https://github.com/emmakatharyn/jammming'
            target='_blank'
          >
            <div className='project-img'>
              <h3>Jammming React App (Repo)</h3>
            </div>
          </Link>
          <p className='project-description'>
            A React app that uses the Spotify API for a playlist building app.
            User can search for songs/artists and create custom playlists.
          </p>
        </div>

        <div className='project'>
          <Link
            className='project-img-link'
            to='https://emmakatharyn.github.io/to-do-list/'
            target='_blank'
          >
            <div className='project-img'>
              <h3>ToDo List</h3>
            </div>
          </Link>
          <p className='project-description'>
            WIP; a to-do list written in React. Accepts user input and adds to
            the list unchecked. User may edit or remove list items, as well as
            toggle dark/light theme.
          </p>
        </div>
      </div>
      <p class='github-link'>
        Check out my{" "}
        <Link to='https://github.com/emmakatharyn' target='_blank'>
          GitHub
        </Link>{" "}
        for more projects!
      </p>
    </section>
  );
}
