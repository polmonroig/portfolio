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