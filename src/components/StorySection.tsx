"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface StorySectionProps {
  images: string[];
  text: string;
  direction: "left" | "right" | "center";
}

export default function StorySection({
  images,
  text,
  direction,
}: StorySectionProps) {
  const isLeft = direction === "left";
  const isCenter = direction === "center";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className={`flex flex-col ${
        isCenter
          ? "items-center text-center"
          : isLeft
          ? "md:flex-row items-center"
          : "md:flex-row-reverse items-center"
      } gap-8 py-24 px-4 min-h-[50vh] justify-center overflow-hidden`}
    >
      <motion.div
        initial={{ opacity: 0, x: isCenter ? 0 : isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`relative w-full ${
          isCenter ? "max-w-md aspect-[3/4]" : "max-w-sm aspect-[3/4] md:w-1/2"
        } rounded-lg overflow-hidden shadow-2xl bg-neutral-800`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} // 부드러운 전환을 위해 1초
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`Story image ${currentIndex + 1}`}
              fill
              className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              priority={true}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className={`flex-1 ${
          isCenter
            ? "mt-8"
            : isLeft
            ? "md:text-left text-center"
            : "md:text-right text-center"
        }`}
      >
        <p className="text-lg md:text-xl leading-loose font-medium text-neutral-300 whitespace-pre-line font-changwon-dangam">
          {text}
        </p>
      </motion.div>
    </div>
  );
}
