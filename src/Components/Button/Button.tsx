import React, { MouseEventHandler, ReactNode } from 'react';

export type ButtonType = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, onClick }: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-4 right-4 flex items-center justify-center gap-4 rounded-lg bg-[#ff2323] px-6 py-1 text-sm shadow-md shadow-black/90 duration-300 hover:scale-110"
    >
      {children}
    </button>
  );
};

export default Button;
