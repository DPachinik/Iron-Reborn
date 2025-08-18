import About from '../Section/About';
import Class from '../Section/Class';
import Contact from '../Section/Contact';
import Hero from '../Section/Hero';

const Landing = () => {
  return (
    <div className="scroll-style">
      <Hero />
      <About />
      <Class />
      <Contact />
    </div>
  );
};

export default Landing;
