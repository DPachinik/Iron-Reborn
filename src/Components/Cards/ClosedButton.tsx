import { X } from 'phosphor-react';
import React from 'react';

type ClosedButtonProps = {
  handleCloseClick: () => void;
};

const ClosedButton: React.FC<ClosedButtonProps> = ({ handleCloseClick }) => {
  return (
    <>
      <button
        onClick={handleCloseClick}
        className="absolute right-8 top-2 z-20 text-white hover:text-red-500"
      >
        <X size={32} />
      </button>
    </>
  );
};

export default ClosedButton;
