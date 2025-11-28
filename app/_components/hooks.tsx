import {useEffect, useState} from "react";

export const useScroll = () => {
    const [scrollRelativePosition, setScrollRelativePosition] = useState<number>(0);
    
    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        const handleScroll = () => {
            setScrollRelativePosition(window.scrollY / window.innerHeight);
        }
        
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    
    return scrollRelativePosition;
}


export const useWindowWidth = () => {
  const [screenSize, setScreenSize] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    // Guard for non-browser environments
    if (typeof window === "undefined") return;

    const handleResize = () => setScreenSize(window.innerWidth);

    // Initial sync (in case of late mount)
    handleResize();

    window.addEventListener("resize", handleResize);
    // Use passive listener for performance
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};