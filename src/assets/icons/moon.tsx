import { SVGProps } from 'react';

export function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='512'
      height='512'
      viewBox='0 0 512 512'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx='256' cy='256' r='150' fill='#f3e5ab' />
      <circle cx='200' cy='245' r='27.5' fill='#d2b48c' />
      <circle cx='300' cy='285' r='22' fill='#d2b48c' />
      <circle cx='256' cy='305' r='16.5' fill='#d2b48c' />
      <circle cx='316' cy='245' r='22' fill='#d2b48c' />
      <circle cx='256' cy='205' r='16.5' fill='#d2b48c' />
      <path
        d='M135,285a65,65,0,0,1,129-20.9,65.4,65.4,0,0,1,45.7,0A65,65,0,0,1,375,290H135Z'
        fill='#8a2be2'
      />
      <path
        d='M285,185a65,65,0,0,1,129-20.9,65.4,65.4,0,0,1,45.7,0A65,65,0,0,1,525,190H285Z'
        fill='#8a2be2'
      />
    </svg>
  );
}
