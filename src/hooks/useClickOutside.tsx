import { useEffect, RefObject } from 'react';

type Event = MouseEvent | TouchEvent;
interface Props {
    elementRef: RefObject<HTMLElement>;
    handler: (event: Event) => void;
}

export const useClickOutside: React.FC<Props> = ({ elementRef, handler }) => {
    useEffect(() => {
        const listener = (event: Event) => {
            const element = elementRef?.current;
            if (!element?.contains(event?.target as Node)) {
                handler(event);
            }
        };
        document.addEventListener(`mousedown`, listener);
        document.addEventListener(`touchstart`, listener);
        return () => {
            document.removeEventListener(`mousedown`, listener);
            document.removeEventListener(`touchstart`, listener);
        };
    }, [elementRef, handler]);

    return null;
};
