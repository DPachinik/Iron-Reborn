import About from '../Section/About';
import Class from '../Section/Class';
import Contact from '../Section/Contact';
import Hero from '../Section/Hero';
import Subscriptions from '../Section/Subscriptions';

const Landing = () => {
  return (
    <div className="scroll-style">
      <Hero />
      <About />
      <Class />
      <Subscriptions />
      <Contact />
    </div>
  );
};

export default Landing;
