import { useEffect, useRef } from "react";

export default function useScrollSectionHash(sectionIds, offset = 120) {
  const isRestoringScroll = useRef(true);

  useEffect(() => {
    // Allow scroll restoration to happen before updating hash
    const restoreTimer = setTimeout(() => {
      isRestoringScroll.current = false;
    }, 300);

    const handleScroll = () => {
      // Don't update hash during initial scroll restoration
      if (isRestoringScroll.current) return;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom > offset) {
            if (window.location.hash !== `#${id}`) {
              history.replaceState(null, "", `#${id}`);
            }
            return;
          }
        }
      }
      // Optionally clear hash if above all sections
      // history.replaceState(null, "", " ");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(restoreTimer);
    };
  }, [sectionIds, offset]);
}