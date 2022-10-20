import { useEffect, useState } from "react";
interface  Size {
    width: number;
}

export const useScreenSize = (): Size => {
    const [windowSize, setWindowSize] = useState<Size>({
        width: window.innerWidth,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};
