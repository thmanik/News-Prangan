import { useState, useEffect, useCallback } from 'react'; 

const useHeaderScroll = () => {
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

   
    const handleScroll = useCallback(() => {
        
        if (window.scrollY < 50) {
            setIsNavVisible(true);
            setLastScrollY(window.scrollY);
            return;
        }

       
        if (window.scrollY > lastScrollY && window.scrollY > 300) {
            setIsNavVisible(false); 
        } 
        
        else if (window.scrollY < lastScrollY) {
            setIsNavVisible(true); 
        }

       
        setLastScrollY(window.scrollY); 
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]); 
  

    return isNavVisible; 
};

export default useHeaderScroll;