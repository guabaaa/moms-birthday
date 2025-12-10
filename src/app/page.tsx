"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import CommentSection from "../components/CommentSection";
import StorySection from "../components/StorySection";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

// 1. Teenage
const teenageImages = ["/image/middle1.jpeg", "/image/middle2.jpeg"];

// 2. 20s
const twentiesImages = [
  "/image/20-1.jpeg",
  "/image/20-2.jpeg",
  "/image/20-3.jpeg",
];

// 3. Late 20s / Wedding
const lateTwentiesImages = [
  "/image/20-4.jpeg",
  "/image/20-5.jpeg",
  "/image/20-6.jpeg",
  "/image/20-7.jpeg",
  "/image/20-8.jpeg",
  "/image/20-9.jpeg",
];

// 4. 30s / Motherhood
const thirtiesImages = [
  "/image/30-1.jpeg",
  "/image/30-2.jpeg",
  "/image/30-3.jpeg",
  "/image/30-4.jpeg",
  "/image/30-5.jpeg",
  "/image/30-6.jpeg",
];

// KakaoTalk Photos (Remaining for 40s and 50s)
const kakaoPhotosBatch1 = [
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

const kakaoPhotosBatch2 = [
  "/image/KakaoTalk_Photo_2025-12-10-21-39-31 001.jpeg",
  "/image/KakaoTalk_Photo_2025-12-10-21-39-31 002.jpeg",
  "/image/KakaoTalk_Photo_2025-12-10-21-39-31 003.jpeg",
  "/image/KakaoTalk_Photo_2025-12-10-21-39-31 004.jpeg",
  "/image/KakaoTalk_Photo_2025-12-10-21-39-31 005.jpeg",
  "/image/KakaoTalk_Photo_2025-12-10-21-39-31 006.jpeg",
  "/image/KakaoTalk_Photo_2025-12-10-21-39-31 007.jpeg",
  "/image/KakaoTalk_Photo_2025-12-10-21-39-32 008.jpeg",
  "/image/KakaoTalk_Photo_2025-12-10-21-39-32 009.jpeg",
  "/image/KakaoTalk_Photo_2025-12-10-21-39-32 010.jpeg",
  "/image/KakaoTalk_Photo_2025-12-10-21-39-32 011.jpeg",
  "/image/KakaoTalk_Photo_2025-12-10-21-39-32 012.jpeg",
  "/image/KakaoTalk_Photo_2025-12-10-21-39-32 013.jpeg",
  "/image/KakaoTalk_Photo_2025-12-10-21-39-32 014.jpeg",
];

const allRemainingPhotos = [...kakaoPhotosBatch1, ...kakaoPhotosBatch2];
const halfIndex = Math.ceil(allRemainingPhotos.length / 2);

// 5. 40s
const fortiesImages = kakaoPhotosBatch1;

// 6. 50s
const fiftiesImages = kakaoPhotosBatch2;

const storyData = [
  {
    images: teenageImages,
    text: "꿈 많고 쾌활하던 작은 소녀는\n세상을 향한 설렘으로 가득했어요.",
    direction: "left" as const,
  },
  {
    images: twentiesImages,
    text: "시간이 흘러,\n좋아하는 일을 마음껏 펼치는\n아름다운 숙녀가 되었고,",
    direction: "right" as const,
  },
  {
    images: lateTwentiesImages,
    text: "평생을 함께할 사람을 만나\n서로를 깊이 사랑하게 되었어요.",
    direction: "left" as const,
  },
  {
    images: thirtiesImages,
    text: "서툴고 어렵던 순간들도 많았지만,\n두 아이의 엄마가 되어\n더 큰 사랑을 배워갔어요.",
    direction: "right" as const,
  },
  {
    images: fortiesImages,
    text: "그리고 어느새,\n가족과 함께 쌓아온 시간들이\n삶의 가장 큰 힘이 되어주었고,",
    direction: "left" as const,
  },
  {
    images: fiftiesImages,
    text: "지나온 모든 순간들이\n지금의 나를 만들어주었음을\n깊이 느끼게 되었어요.",
    direction: "right" as const,
  },
  {
    images: ["/image/mainPhoto.jpeg"],
    text: "그리고 이야기는\n앞으로도 찬란하고, 아름답게 이어집니다.",
    direction: "center" as const,
  },
];

// For Gallery/Slider, use all images mixed
const allImages = [
  ...teenageImages,
  ...twentiesImages,
  ...lateTwentiesImages,
  ...thirtiesImages,
  ...fortiesImages,
  ...fiftiesImages,
];

// 슬라이더용 이미지 (처음 5장)
const sliderImages = allImages.slice(0, 5);

// 갤러리용 이미지
const galleryImages = allImages;

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <main className="min-h-screen bg-transparent text-neutral-200 font-sans selection:bg-neutral-700">
      {/* Title Section */}
      <section className="h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-neutral-100 mb-6 font-danjo-bold tracking-widest"
          >
            AEKYOM&apos;s DAY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-neutral-500 font-light tracking-[0.2em] text-sm md:text-base"
          >
            THE 60TH BIRTHDAY STORY
          </motion.p>
        </motion.div>
      </section>

      {/* Story Sections */}
      <section className="max-w-5xl mx-auto pb-24">
        {storyData.map((story, index) => (
          <StorySection
            key={index}
            images={story.images}
            text={story.text}
            direction={story.direction}
          />
        ))}
      </section>

      {/* Invitation Details */}
      <section className="bg-[#111111] py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md w-full mx-auto space-y-16 text-center"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-amber-600/80 mb-8 font-danjo-bold">
              CELEBRATION
            </h2>
            <p className="text-neutral-400 leading-loose">
              소중한 분들을 모시고
              <br />
              따뜻한 식사를 나누고 싶습니다.
              <br />
              부디 참석하시어 축하해 주시면
              <br />
              더없는 기쁨이 되겠습니다.
            </p>
          </div>

          <div className="border-t border-neutral-800 pt-8 space-y-2">
            <p className="text-amber-600/60 text-xs tracking-widest uppercase mb-4">
              Date & Time
            </p>
            <p className="text-xl text-neutral-200 font-medium">
              2025. 12. 20 (Sat)
            </p>
            <p className="text-lg text-neutral-400">AM 11:30</p>
          </div>

          <div className="border-t border-neutral-800 pt-8 space-y-2">
            <p className="text-amber-600/60 text-xs tracking-widest uppercase mb-4">
              Location
            </p>
            <p className="text-xl text-neutral-200 font-medium">부평 경복궁</p>
            <p className="text-sm text-neutral-500 mb-6">
              인천광역시 부평구 삼산동 464-5 명윤빌딩
            </p>
            <div className="rounded-lg overflow-hidden border border-neutral-800 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <Map
                address="인천광역시 부평구 삼산동 464-5 명윤빌딩"
                placeName="부평 경복궁"
              />
            </div>
          </div>

          <div className="pt-12">
            <CommentSection />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
