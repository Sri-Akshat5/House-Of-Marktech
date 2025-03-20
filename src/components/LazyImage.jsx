import { useState, useEffect } from "react";

const LazyImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageSrc(src);
  }, [src]);

  return (
    <img
      src={imageSrc || "https://picsum.photos/1400/140"}
      alt={alt}
      className="w-full h-32 object-cover rounded-lg"
    />

    
  );
};

export default LazyImage;
