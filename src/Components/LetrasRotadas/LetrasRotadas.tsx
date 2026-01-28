type LetrasRotadasType = {
  letras: string[];
  className: string;
};

const LetrasRotadas = ({ letras, className }: LetrasRotadasType) => {
  return (
    <div
      className="absolute left-4 z-10 flex h-full flex-col justify-between"
      data-aos="fade-right"
    >
      <div
        className={`flex flex-1 flex-col items-center justify-around font-exo text-4xl font-bold opacity-80 lg:text-5xl ${className}`}
      >
        {letras.map((letra, i) => (
          <p key={i} className="rotate-90">
            {letra}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LetrasRotadas;
