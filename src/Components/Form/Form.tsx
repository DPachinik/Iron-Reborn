import { CaretDoubleRight } from 'phosphor-react';
import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const InputStyle =
    'flex w-full  h-[30px]   pl-2 outline-none  placeholder:text-gray-500 rounded-lg placeholder:bg-white text-sm';
  const TextAreaStyle =
    'flex w-full  h-[150px]  bg-[#2C2C2C] outline-none pl-2 placeholder:text-gray-500 rounded-lg bg-white text-sm pt-2';

  return (
    <form className="mt-8 flex flex-col items-start gap-4 text-gray-400">
      <div className="flex w-full gap-2 pr-4">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="name" className="font-semibold">
            Nombre
          </label>
          <input
            id="name"
            className={InputStyle}
            placeholder="Juan"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex w-full flex-col gap-2">
          <label htmlFor="second" className="font-semibold">
            Apellido
          </label>
          <input
            id="second"
            className={InputStyle}
            placeholder="Pérez"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-1 pr-4">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          id="email"
          className={InputStyle}
          placeholder="juanperez@gmail.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex h-[200px] w-full flex-col gap-2 pr-4">
        <label htmlFor="mensaje" className="font-semibold">
          Tú mensaje
        </label>
        <textarea
          id="mensaje"
          className={TextAreaStyle}
          placeholder="Hola! me interesa saber más..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="flex w-fit items-center justify-center gap-4 rounded-lg bg-[#ff2323] p-2 px-6 font-exo text-sm font-semibold text-white hover:bg-green-500"
      >
        ENVIAR MENSAJE
        <CaretDoubleRight size={18} />
      </button>
    </form>
  );
};

export default Form;
