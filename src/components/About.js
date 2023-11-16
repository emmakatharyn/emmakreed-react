function About() {
  return (
    <section id='about'>
      <h2>About Emma</h2>

      <div className='flex-container'>
        <img
          className='about-headshot'
          src='/images/headshot_2.JPEG'
          alt='Headshot of Emma'
        />
        <div className='text-side'>
          <p className='blurb'>
            Emma is an LSU music grad originally from Houston, TX who learned
            front-end web development during the COVID pandemic.
          </p>
          <p className='blurb'>
            In Spring 2016, Emma received a Bachelor of Arts in music with a
            minor emphasis in Chinese language and culture studies. She
            bartended and painted watercolors for some years after graduating
            from LSU and moving back to the Houston area.
          </p>
          <p className='blurb'>
            Early spring of 2020, Emma moved to Santa Fe and was a bartender at
            La Fonda on the Plaza during the pandemic while learning graphic
            design and web development during lay-off periods. Emma has been a
            web developer for a local admin company since November 2021. In her
            free time, she enjoys reading, listening to/playing music, painting,
            and drinking iced lattes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
