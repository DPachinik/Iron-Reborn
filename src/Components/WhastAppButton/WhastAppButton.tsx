import { ReactNode } from 'react';

export type PropsButton = {
  url: string;
  children: ReactNode;
  className: string;
};

const WhastAppButton = ({ children, url, className }: PropsButton) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex w-fit items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium text-white transition-all duration-200 hover:scale-105 md:px-8 md:py-2 md:text-lg ${className} `}
    >
      {children}
    </a>
  );
};

export default WhastAppButton;
