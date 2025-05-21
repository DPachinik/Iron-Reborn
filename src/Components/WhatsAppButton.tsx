import React from 'react';
import { WhatsappLogo } from 'phosphor-react';

const WhatsAppButton = () => {
  return (
    <div className="rounded-xs hover: z-10 flex w-[150px] items-center justify-center gap-2 rounded-md bg-gray-500 py-1 font-bold text-white transition hover:bg-green-600">
      <WhatsappLogo size={24} />
      <p className="text-sm">Contactar</p>
    </div>
  );
};

export default WhatsAppButton;
