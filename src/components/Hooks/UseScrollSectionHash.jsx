import { useEffect } from "react";

export default function useScrollSectionHash(sectionIds, offset = 120) {
  useEffect(() => {
    const handleScroll = () => {
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);
}