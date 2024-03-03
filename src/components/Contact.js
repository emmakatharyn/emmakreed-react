import { Link } from "react-router-dom";

function Contact() {
  return (
    <section id='contact'>
      <h2>Contact</h2>
      <div className='flex-container'>
        <div className='blurb'>
          <p className='contact-blurb'>Let's build something cool.</p>

          <Link className='email' to='mailto:emmakatharyn@gmail.com'>
            ✨ emmakatharyn@gmail.com
          </Link>
          <div className='social-media-box'>
            <Link to='https://github.com/emmakatharyn'>
              <ion-icon
                className='social-media-icon'
                name='logo-github'
              ></ion-icon>
            </Link>
            <Link to='https://codepen.io/emmakreed'>
              <ion-icon
                className='social-media-icon'
                name='logo-codepen'
              ></ion-icon>
            </Link>
            <Link to='https://www.instagram.com/emmakatharyn/'>
              <ion-icon
                className='social-media-icon'
                name='logo-instagram'
              ></ion-icon>
            </Link>
          </div>
        </div>

        <img src='images/ezgif-kip-yes-i-love-tech.gif' alt='Kip gif' />
      </div>
    </section>
  );
}

export default Contact;
