"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  autoPlayInterval?: number;
}

export default function ImageSlider({
  images,
  autoPlayInterval = 3000,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full mb-6 rounded-lg overflow-hidden shadow-lg">
      <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`AEKOM's DAY ${index + 1}`}
              fill
              className="object-contain"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
