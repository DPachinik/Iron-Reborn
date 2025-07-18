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
      className={`flex w-fit items-center justify-center gap-2 rounded-lg px-2 py-1 font-medium text-white transition ${className} `}
    >
      {children}
    </a>
  );
};

export default WhastAppButton;
