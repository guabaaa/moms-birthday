import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import BackgroundEffect from "../components/BackgroundEffect";
import "@/app/globals.css";

const danjoBold = localFont({
  src: "../../public/font/Danjo-bold-Regular.otf",
  display: "swap",
  variable: "--font-danjo-bold",
});

const changwonDangam = localFont({
  src: "../../public/font/ChangwonDangamRound.otf",
  display: "swap",
  variable: "--font-changwon-dangam",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://moms-birthday.vercel.app"), // 기본 도메인 설정 (필요시 수정)
  title: "사랑하는 엄마의 60번째 생신",
  description: "엄마의 환갑을 함께 축하해주세요",
  openGraph: {
    title: "사랑하는 엄마의 60번째 생신",
    description: "엄마의 환갑을 함께 축하해주세요",
    images: ["/image/mainPhoto.jpeg"],
  },
  icons: {
    icon: "/image/petal.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${changwonDangam.variable} ${danjoBold.variable} bg-[#0E0E0E]`}
      >
        <BackgroundEffect />
        {children}
      </body>
    </html>
  );
}
