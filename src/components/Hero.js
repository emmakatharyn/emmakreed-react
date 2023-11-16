function Hero() {
  return (
    <section id='hero'>
      <div className='hero-flex'>
        <h1>Emma Reed</h1>
        <p className='hero-paragraph'>
          Self-taught web developer based in Santa Fe, NM
        </p>
        <div className='btn-flexbox'>
          <a className='btn hero-btn' href='#projects'>
            Projects
          </a>
          <a className='btn hero-btn' href='#contact'>
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
