import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id='hero'>
      <div className='hero-flex'>
        <h1>Emma Reed</h1>
        <p className='hero-paragraph'>
          Front-end web developer based in Santa Fe, NM
        </p>
        <div className='btn-flexbox'>
          <Link className='btn hero-btn' to='/projects'>
            Projects
          </Link>
          <Link className='btn hero-btn' to='/contact'>
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
