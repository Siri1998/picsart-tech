import { SVGProps } from 'react';

export function DotsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='800px'
      height='800px'
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      {...props}
    >
      <path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
    </svg>
  );
}
