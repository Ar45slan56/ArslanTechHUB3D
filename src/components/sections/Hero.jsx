const words = [
  { text:Ideas, imgPath: '/img/ideas.svg' },
  { text:Concepts, imgPath: '/img/concepts.svg' },
]

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background image is Loading...." />
      </div>

<div className="hero_layout">
{/* left : hero content */}
<header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5  ">
<div className="flex flexx-col gap-7">
<div className="hero-text">
  <h1>Shaping 
    <span className="slide">
      <span className="wrapper">
        {words.map((word) => (
          <span key={word.text}></span>
         
        ))}
      </span>
    </span>
  </h1>
  <h1>Tomorrow’s Technology</h1>
  <h1>Through Today’s Innovation</h1>
</div>


</div>

</header>
</div>


    </section>
  );
};

export default Hero;
