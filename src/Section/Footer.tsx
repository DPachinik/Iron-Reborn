import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="flex h-[70px] items-center bg-[#121212] px-4 md:mt-0">
      <div className="mx-auto flex h-fit w-full max-w-3xl items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/r.png" alt="logotipo" className="h-[40px] w-[30px]" />
          <span className="font-exo text-sm font-semibold text-white md:text-base">
            NUESTRAS REDES
          </span>
        </div>

        <div className="flex gap-8">
          <a
            href="https://www.instagram.com/iron_reborn/"
            rel="external"
            target="_blank"
            className="transition-all duration-100 hover:scale-110"
          >
            <FaInstagram size={32} color="#ff2323" />
          </a>
          <a
            href="https://www.facebook.com/iron.house.gym.sajonia"
            rel="external"
            target="_blank"
            className="transition-all duration-100 hover:scale-110"
          >
            <FaFacebook size={32} color="#ff2323" />
          </a>
          <a
            href="https://wa.me/+5950982101391?text=%20Hola,%20vengo%20desde%20la%20web%20,%20quiero%20saber%20más%20sobre%20las%20clases%20y%20paquetes%20disponibles%20me%20interesa%20frecuentar%20el%20gimnasio..."
            rel="external"
            target="_blank"
            className="transition-all duration-100 hover:scale-110"
          >
            <FaWhatsapp size={32} color="#ff2323" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Footer;
