import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const InputStyle =
    'w-auto  h-[30px] md:w-[400px] border-[1px] border-[#3A3A3A] bg-[#2C2C2C] outline-none pl-2 text-[#3A3A3A]';

  return (
    <div className="grid grid-cols-2 items-center py-12">
      <form className=" ">
        <div className="flex flex-col items-center gap-4">
          <input
            className={InputStyle}
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={InputStyle}
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className={InputStyle}
            placeholder="Mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="w-fit rounded-lg bg-[#ff2323] px-8 text-white"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
