import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-rose-100">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-rose-600 mb-4">페이지를 찾을 수 없습니다</h2>
        <Link href="/" className="text-rose-500 hover:underline">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

