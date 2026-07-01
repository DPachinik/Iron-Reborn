import Pack from '../Components/Pack/Pack';
import Testimonios from '../Components/Testimonios/Testimonios';
import { Element } from 'react-scroll';

const Subscriptions = () => {
  return (
    <Element
      name="paquetes"
      className="relative flex h-full flex-col overflow-hidden bg-[#121212]"
    >
      <div className="h-full px-4 md:px-12 md:pt-12">
        <Pack />
      </div>
      <Testimonios />
    </Element>
  );
};

export default Subscriptions;
