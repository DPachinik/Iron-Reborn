import { CaretDoubleRight } from 'phosphor-react';
import React, { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [inputActive, setInputActive] = useState(false);

  const InputStyle = `flex w-full  h-[30px] ${inputActive ? ' py-4 bg-[#2C2C2C]' : 'h-[30px] pt-0 bg-[#1C1C1C] '} outline-none bg-[#1C1C1C]  pl-2 placeholder:text-gray border-b-2 border-b-[#2C2C2C] text-sm transition-all duration-1000`;
  const TextAreaStyle = `flex w-full ${inputActive ? 'h-[100px] pt-4 bg-[#2C2C2C]' : 'h-[30px] pt-0 bg-[#1C1C1C] '}  outline-none  pl-2 placeholder:text-gray  border-b-2 border-b-[#2C2C2C] text-sm transition-all duration-1000 `;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      return;
    }

    const templateParams = {
      name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        'service_aqrscsn',
        'template_fj3xuvr',
        templateParams,
        'AuiPKk9QljhIkwWU2'
      )
      .then(
        (res) => {
          console.log('respuesta', res);
          toast.success('Mensaje enviado con éxito !', {
            style: { background: '#1C1C1C', color: '#ffff' },
          });
          setEmail('');
          setName('');
          setMessage('');
        },
        (err) => {
          console.log('Error:', err);
        }
      );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex h-[300px] flex-col items-start gap-4 text-gray-400"
    >
      <div
        className={`flex h-full w-full flex-col ${inputActive ? 'gap-6' : 'justify-center gap-8'} `}
      >
        <div className="flex w-full gap-6 pr-4">
          <div className="flex w-full flex-col gap-2">
            <legend className="text-white">
              {inputActive ? 'NOMBRE' : ''}
            </legend>
            <input
              id="name"
              className={InputStyle}
              placeholder={`${inputActive ? '' : 'NOMBRE'}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onClick={() => setInputActive(true)}
            />
          </div>
          <div className="pr flex w-full flex-col gap-2">
            <legend className="text-white">{inputActive ? 'EMAIL' : ''}</legend>
            <input
              id="email"
              className={InputStyle}
              placeholder={`${inputActive ? '' : 'EMAIL'}`}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onClick={() => setInputActive(true)}
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-2 pr-4">
          <legend className="text-white">{inputActive ? 'MENSAJE' : ''}</legend>
          <textarea
            id="mensaje"
            className={TextAreaStyle}
            placeholder={`${inputActive ? '' : 'MENSAJE'}`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onClick={() => setInputActive(true)}
          />
        </div>
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
