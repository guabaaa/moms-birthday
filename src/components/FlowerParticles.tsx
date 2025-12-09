"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Petal {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  opacity: number;
}

export default function FlowerParticles() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // 30개의 꽃잎 생성
    const newPetals = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // 0~100% 사이 랜덤 위치
      animationDuration: 10 + Math.random() * 10, // 10~20초 동안 떨어짐
      delay: Math.random() * 10, // 0~10초 딜레이
      opacity: 0.6 + Math.random() * 0.4, // 투명도
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[9999]">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-[-50px]"
          style={{
            left: `${petal.left}%`,
            opacity: petal.opacity,
            animation: `falling ${petal.animationDuration}s linear ${petal.delay}s infinite`,
          }}
        >
          <div className="animate-spin-slow">
            <Image
              src="/image/petal.svg"
              alt="flower petal"
              width={24}
              height={24}
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </div>
        </div>
      ))}
      <style jsx>{`
        @keyframes falling {
          0% {
            transform: translateY(-10vh) translateX(0);
          }
          100% {
            transform: translateY(110vh) translateX(20px);
          }
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
