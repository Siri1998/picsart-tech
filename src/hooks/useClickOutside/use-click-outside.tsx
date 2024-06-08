import { MutableRefObject, useEffect } from 'react';

export function useClickOutside(
  ref: MutableRefObject<HTMLElement | null>,
  onClick: (e?: MouseEvent) => void,
  exceptSelectors: string[] = [],
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      const [mouseTarget] = event.path ? event.path : [event.target];

      const canClose = !exceptSelectors.some((selector) => mouseTarget.closest(selector));

      if (ref?.current && !ref.current.contains(mouseTarget) && canClose) {
        onClick(event);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClick, exceptSelectors]);
}
