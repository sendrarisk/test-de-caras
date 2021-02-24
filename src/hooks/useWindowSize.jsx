import { useState, useEffect } from 'react';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        window.addEventListener("load", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("load", handleResize)
        };
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
}

export default useWindowSize;