import type { Metadata } from "next";
import localFont from "next/font/local";
import FlowerParticles from "../components/FlowerParticles";
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

export const metadata: Metadata = {
  title: "환갑잔치 초대장",
  description: "엄마 환갑잔치에 초대합니다",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${changwonDangam.variable} ${danjoBold.variable}`}>
        <FlowerParticles />
        {children}
      </body>
    </html>
  );
}
