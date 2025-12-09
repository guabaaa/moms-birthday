"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import CommentSection from "../components/CommentSection";
import ImageSlider from "../components/ImageSlider";
import Gallery from "../components/Gallery";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

const images = [
  "/image/KakaoTalk_Photo_2025-12-09-22-54-39 001.jpeg",
  "/image/KakaoTalk_Photo_2025-12-09-22-54-39 002.jpeg",
  "/image/KakaoTalk_Photo_2025-12-09-22-54-40 003.jpeg",
  "/image/KakaoTalk_Photo_2025-12-09-22-54-40 004.jpeg",
  "/image/KakaoTalk_Photo_2025-12-09-22-54-40 005.jpeg",
  "/image/KakaoTalk_Photo_2025-12-09-22-54-40 006.jpeg",
  "/image/KakaoTalk_Photo_2025-12-09-22-54-40 007.jpeg",
  "/image/KakaoTalk_Photo_2025-12-09-22-54-40 008.jpeg",
  "/image/KakaoTalk_Photo_2025-12-09-22-54-40 009.jpeg",
  "/image/KakaoTalk_Photo_2025-12-09-22-54-40 010.jpeg",
  "/image/KakaoTalk_Photo_2025-12-09-22-54-40 011.jpeg",
  "/image/KakaoTalk_Photo_2025-12-09-22-54-40 012.jpeg",
  "/image/KakaoTalk_Photo_2025-12-09-22-54-40 013.jpeg",
  "/image/KakaoTalk_Photo_2025-12-09-22-54-40 014.jpeg",
  "/image/KakaoTalk_Photo_2025-12-09-22-54-41 015.jpeg",
  "/image/KakaoTalk_Photo_2025-12-09-22-54-41 016.jpeg",
  "/image/KakaoTalk_Photo_2025-12-09-22-54-41 017.jpeg",
  "/image/KakaoTalk_Photo_2025-12-09-22-54-41 018.jpeg",
  "/image/KakaoTalk_Photo_2025-12-09-22-54-41 019.jpeg",
  "/image/KakaoTalk_Photo_2025-12-09-22-54-41 020.jpeg",
];

// 슬라이더용 이미지 (처음 5장)
const sliderImages = images.slice(0, 5);

// 갤러리용 이미지 (나머지)
const galleryImages = images;

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-100 flex items-center justify-center p-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center relative z-40"
      >
        <motion.h1
          {...fadeInUp}
          className="text-4xl font-bold text-rose-600 mb-8 font-danjo-bold"
        >
          AEKOM's DAY
        </motion.h1>

        <div className="space-y-24">
          <motion.div {...fadeInUp} className="py-4">
            <p className="text-gray-600 text-lg leading-relaxed">
              아름다운 애경씨의 소중한 60번째 생일.
              <br />
              가족들을 위해 사셨던 그 동안의 날을 감사하며,
              <br />
              앞으로의 인생은 더욱 찬란하게 꽃길만 걸으세요!
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <ImageSlider images={sliderImages} autoPlayInterval={3000} />
          </motion.div>

          <motion.div {...fadeInUp} className="border-t border-gray-200 pt-6">
            <p className="text-gray-500 text-sm mb-2">일시</p>
            <p className="text-gray-800 font-semibold text-lg">
              2025년 12월 20일 (토요일)
            </p>
            <p className="text-gray-800 font-semibold text-lg">
              오전 11시 30분
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="border-t border-gray-200 pt-6">
            <p className="text-gray-500 text-sm mb-2">장소</p>
            <p className="text-gray-800 font-semibold text-lg">부평 경복궁</p>
            <p className="text-gray-600 text-sm mt-1 mb-3">
              인천광역시 부평구 삼산동 464-5 명윤빌딩
            </p>
            <Map
              address="인천광역시 부평구 삼산동 464-5 명윤빌딩"
              placeName="부평 경복궁"
            />
          </motion.div>

          <motion.div {...fadeInUp}>
            <Gallery images={galleryImages} />
          </motion.div>
        </div>

        <motion.div {...fadeInUp}>
          <CommentSection />
        </motion.div>
      </motion.div>
    </main>
  );
}
