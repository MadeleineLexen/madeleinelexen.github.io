import React from "react";

const ResponsiveHeroImage = ({ desktopSrc, mobileSrc, alt, className }) => {
  return (
    <picture>
      <source srcSet={mobileSrc} media="(max-width: 768px)" />
      <img src={desktopSrc} alt={alt} className={className} />
    </picture>
  );
};

export default ResponsiveHeroImage;
