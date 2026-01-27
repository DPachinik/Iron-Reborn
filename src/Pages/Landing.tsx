import About from '../Section/About';
import Class from '../Section/Class';
import Contact from '../Section/Contact';
import Footer from '../Section/Footer';
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
      <Footer />
    </div>
  );
};

export default Landing;
