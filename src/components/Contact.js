function Contact() {
  return (
    <section id='contact'>
      <h2>Contact</h2>
      <div className='flex-container'>
        <div className='blurb'>
          <p className='contact-blurb'>Let's build something cool.</p>
          <button id='contactBtn' className='btn portal'>
            Contact
          </button>
          <div className='captcha-box'>
            <p id='bot-msg'>
              If you would like my contact info,
              <br />
              please prove you're not a bot by finishing Kip's iconic lyrics:
            </p>
            <p id='iLuvTech'>🎶Yes, I love ________</p>

            <div id='hidden'></div>
          </div>
          <a className='email' href='mailto:emmakatharyn@gmail.com'>
            ✨ emmakatharyn@gmail.com ✨
          </a>
          <div className='social-media-box'>
            <a href='https://github.com/ereed-erisa'>
              <ion-icon
                className='social-media-icon'
                name='logo-github'
              ></ion-icon>
            </a>
            <a href='https://codepen.io/emmakreed'>
              <ion-icon
                className='social-media-icon'
                name='logo-codepen'
              ></ion-icon>
            </a>
            <a href='https://www.instagram.com/emmakatharyn/'>
              <ion-icon
                className='social-media-icon'
                name='logo-instagram'
              ></ion-icon>
            </a>
          </div>
        </div>

        <img src='images/ezgif-kip-yes-i-love-tech.gif' alt='Kip gif' />
      </div>
    </section>
  );
}

export default Contact;
