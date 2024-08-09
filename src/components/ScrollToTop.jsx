import { useEffect } from "react";
import { useLocation } from "react-router-dom";





// This function will trigger and take the page to top when the path changes :

const ScrollToTop = () => {

    const { pathname } = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return null;
}

export default ScrollToTop;