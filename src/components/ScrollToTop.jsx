// src/components/ScrollToTop.jsx
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    // Only scroll to top when navigating to a different page (not the home page)
    // If returning to home page, let the browser's scroll restoration handle it
    if (location.pathname !== prevPathname.current && location.pathname !== '/') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
    
    prevPathname.current = location.pathname;
  }, [location.pathname]);
  
  return null;
};

export default ScrollToTop;